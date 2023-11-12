import { useEffect, useState } from "preact/hooks";
import html2pdf from "html2pdf.js";

export function Marunda() {
  const [uri, setUri] = useState("");

  function generatePDF() {
    const element = document.getElementById("html-content-holder");
    const opt = {
      //   margin: 0.5,
      margin: 0,
      filename: "myfile.pdf",
      image: { type: "png", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf()
      .from(element)
      .set(opt)
      .outputPdf("datauri")
      .then((out) => {
        // console.log(out);
        setUri(out);
      });
  }

  //   "https://dagrs.berkeley.edu/sites/default/files/2020-01/sample.pdf"

  useEffect(() => {
    setTimeout(() => {
      // generatePDF();
    }, 5000);
    return () => {};
  }, []);

  return (
    <div>
      <object
        //    style="position: ml-1 leading-normal -mt-[6px] mb-[6px]; height: 100%"
        style={{
          position: "absolute -mt-[6px] mb-[6px]",
          height: "100%",
        }}
        width="100%"
        data={uri}
        type="application/pdf"
      >
        <div
          id="html-content-holder"
          className={"w-[800px] bg-white text-black pt-12 px-6"}
        >
          <div class={"header flex justify-between"}>
            <div>
              <h3 class={"font-bold text-sm"}>INFORMASI TAGIHAN AIR</h3>
              <h4 class={"text-xs"}>Kepada Yth,</h4>
              <h3 class={"font-bold text-sm"}>PT. ANDALAN FURNINDO</h3>
            </div>
            <div>
              <h3 class={"text-xl font-bold text-right"}>Marunda Center</h3>
              <table class={"mt-2 w-[400px] mb-2 "}>
                <tbody>
                  <tr>
                    <td
                      class={
                        "border-solid border border-black border-b-0 border-r-0 text-xs relative"
                      }
                    >
                      <p
                        class={
                          "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1"
                        }
                      >
                        No.Inv #
                      </p>
                    </td>
                    <td
                      class={
                        "border-solid border border-black text-xs relative border-b-0"
                      }
                    >
                      <p
                        class={
                          "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1"
                        }
                      >
                        INV/GCP/WTR/08/23/064
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class={
                        "border-solid border border-black text-xs relative border-r-0 border-b-0"
                      }
                    >
                      <p
                        class={
                          "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1"
                        }
                      >
                        No.F.Pajak
                      </p>
                    </td>
                    <td
                      class={
                        "border-solid border border-black text-xs border-b-0"
                      }
                    ></td>
                  </tr>
                  <tr>
                    <td
                      class={
                        "border-solid border border-black text-xs relative border-r-0"
                      }
                    >
                      <p
                        class={
                          "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1"
                        }
                      >
                        No. Pelanggan
                      </p>
                    </td>
                    <td
                      class={
                        "border-solid border border-black text-xs relative"
                      }
                    >
                      <p
                        class={
                          "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1"
                        }
                      >
                        C1057
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* section 2  */}
          <table class={"mt-4 w-[85%] mb-2"}>
            <thead>
              <tr>
                <th
                  class={
                    "border-solid border border-black border-b-0 border-r-0 text-xs relative"
                  }
                >
                  <p
                    class={
                      "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                    }
                  >
                    Blok
                  </p>
                </th>
                <th
                  class={
                    "border-solid border border-black border-b-0 border-r-0 text-xs relative"
                  }
                >
                  <p
                    class={
                      "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                    }
                  >
                    Diameter Pipa
                  </p>
                </th>
                <th
                  class={
                    "border-solid border border-black border-b-0 border-r-0 text-xs relative"
                  }
                >
                  <p
                    class={
                      "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                    }
                  >
                    No. Tagihan
                  </p>
                </th>
                <th
                  class={
                    "border-solid border border-black border-b-0 border-r-0 text-xs relative"
                  }
                >
                  <p
                    class={
                      "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                    }
                  >
                    Tgl Proses
                  </p>
                </th>
                <th
                  class={
                    "border-solid border border-black border-b-0 border-r-0 text-xs relative"
                  }
                >
                  <p
                    class={
                      "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                    }
                  >
                    Total Tagihan
                  </p>
                </th>
                <th
                  class={
                    "border-solid border border-black border-b-0 text-xs relative"
                  }
                >
                  <p
                    class={
                      "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                    }
                  >
                    Tgl Jatuh Tempo
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  class={
                    "border-solid border border-black border-r-0 text-xs relative"
                  }
                >
                  <p
                    class={
                      "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                    }
                  >
                    M No 1
                  </p>
                </td>
                <td
                  class={
                    "border-solid border border-black text-xs relative border-r-0"
                  }
                >
                  <p
                    class={
                      "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                    }
                  >
                    6 Inch
                  </p>
                </td>
                <td
                  class={
                    "border-solid border border-black text-xs relative border-r-0"
                  }
                >
                  <p
                    class={
                      "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                    }
                  ></p>
                </td>
                <td
                  class={
                    "border-solid border border-black text-xs relative border-r-0"
                  }
                >
                  <p
                    class={
                      "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center font-bold"
                    }
                  >
                    1-Sep-23
                  </p>
                </td>
                <td
                  class={
                    "border-solid border border-black text-xs relative border-r-0"
                  }
                >
                  <p
                    class={
                      "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                    }
                  >
                    Rp112.744.046
                  </p>
                </td>
                <td class={"border-solid border border-black text-xs relative"}>
                  <p
                    class={
                      "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center font-bold"
                    }
                  >
                    20-Sep-23
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          {/* section 3  */}
          <div
            class={
              "mt-4 w-full py-1 border-t border-solid border-black border-b border-r"
            }
          >
            <table class={"w-full"}>
              <thead>
                <tr>
                  <td
                    class={
                      "border-solid border border-black border-r-0 text-base relative w-[77%]"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[8px] mb-[8px] bottom-2 left-1 text-left font-bold"
                      }
                    >
                      Penjelasan Aktifitas
                    </p>
                  </td>
                  <td
                    class={
                      "border-solid border border-black text-base relative border-r-0"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[8px] mb-[8px] bottom-2 left-1 text-center font-bold"
                      }
                    >
                      Biaya
                    </p>
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </object>
    </div>
  );
}
