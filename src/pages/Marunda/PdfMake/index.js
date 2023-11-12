import pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { useEffect, useState } from "preact/hooks";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

// pdfMake.fonts = {
//   Ipaex: {
//     normal: "ipaexg.ttf",
//     bold: "ipaexm.ttf",
//   },
// };
export function Marunda() {
  const [uri, setUri] = useState("");

  useEffect(() => {
    var docDefinition = {
      content: [
        {
          text: "This is a header (whole paragraph uses the same header style)\n\n",
          style: "header",
        },
        {
          text: [
            "It is however possible to provide an array of texts ",
            "to the paragraph (instead of a single string) and have ",
            { text: "a better ", fontSize: 15, bold: true },
            "control over it. \nEach inline can be ",
            { text: "styled ", fontSize: 20 },
            { text: "independently ", italics: true, fontSize: 40 },
            "then.\n\n",
          ],
        },
        { text: "Mixing named styles and style-overrides", style: "header" },
        {
          style: "bigger",
          italics: false,
          text: [
            "We can also mix named-styles and style-overrides at both paragraph and inline level. ",
            'For example, this paragraph uses the "bigger" style, which changes fontSize to 15 and sets italics to true. ',
            "Texts are not italics though. It's because we've overriden italics back to false at ",
            "the paragraph level. \n\n",
            "We can also change the style of a single inline. Let's use a named style called header: ",
            { text: "like here.\n", style: "header" },
            "It got bigger and bold.\n\n",
            "OK, now we're going to mix named styles and style-overrides at the inline level. ",
            "We'll use header style (it makes texts bigger and bold), but we'll override ",
            "bold back to false: ",
            { text: "wow! it works!", style: "header", bold: false },
            "\n\nMake sure to take a look into the sources to understand what's going on here.",
          ],
        },
        // {
        //   layout: "lightHorizontalLines", // optional
        //   table: {
        //     // headers are automatically repeated if the table spans over multiple pages
        //     // you can declare how many rows should be treated as headers

        //     headerRows: 1,
        //     widths: ["*", "auto", 100, "*"],

        //     body: [
        //       ["First", "Second", "Third", "The last one"],
        //       ["Value 1", "Value 2", "Value 3", "Value 4"],
        //       [{ text: "Bold value", bold: true }, "Val 2", "Val 3", "Val 4"],
        //     ],
        //   },
        // },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        bigger: {
          fontSize: 15,
          italics: true,
        },
      },
      //   header: "simple text",

      //   footer: {
      //     columns: ["Left part", { text: "Right part", alignment: "right" }],
      //   },
    };

    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.getDataUrl((dataUrl) => {
      //   console.log(dataUrl);
      setUri(dataUrl);
    });

    return () => {};
  }, []);

  return (
    <div>
      <object
        //    style="position: absolute; height: 100%"
        style={{
          position: "absolute",
          height: "100%",
        }}
        width="100%"
        data={uri}
        type="application/pdf"
      >
        {" "}
      </object>
    </div>
  );
}
