import moment from "moment";
import {
  WeCurrencyWith00,
  base64ToBase64Url,
  base64UrlToBase64,
  convertNumberSm,
} from "../../../components/utils/Converter";
import { useEffect, useState } from "preact/hooks";
import angkaTerbilang from "@develoka/angka-terbilang-js";
import query from "query-string";
import html2pdf from "html2pdf.js";

export const KwhComponent = () => {
  const params = query.parse(window.location.search);

  // const [data, setData] = useState({
  //   billing_address: "Blok A",
  //   cut_date: "2021-08-01T00:00:00.000Z",
  //   due_date: "2021-08-10T00:00:00.000Z",
  //   grandtotal: 0,
  // });

  const getdata = () => {
    const data = JSON.parse(atob(base64UrlToBase64(params.data)));
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
            "Discount Kwh(90 x 323904)": 29151360,
            "Discount Kvarh(90 x 50365.52)": 4532896.8,
            "Biaya Penerangan Jalan Umum (5%)": 22614431.42,
            "Tagihan Lainnya (10%)": 47490305.982,
          },
          total: 522393365.802,
          grandtotal: 522393365.802,
          sub_total: 485972885.2,
          unit: "",
          start_date: "2023-10-31T19:00:00+08:00",
          end_date: "2023-11-09T08:00:00+08:00",
          start_meter: 928.06,
          end_meter: 948.08,
          minimum_charge_total: 0,
          billing_usage: 20.02,
          usage: 20.02,
          due_date: null,
          cut_date: "2023-11-09 07:00:00",
          invoice: "MC.BLOK E.96-INV-091123-238G",
          faktur: null,
          id_pelanggan: "",
          tenant_name: "E 3 NO.11-PT. TUNAS MAJU MANDIRI",
          billing_address: "E 3 NO.11",
          export: {
            node_type: "ELECTRICITY 3 PHASE",
            start_date: "2023-10-25T18:30:00+08:00",
            end_date: "2023-11-09T01:00:00+08:00",
            lwbp_awal: 5561397,
            lwbp_akhir: 5833245,
            wbp_awal: 1118197,
            wbp_akhir: 1170253,
            kwh_awal: 6679594,
            kwh_akhir: 7003498,
            billing_pemakian_kwh: 323904,
            kvarh_awal: 5699954,
            kvarh_akhir: 5951140,
            pemakian_kvarh: 251186,
            kelebihan_kvarh: 50365.52,
            daya: 5561,
            // tambahan sendiri
            pemakaian_kwh: 60006,
            minimum_charge_total: 20650143,
            kwh_price: 321356,
            amount_kwh: 1236778,
            kvarh_price: 231567,
            amount_kvarh: 2315678,
          },
          lain_lain2: [
            "Pemakian minimum 60 jam : daya/1000 x 60 jam\n900 kva x 60jam = 54000",
            "Kelebihan pemakian KVARH\n251186 - (0.62 x 323904) = 50365.52",
          ],
        })
      )
    )
  );

  return (
    <div>
      <div
        id="html-content-holder"
        className={"w-[800px] bg-white text-black py-6 px-6"}
      >
        <div class={"header flex justify-between"}>
          <div>
            <h3 class={"font-bold text-sm"}>INFORMASI TAGIHAN KWH</h3>
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
                    class={"border-solid border border-black text-xs relative"}
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
        <table class={"mt-4 w-[100%] mb-2"}>
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
                  No. Kotak KWH
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
                  No. Kotak KVARH
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
                  No. Tagihan
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
                  Tgl. Proses
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
                  {data.invoice}
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
                  {data.cut_date
                    ? moment(data.cut_date).format("DD-MMM-YY")
                    : ""}
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
              <td class={"border-solid border border-black text-sm relative"}>
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

        {/* section 3  */}
        <div class={"w-full mt-5 mb-7"}>
          <h4 class={" text-xs"}>
            Daya : {data?.export.daya} {data?.satuan}
          </h4>
          <h4 class={" text-xs"}>
            Pencatatan Meteran KWH Periode{" "}
            {moment(data.cut_date).format("MMMM YYYY")}
          </h4>
        </div>

        {/* section 4 */}
        <div class={"flex flex-col gap-8"}>
          {data?.export.node_type == "ELECTRICITY 3 PHASE" ? (
            <div class={"w-full flex flex-row gap-2"}>
              <h4 class={"text-xs w-[80px]"}>Rincian KWH</h4>
              <table class={"w-full"}>
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
                        LWBP Awal
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
                        LWBP Akhir
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
                        WBP Awal
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
                        WBP Akhir
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
                        Total KWH
                      </p>
                    </th>
                    <th class={"w-[140px]"}></th>
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
                        {convertNumberSm(parseFloat(data?.export?.lwbp_awal))}
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
                      >
                        {convertNumberSm(parseFloat(data?.export?.wbp_awal))}
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
                        "border-solid border border-black text-xs font-semibold relative"
                      }
                    >
                      <p
                        class={
                          "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center font-bold"
                        }
                      >
                        {convertNumberSm(parseFloat(data?.export?.kwh_awal))}
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
                        {convertNumberSm(parseFloat(data.export?.lwbp_akhir))}
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
                      ></p>
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
                        {convertNumberSm(parseFloat(data.export?.wbp_akhir))}
                      </p>
                    </td>
                    <td
                      class={
                        "border-solid border border-black text-xs font-semibold relative border-t-0"
                      }
                    >
                      <p
                        class={
                          "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center font-bold"
                        }
                      >
                        {convertNumberSm(parseFloat(data.export?.kwh_akhir))}
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
                        {/* {WeCurrencyWith00(parseFloat(data.sub_total))} */}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : null}

          <div class={"w-full flex flex-row gap-2"}>
            <h4 class={"text-xs w-[80px]"}>KWH</h4>
            <table class={"w-full"}>
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
                      Min. Pemakaian
                    </p>
                  </th>
                  {/* <th
                    class={
                      "border-solid border border-black border-b-0 border-r-0 text-xs relative"
                    }
                  >
                    <p
                      class={
                        "font-normal ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                      }
                    >
                      Billing Pemakaian
                    </p>
                  </th> */}
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
                      Tarif
                    </p>
                  </th>
                  <th class={"w-[140px]"}></th>
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
                      {convertNumberSm(parseFloat(data.export.kwh_awal))}
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
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                      }
                    ></p>
                  </td>
                  <td
                    class={
                      "border-solid border border-black text-xs font-semibold relative"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center font-bold"
                      }
                    ></p>
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
                      {convertNumberSm(parseFloat(data.export.kwh_akhir))}
                    </p>
                  </td>
                  {/* <td
                    class={
                      "border-solid border border-black text-xs font-semibold relative border-r-0"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                      }
                    >
                      {convertNumberSm(parseFloat(data.export.pemakaian_kwh))}
                    </p>
                  </td> */}
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
                      {convertNumberSm(
                        parseFloat(data.export.minimum_charge_total)
                      )}
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
                    >
                      {convertNumberSm(
                        parseFloat(data.export.billing_pemakian_kwh)
                      )}
                    </p>
                  </td>
                  <td
                    class={
                      "border-solid border border-black text-xs font-semibold relative border-t-0"
                    }
                  >
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                      }
                    >
                      {WeCurrencyWith00(data.export.kwh_price)} x{" "}
                      {convertNumberSm(
                        parseFloat(data.export.billing_pemakian_kwh)
                      )}
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
                      {WeCurrencyWith00(parseFloat(data.export.amount_kwh))}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {data?.export.node_type == "ELECTRICITY 3 PHASE" ? (
            <div class={"w-full flex flex-row gap-2"}>
              <h4 class={"text-xs w-[80px]"}>KVARH</h4>
              <table class={"w-full"}>
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
                        Max. Pemakaian
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
                        Kelebihan Pemakaian
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
                        Tarif
                      </p>
                    </th>
                    <th class={"w-[140px]"}></th>
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
                        {convertNumberSm(parseFloat(data.export.kvarh_awal))}
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
                    >
                      <p
                        class={
                          "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center font-bold"
                        }
                      ></p>
                    </td>
                    <td
                      class={
                        "border-solid border border-black text-xs font-semibold relative"
                      }
                    >
                      <p
                        class={
                          "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center font-bold"
                        }
                      ></p>
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
                        {convertNumberSm(parseFloat(data.export.kvarh_akhir))}
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
                        {convertNumberSm(
                          parseFloat(data.export.pemakian_kvarh)
                        )}
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
                        {convertNumberSm(parseFloat(data.export.max_kvarh))}
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
                        {convertNumberSm(
                          parseFloat(data.export.kelebihan_kvarh)
                        )}
                      </p>
                    </td>
                    <td
                      class={
                        "border-solid border border-black text-xs font-semibold relative border-t-0"
                      }
                    >
                      <p
                        class={
                          "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center"
                        }
                      >
                        {WeCurrencyWith00(data.export.kvarh_price)} x{" "}
                        {convertNumberSm(
                          parseFloat(data.export.kelebihan_kvarh)
                        )}
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
                        {WeCurrencyWith00(parseFloat(data.export.amount_kvarh))}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : null}
        </div>

        {/* section 5 */}
        <div class={"mt-4 w-full pt-1 mb-4"}>
          <table class={"w-full"}>
            <tbody>
              {data.lain_lain2
                ? data.lain_lain2.map((v, idx) => {
                    return (
                      <tr>
                        <td class={"text-sm relative pl-20 w-14"}>
                          <p
                            class={
                              "ml-1 leading-normal -mt-[30px] mr-1 bottom-2 left-1 text-left"
                            }
                          >
                            {idx + 1}.{" "}
                          </p>
                        </td>
                        <td class={"text-sm relative"}>
                          <p
                            class={
                              "leading-normal -mt-[8px] mb-[8px] bottom-2 text-left whitespace-pre-wrap"
                            }
                          >
                            {v}
                          </p>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>

        <div class={"mt-4 w-full pt-1 mb-4"}>
          <table class={"w-full"}>
            <tbody>
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
            </tbody>
          </table>
        </div>
        <table class={"w-full mt-6"}>
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
              <td class={"border-solid border border-black text-sm relative"}>
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

        {/* section 7 */}
        <div class={"pb-4"}>
          <h4 class={"mb-2 text-xs font-bold"}>
            Terbilang:{" "}
            <i class={"capitalize"}>
              {angkaTerbilang(data.grandtotal)} rupiah{" "}
            </i>
          </h4>
          <h4 class={"mb-2 text-xs"}>
            * Tagihan harus sudah dibayar paling lambat tanggal 20 tiap bulan.
            Dnda akan dikenakan sebesar 5(Lima )% dari total tagihan
            {/* <br /> */}
            pada bulan brikutnya apabila pembayaran dilakukan lebih dari tanggal
            20
          </h4>
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
    </div>
  );
};
