import { useEffect, useState } from "preact/hooks";
import html2pdf from "html2pdf.js";
import query from "query-string";
import moment from "moment";
import {
  WeCurrencyWith00,
  base64ToBase64Url,
  base64UrlToBase64,
  convertNumberSm,
} from "../../components/utils/Converter";

export function Marunda() {
  const [uri, setUri] = useState("");
  const params = query.parse(window.location.search);

  // console.log(params, "params");

  const getdata = () => {
    const data = JSON.parse(atob(base64UrlToBase64(params?.data)));
    if (!!data && !!data.url) {
      return {};
    } else {
      return data;
    }
  };

  const data = getdata();

  async function generatePDF() {
    const element = document.getElementById("html-content-holder");
    const opt = {
      //   margin: 0.5,
      margin: 0,
      filename: data.invoice + ".pdf",
      image: { type: "png", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    await html2pdf().from(element).set(opt).save();
    setTimeout(() => {
      // window.location.href = "about:blank";
      window.close();
    }, 500);
    // .outputPdf("datauri");
    // .then((out) => {
    //   // console.log(out);
    //   setUri(out);
    // });
    // window.close();
    // http://127.0.0.1:5173/marunda?data=eyJpZCI6NjE3NDUsImxhaW5fbGFpbiI6eyJEaXNjb3VudCBLd2goMTAwIHggMjI4Nzg5KSI6MjI4Nzg5MDAsIkJpYXlhIFBlbmVyYW5nYW4gSmFsYW4gVW11bSAoNSUpIjoxMDI5NTUwNSwiVGFnaWhhbiBMYWlubnlhICgxMCUpIjoyMTYyMDU2MC41fSwidG90YWwiOjIzNzgyNjE2NS41LCJncmFuZHRvdGFsIjoyMzc4MjYxNjUuNX0=
  }

  // eyJpZCI6NjE3NDUsImxhaW5fbGFpbiI6eyJUYWdpaGFuIExhaW5ueWEgKDEwJSkiOjYwMDZ9LCJzdWJfdG90YWwiOjYwMDYwLCJncmFuZHRvdGFsIjo2NjA2NiwidW5pdCI6Im0zIiwic3RhcnRfZGF0ZSI6IjIwMjMtMTAtMzFUMTk6MDA6MDArMDg6MDAiLCJlbmRfZGF0ZSI6IjIwMjMtMTEtMDlUMDg6MDA6MDArMDg6MDAiLCJzdGFydF9tZXRlciI6OTI4LjA2LCJlbmRfbWV0ZXIiOjk0OC4wOCwibWluaW11bV9jaGFyZ2VfdG90YWwiOjAsImJpbGxpbmdfdXNhZ2UiOjIwLjAyLCJ1c2FnZSI6MjAuMDIsInBhcmFtZXRlcl8xIjoiMjYiLCJwYXJhbWV0ZXJfMiI6IjI2IiwicGFyYW1ldGVyXzMiOiIzNSIsInByaWNlX3BhcmFtZXRlcl8xIjozMDAwLCJwcmljZV9wYXJhbWV0ZXJfMiI6MzUwMCwicHJpY2VfcGFyYW1ldGVyXzMiOjQwMDAsImFtb3VudF9wYXJhbWV0ZXJfMSI6NjAwNjAsImFtb3VudF9wYXJhbWV0ZXJfMiI6MCwiYW1vdW50X3BhcmFtZXRlcl8zIjowLCJ1c2FnZV9wYXJhbWV0ZXJfMSI6MjAuMDIsInVzYWdlX3BhcmFtZXRlcl8yIjowLCJ1c2FnZV9wYXJhbWV0ZXJfMyI6MCwiZHVlX2RhdGUiOm51bGwsImN1dF9kYXRlIjoiMjAyMy0xMS0wOSAwNzowMDowMCIsImludm9pY2UiOiJNQy5CTE9LIEUuOTYtSU5WLTA5MTEyMy0yMzhHIiwiZmFrdHVyIjpudWxsLCJpZF9wZWxhbmdnYW4iOiIiLCJ0ZW5hbnRfbmFtZSI6IkUgMyBOTy4xMS1QVC4gVFVOQVMgTUFKVSBNQU5ESVJJIiwiYmlsbGluZ19hZGRyZXNzIjoiRSAzIE5PLjExIn0

  useEffect(() => {
    generatePDF();

    return () => {};
  }, []);

  console.log(
    base64ToBase64Url(
      btoa(
        JSON.stringify({
          id: 61745,
          lain_lain: {
            "Tagihan Lainnya (10%)": 6006,
          },
          sub_total: 60060,
          grandtotal: 66066,
          unit: "m3",
          start_date: "2023-10-31T19:00:00+08:00",
          end_date: "2023-11-09T08:00:00+08:00",
          start_meter: 928.06,
          end_meter: 948.08,
          minimum_charge_total: 0,
          billing_usage: 20.02,
          usage: 20.02,
          parameter_1: "26",
          parameter_2: "26",
          parameter_3: "35",
          price_parameter_1: 3000,
          price_parameter_2: 3500,
          price_parameter_3: 4000,
          amount_parameter_1: 60060,
          amount_parameter_2: 0,
          amount_parameter_3: 0,
          usage_parameter_1: 20.02,
          usage_parameter_2: 0,
          usage_parameter_3: 0,
          due_date: null,
          cut_date: "2023-11-09 07:00:00",
          invoice: "MC.BLOK E.96-INV-091123-238G",
          faktur: null,
          id_pelanggan: "",
          tenant_name: "E 3 NO.11-PT. TUNAS MAJU MANDIRI",
          billing_address: "E 3 NO.11",
        })
      )
    )
  );

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
              <h4 class={"text-sm"}>Kepada Yth,</h4>
              <h3 class={"font-bold text-sm"}>{data.tenant_name}</h3>
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
                        {data.invoice}
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
                    >
                      <p
                        class={
                          "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1"
                        }
                      >
                        {data.faktur}
                      </p>
                    </td>
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
                        {data.id_pelanggan}
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
                <td
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
                </td>
                {/* <td
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
                </td>
                <td
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
                </td> */}
                <td
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
                </td>
                <td
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
                </td>
                <td
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
                </td>
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
                    {data.billing_address}
                  </p>
                </td>
                {/* <td
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
                </td> */}
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
                    {moment(data.cut_date).format("DD-MMM-YY")}
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
                    {WeCurrencyWith00(data.grandtotal)}
                  </p>
                </td>
                <td class={"border-solid border border-black text-xs relative"}>
                  <p
                    class={
                      "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center font-bold"
                    }
                  >
                    {data.due_date
                      ? moment(data.due_date).format("DD-MMM-YY")
                      : ""}
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
                      "border-solid border border-black border-r-0 text-sm relative w-[77%]"
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
                      "border-solid border border-black text-sm relative border-r-0"
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

          {/* sction 3  */}
          <div class={"w-full mt-5 mb-7"}>
            <h4 class={"font-bold text-sm"}>
              Pencatatan Meteran Air Periode{" "}
              {moment(data.cut_date).format("MMMM YYYY")}
            </h4>
          </div>

          {/* section 4 */}
          <div>
            <table class={"mt-4 w-full mb-2"}>
              <thead>
                <tr class={"font-normal"}>
                  <th
                    class={
                      "border-solid border border-black border-b-0 border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "font-normal ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                      }
                    >
                      Tanggal
                    </p>
                  </th>
                  <th
                    class={
                      "border-solid border border-black border-b-0 border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "font-normal ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                      }
                    >
                      Awal
                    </p>
                  </th>
                  <th
                    class={
                      "border-solid border border-black border-b-0 border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "font-normal ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                      }
                    >
                      Akhir
                    </p>
                  </th>
                  <th
                    class={
                      "border-solid border border-black border-b-0 border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "font-normal ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                      }
                    >
                      Pemakaian
                    </p>
                  </th>
                  <th
                    class={
                      "border-solid border border-black border-b-0 border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "font-normal ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                      }
                    >
                      Pemakaian <br /> Minimum
                    </p>
                  </th>
                  <th
                    class={
                      "border-solid border border-black border-b-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "font-normal ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                      }
                    >
                      Total <br /> Pemakaian
                    </p>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    class={
                      "border-solid border border-black border-r-0 text-xs font-semibold relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                      }
                    >
                      {moment(data.start_date).format("DD-MMM-YY")}
                    </p>
                  </td>
                  <td
                    class={
                      "border-solid border border-black text-xs font-semibold relative border-r-0"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                      }
                    >
                      {convertNumberSm(parseFloat(data.start_meter))}
                    </p>
                  </td>
                  <td
                    class={
                      "border-solid border border-black text-xs font-semibold relative border-r-0"
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
                      "border-solid border border-black text-xs font-semibold relative border-r-0"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center font-bold"
                      }
                    ></p>
                  </td>
                  <td
                    class={
                      "border-solid border border-black text-xs font-semibold relative border-r-0"
                    }
                    rowSpan={2}
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                      }
                    >
                      {convertNumberSm(parseFloat(data.minimum_charge_total))}
                    </p>
                  </td>
                  <td
                    class={
                      "border-solid border border-black text-xs font-semibold relative"
                    }
                    rowSpan={2}
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center font-bold"
                      }
                    >
                      {convertNumberSm(parseFloat(data.usage))}
                    </p>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td
                    class={
                      "border-solid border border-black border-r-0 border-t-0 text-xs font-semibold relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                      }
                    >
                      {moment(data.end_date).format("DD MMM YY")}
                    </p>
                  </td>
                  <td
                    class={
                      "border-solid border border-black text-xs font-semibold relative border-r-0 border-t-0"
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
                      "border-solid border border-black text-xs font-semibold relative border-r-0 border-t-0"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                      }
                    >
                      {convertNumberSm(parseFloat(data.end_meter))}
                    </p>
                  </td>
                  <td
                    class={
                      "border-solid border border-black text-xs font-semibold relative border-r-0 border-t-0"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center font-bold"
                      }
                    >
                      {convertNumberSm(parseFloat(data.usage))}
                    </p>
                  </td>

                  {/* <td
                    class={
                      "border-solid border border-black text-xs font-semibold relative border-t-0"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center font-bold"
                      }
                    ></p>
                  </td> */}
                  <td>
                    <p
                      class={
                        "text-right ml-1 leading-normal -mt-[6px] mb-[6px] text-xs font-semibold bottom-2 left-1"
                      }
                    >
                      {}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <table class={"mt-4 w-full mb-2"}>
              <thead>
                <tr class={"font-normal"}>
                  <th
                    class={
                      "border-solid border border-black border-b-0 text-xs relative"
                    }
                    colSpan={2}
                  >
                    <p
                      class={
                        "font-normal ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                      }
                    >
                      Harga Bertingkat
                    </p>
                  </th>

                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    class={
                      "border-solid border border-black border-r-0 text-xs font-semibold relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                      }
                    >
                      {"<"} {data.parameter_1}
                    </p>
                  </td>
                  <td
                    class={
                      "border-solid border border-black text-xs font-semibold relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                      }
                    >
                      {convertNumberSm(parseFloat(data.usage_parameter_1))}
                    </p>
                  </td>

                  <td>
                    <p
                      class={
                        "text-right ml-1 leading-normal -mt-[6px] mb-[6px] text-xs font-semibold bottom-2 left-1"
                      }
                    >
                      {WeCurrencyWith00(parseFloat(data.price_parameter_1))}
                    </p>
                  </td>
                  <td>
                    <p
                      class={
                        "text-right ml-1 leading-normal -mt-[6px] mb-[6px] text-xs font-semibold bottom-2 left-1"
                      }
                    >
                      {WeCurrencyWith00(parseFloat(data.amount_parameter_1))}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class={
                      "border-solid border border-black border-r-0 text-xs font-semibold relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                      }
                    >
                      {">="} {data.parameter_2}
                    </p>
                  </td>
                  <td
                    class={
                      "border-solid border border-black text-xs font-semibold relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                      }
                    >
                      {convertNumberSm(parseFloat(data.usage_parameter_2))}
                    </p>
                  </td>

                  <td>
                    <p
                      class={
                        "text-right ml-1 leading-normal -mt-[6px] mb-[6px] text-xs font-semibold bottom-2 left-1"
                      }
                    >
                      {WeCurrencyWith00(parseFloat(data.price_parameter_2))}
                    </p>
                  </td>
                  <td>
                    <p
                      class={
                        "text-right ml-1 leading-normal -mt-[6px] mb-[6px] text-xs font-semibold bottom-2 left-1"
                      }
                    >
                      {WeCurrencyWith00(parseFloat(data.amount_parameter_2))}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class={
                      "border-solid border border-black border-r-0 text-xs font-semibold relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                      }
                    >
                      {">="} {data.parameter_3}
                    </p>
                  </td>
                  <td
                    class={
                      "border-solid border border-black text-xs font-semibold relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                      }
                    >
                      {convertNumberSm(parseFloat(data.usage_parameter_3))}
                    </p>
                  </td>

                  <td>
                    <p
                      class={
                        "text-right ml-1 leading-normal -mt-[6px] mb-[6px] text-xs font-semibold bottom-2 left-1"
                      }
                    >
                      {WeCurrencyWith00(parseFloat(data.price_parameter_3))}
                    </p>
                  </td>
                  <td>
                    <p
                      class={
                        "text-right ml-1 leading-normal -mt-[6px] mb-[6px] text-xs font-semibold bottom-2 left-1"
                      }
                    >
                      {WeCurrencyWith00(parseFloat(data.amount_parameter_3))}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* section 5 */}
          <div class={"mt-4 w-full pt-1 mb-4"}>
            <table class={"w-full"}>
              <tbody>
                <tr>
                  <td class={"text-sm relative w-[77%]"}>
                    <p
                      class={
                        "ml-1 leading-normal -mt-[8px] mb-[8px] bottom-2 left-1 text-left"
                      }
                    >
                      Sub Total
                    </p>
                  </td>
                  <td class={"text-xs relative border-r-0"}>
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-right font-semibold"
                      }
                    >
                      {WeCurrencyWith00(parseFloat(data.sub_total))}
                    </p>
                  </td>
                </tr>
                {data.lain_lain
                  ? Object.keys(data.lain_lain).map((v) => {
                      return (
                        <tr>
                          <td class={"text-sm relative w-[77%]"}>
                            <p
                              class={
                                "ml-1 leading-normal -mt-[8px] mb-[8px] bottom-2 left-1 text-left"
                              }
                            >
                              {v}
                            </p>
                          </td>
                          <td class={"text-xs relative border-r-0"}>
                            <p
                              class={
                                "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-right font-semibold"
                              }
                            >
                              {WeCurrencyWith00(data.lain_lain[v])}
                            </p>
                          </td>
                        </tr>
                      );
                    })
                  : null}
                {/* <tr>
                  <td class={"text-xs relative flex justify-between"}>
                    <p
                      class={
                        "ml-1 leading-normal -mt-[8px] mb-[8px] bottom-2 left-1 text-left"
                      }
                    >
                      Tagihan Sebelumnya
                    </p>
                    <p
                      class={
                        "leading-normal -mt-[8px] mb-[8px] bottom-2 text-right"
                      }
                    >
                      Rp0
                    </p>
                  </td>
                  <td class={"text-xs relative border-r-0"}>
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-right font-semibold"
                      }
                    >
                    </p>
                  </td>
                </tr>
                <tr>
                  <td class={"text-xs relative flex justify-between"}>
                    <p
                      class={
                        "ml-1 leading-normal -mt-[8px] mb-[8px] bottom-2 left-1 text-left"
                      }
                    >
                      Denda Keterlambatan
                    </p>
                    <p
                      class={
                        "leading-normal -mt-[8px] mb-[8px] bottom-2 text-right"
                      }
                    >
                    </p>
                  </td>
                  <td class={"text-xs relative border-r-0"}>
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-right font-semibold"
                      }
                    >
                    </p>
                  </td>
                </tr>
                <tr>
                  <td class={"text-xs relative flex justify-between"}>
                    <p
                      class={
                        "ml-1 leading-normal -mt-[8px] mb-[8px] bottom-2 left-1 text-left"
                      }
                    >
                      Pembayaran yang telah diterima
                    </p>
                    <p
                      class={
                        "leading-normal -mt-[8px] mb-[8px] bottom-2 text-right"
                      }
                    >
                    </p>
                  </td>
                  <td class={"text-xs relative border-r-0"}>
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-right font-semibold"
                      }
                    >
                    </p>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>

          {/* section 6 */}
          <div
            class={
              "w-full py-1 border-t border-solid border-black border-b border-r"
            }
          >
            <table class={"w-full"}>
              <thead>
                <tr>
                  <td
                    class={
                      "border-solid border border-black border-r-0 text-sm relative w-[77%]"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[8px] mb-[8px] bottom-2 left-1 text-left font-bold"
                      }
                    >
                      Total Tagihan Sekarang
                    </p>
                  </td>
                  <td
                    class={
                      "border-solid border border-black text-sm relative border-r-0"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[8px] mb-[8px] bottom-2 left-1 text-right font-bold"
                      }
                    >
                      {WeCurrencyWith00(parseFloat(data.grandtotal))}
                    </p>
                  </td>
                </tr>
              </thead>
            </table>
          </div>

          {/* section 7 */}
          <div class={"pb-4"}>
            <h4 class={"mb-2 text-xs"}>
              * Pembayaran dengan transfer ke Rekening:{" "}
              <span class={"text-sm font-bold italic"}>7100.8888.01</span> atas
              nama{" "}
              <span class={"text-sm font-bold italic"}>
                PT. GLOBAL CITRA PRIMAKARYA
              </span>{" "}
              <br /> BCA , Cabang Tiang Bendera, Jakarta.
            </h4>
          </div>
        </div>
      </object>
    </div>
  );
}
