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
import angkaTerbilangJs from "@develoka/angka-terbilang-js";

export function KBN() {
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
  // console.log(data.lain_lain);
  // console.log(
  //   base64ToBase64Url(
  //     btoa(
  //       JSON.stringify({
  //         id: 61745,
  //         lain_lain: {
  //           "Tagihan Lainnya (10%)": 6006,
  //         },
  //         sub_total: 60060,
  //         grandtotal: 66066,
  //         unit: "m3",
  //         start_date: "2023-10-31T19:00:00+08:00",
  //         end_date: "2023-11-09T08:00:00+08:00",
  //         start_meter: 928.06,
  //         end_meter: 948.08,
  //         minimum_charge_total: 0,
  //         billing_usage: 20.02,
  //         usage: 20.02,
  //         parameter_1: "26",
  //         parameter_2: "26",
  //         parameter_3: "35",
  //         price_parameter_1: 3000,
  //         price_parameter_2: 3500,
  //         price_parameter_3: 4000,
  //         amount_parameter_1: 60060,
  //         amount_parameter_2: 0,
  //         amount_parameter_3: 0,
  //         usage_parameter_1: 20.02,
  //         usage_parameter_2: 0,
  //         usage_parameter_3: 0,
  //         due_date: null,
  //         cut_date: "2023-11-09 07:00:00",
  //         invoice: "MC.BLOK E.96-INV-091123-238G",
  //         faktur: null,
  //         id_pelanggan: "",
  //         tenant_name: "E 3 NO.11-PT. TUNAS MAJU MANDIRI",
  //         billing_address: "E 3 NO.11",
  //       })
  //     )
  //   )
  // );

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
            <img
              class={"-mt-16 w-44 -ml-2"}
              src="./th-3879333870.jpg"
              alt={"logo"}
            />
            <div class={"timesfont text-center"}>
              <h3 class={"font-bold text-sm"}>PT. KAWASAN BERIKAT NUSANTARA</h3>
              <h4 class={"text-sm font-semibold"}>(NUSANTARA BONDED ZONE)</h4>
              <h3 class={"font-bold text-sm"}>SBU PENGELOLAAN AIR</h3>
            </div>
            <div>
              <table>
                <tbody>
                  <tr>
                    <td
                      colSpan={2}
                      // rowSpan={2}
                      class={
                        "border-solid border border-black border-b-0 text-xs relative"
                      }
                    >
                      <p
                        class={
                          "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1"
                        }
                      >
                        FM - 03 - 02
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class={
                        "border-solid border border-r-0 border-black text-xs relative"
                      }
                    >
                      <p
                        class={
                          "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1"
                        }
                      >
                        REVISI
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
                        00
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class={"-mt-14 text-center"}>
            <h2 class={"font-bold text-lg"}>INVOICE / NOTA DEBET</h2>
            <h3 class={"font-bold text-base"}>No. {data.invoice}</h3>
          </div>
          <div class={"flex justify-between mt-3"}>
            <div class={"border border-solid border-black w-[150px]"}>
              <p
                class={
                  "ml-5 text-sm leading-normal -mt-[4px] mb-[12px] bottom-2 left-1"
                }
              >
                Lokasi
              </p>
            </div>
            <div class={"border border-solid border-black w-[400px]"}>
              <p
                class={
                  "ml-12 text-sm leading-normal -mt-[4px] mb-[12px] bottom-2 left-1"
                }
              >
                Pelanggan: {data.tenant_name} <br />
                Alamat: {data.billing_address}
              </p>
            </div>
            <div class={"border border-solid border-black w-[150px]"}>
              <p
                class={
                  "ml-5 text-sm leading-normal -mt-[4px] mb-[12px] bottom-2 left-1"
                }
              >
                NPWP
              </p>
            </div>
          </div>

          <div class={"mt-2 mx-4"}>
            <p class={"ml-5 text-sm -mt-[4px] mb-[12px] bottom-2 left-1"}>
              Sehubungan dengan Penggunaan Air dalam rangka menunjang kegiatan,
              maka dengan ini kami harapkan perhatian saudara untuk melunasi
              untuk melunasi untuk melunasi tagihan berikut:
            </p>
          </div>

          <div class={"border border-solid border-black"}>
            <p class={"ml-5 text-sm -mt-[4px] mb-[12px] bottom-2 left-1"}>
              I. DATA PENCATATAN METER AIR
            </p>
          </div>
          <div class={"border border-solid border-black border-t-0 px-2 py-2"}>
            <table class={"w-full"}>
              <thead>
                <tr>
                  <td
                    class={
                      "border-solid border border-black border-b-0 border-r-0 text-xs relative"
                    }
                    rowSpan={2}
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1"
                      }
                    >
                      No
                    </p>
                  </td>
                  <td
                    class={
                      "border-solid border border-black border-b-0 border-r-0 text-xs relative"
                    }
                    rowSpan={2}
                  >
                    <p
                      class={
                        "text-center ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1"
                      }
                    >
                      KETERANGAN
                    </p>
                  </td>
                  <td
                    rowSpan={2}
                    class={
                      "text-center border-solid border border-black border-b-0 border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1"
                      }
                    >
                      PERIODE PEMAKAIAN
                    </p>
                  </td>
                  <td
                    colSpan={3}
                    class={
                      "border-solid border border-black border-b-0 text-xs relative text-center"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1"
                      }
                    >
                      Meter
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class={
                      "text-center border-solid border border-black border-b-0 border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1"
                      }
                    >
                      Akhir
                    </p>
                  </td>
                  <td
                    class={
                      " text-center border-solid border border-black border-b-0 border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1"
                      }
                    >
                      Lalu
                    </p>
                  </td>
                  <td
                    class={
                      "text-center border-solid border border-black border-b-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1"
                      }
                    >
                      Pemakaian
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
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 font-bold"
                      }
                    >
                      1
                    </p>
                  </td>
                  <td
                    class={
                      "border-solid border border-black border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-2 "
                      }
                    >
                      {data.tenant_name}
                    </p>
                  </td>
                  <td
                    class={
                      "text-center border-solid border border-black border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-2 "
                      }
                    >
                      {moment(data.start_date).format("DD-MM-YYYY")} s/d{" "}
                      {moment(data.end_date).format("DD-MM-YYYY")}
                    </p>
                  </td>
                  <td
                    class={
                      "text-right border-solid border border-black border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-2 "
                      }
                    >
                      {convertNumberSm(data.end_meter)}
                    </p>
                  </td>
                  <td
                    class={
                      "text-right border-solid border border-black border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-2 "
                      }
                    >
                      {convertNumberSm(data.start_meter)}
                    </p>
                  </td>
                  <td
                    class={
                      "text-right border-solid border border-black text-xs relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-2 "
                      }
                    >
                      {convertNumberSm(data.billing_usage)}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p class={"ml-[14px] mt-2 mb-4 text-sm left-1"}>
              II. RINCIAN PEMAKAIAN AIR
            </p>
            <table class={"w-full"}>
              <thead>
                <tr>
                  <td
                    class={
                      "text-center border-solid border border-black border-b-0 border-r-0 text-xs relative"
                    }
                    colSpan={4}
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1"
                      }
                    >
                      BIAYA
                    </p>
                  </td>
                  <td
                    class={
                      "text-center border-solid border border-black text-xs relative"
                    }
                    rowSpan={2}
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1"
                      }
                    >
                      JUMLAH
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class={
                      "text-center border-solid border border-black border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-2 "
                      }
                    >
                      Pemakaian
                    </p>
                  </td>
                  <td
                    class={
                      "text-center border-solid border border-black border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-2 "
                      }
                    >
                      Tetap
                    </p>
                  </td>
                  <td
                    class={
                      "text-center border-solid border border-black border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-2 "
                      }
                    >
                      Pemeliharaan
                    </p>
                  </td>
                  <td
                    class={
                      "text-center border-solid border border-black border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-2 "
                      }
                    >
                      Meterai
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class={
                      "text-center border-solid border border-black border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-2 "
                      }
                    >
                      ( Rp. )
                    </p>
                  </td>
                  <td
                    class={
                      "text-center border-solid border border-black border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-2 "
                      }
                    >
                      ( Rp. )
                    </p>
                  </td>
                  <td
                    class={
                      "text-center border-solid border border-black border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-2 "
                      }
                    >
                      ( Rp. )
                    </p>
                  </td>
                  <td
                    class={
                      "text-center border-solid border border-black border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-2 "
                      }
                    >
                      ( Rp. )
                    </p>
                  </td>
                  <td
                    class={
                      "text-center border-solid border border-black text-xs relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 right-2 "
                      }
                    >
                      ( Rp. )
                    </p>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    class={
                      "text-center border-solid border border-black border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "text-center ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1"
                      }
                    >
                      {WeCurrencyWith00(data.sub_total).split("Rp").join("")}
                    </p>
                  </td>
                  <td
                    class={
                      "text-center border-solid border border-black border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "text-center ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1"
                      }
                    >
                      {WeCurrencyWith00(data.lain_lain["Biaya Tetap"])
                        .split("Rp")
                        .join("")}
                    </p>
                  </td>
                  <td
                    class={
                      "text-center border-solid border border-black border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "text-center ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1"
                      }
                    >
                      {WeCurrencyWith00(data.lain_lain["Biaya Pemeliharaan"])
                        .split("Rp")
                        .join("")}
                    </p>
                  </td>
                  <td
                    class={
                      "text-center border-solid border border-black border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "text-center ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1"
                      }
                    >
                      {WeCurrencyWith00(data.lain_lain["Materai"])
                        .split("Rp")
                        .join("")}
                    </p>
                  </td>
                  <td
                    class={
                      "text-center border-solid border border-black text-xs relative"
                    }
                  >
                    <p
                      class={
                        "text-center ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 right-1"
                      }
                    >
                      {WeCurrencyWith00(data.grandtotal).split("Rp").join("")}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class={
                      "text-center border-solid border border-t-0 border-black text-xs relative"
                    }
                    colSpan={4}
                  >
                    <p
                      class={
                        "text-center ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1"
                      }
                    >
                      TOTAL
                    </p>
                  </td>
                  <td
                    class={
                      "text-center border-solid border border-t-0 border-l-0 border-black text-xs relative"
                    }
                  >
                    <p
                      class={
                        "text-center ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 right-1"
                      }
                    >
                      {WeCurrencyWith00(data.grandtotal).split("Rp").join("")}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>

            <div
              class={
                "mt-4 ml-12 border border-solid border-black w-80 mb-10 px-4 py-8"
              }
            >
              <p
                class={
                  "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-2 text-sm"
                }
              >
                Pembayaran dapat dilakukan melalui:
              </p>
              <ul class={"list-decimal list-outside ml-5"}>
                <li class={"leading-normal -mt-1 text-sm"}>
                  Bank DKI Capem KBN, No rek : 209-08-04521-2 a/n PT. KBN SBU
                  Pengelolaan Air
                </li>
                <li class={"leading-normal -mt-1 text-sm"}>
                  Virtual Account Bank BRI (BRIVA)
                </li>
              </ul>
            </div>
          </div>
          <div
            class={
              "border border-solid border-black px-2 py-2 mt-4 capitalize text-xs"
            }
          >
            {angkaTerbilangJs(data.grandtotal)}
          </div>
          <div class={"flex justify-between w-full"}>
            <div
              class={
                "border border-solid border-black px-2 py-2 border-t-0 w-72 text-xs"
              }
            >
              Tagihan ini terjadi atas dasar surat Perintah Kerja
              (SPK)/Order/Kontrak <br />
              Nomor : {data.invoice}
              <br />
              <br />
              <h4>JATUH TEMPO PEMBAYARAN</h4>
              Tanggal {moment(data.cut_date).format("DD-MM-YYYY")}
            </div>
            <div class={"text-xs mt-4 -mr-[300px] text-center mb-8"}>
              <h4>Jakarta, {moment(data.cut_date).format("DD-MM-YYYY")}</h4>
              <h4>GM. SBU Pengelolaan Air</h4>

              <div class={"mt-12"}>
                <h4 class={"underline"}>Rinang P Brata</h4>
                <h4>NPP. 067171075</h4>
              </div>
            </div>
            <div class={"opacity-0 mt-20"}>TEST</div>
          </div>
        </div>
      </object>
    </div>
  );
}
