import moment from "moment";
import {
  WeCurrencyWith00,
  base64ToBase64Url,
  base64UrlToBase64,
  convertNumberFloatingDotToComma,
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
  function cekKandungan(stringA, stringB) {
    // Mengubah kedua string menjadi huruf kecil untuk memudahkan perbandingan
    stringA = stringA.toLowerCase();
    stringB = stringB.toLowerCase();

    // Menggunakan metode indexOf() untuk memeriksa apakah stringB terdapat dalam stringA
    if (stringA.indexOf(stringB) !== -1) {
      return true; // Jika stringB ditemukan di dalam stringA
    } else {
      return false; // Jika stringB tidak ditemukan di dalam stringA
    }
  }
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
  // http://localhost:5173/marunda/kwh?data=eyJpZCI6MjA2OSwibGFpbl9sYWluIjp7IkRpc2NvdW50IEt3aCg5MCB4IDIwNzUpIjoxODY3NTAsIkRpc2NvdW50IEt2YXJoKDkwIHggMS4xMzk2MjAwMDAwMDQwNykiOjEwMywiVGFnaWhhbiBMYWlubnlhICgxMCUpIjozMTM1MjB9LCJzdWJfdG90YWwiOjMzMjIwNTEsImdyYW5kdG90YWwiOjM0NDg3MTgsInN0YXJ0X2RhdGUiOiIyMDI0LTAxLTAxVDEzOjMwOjAwKzA4OjAwIiwiZW5kX2RhdGUiOiIyMDI0LTAyLTAxVDExOjAwOjAwKzA4OjAwIiwic3RhcnRfbWV0ZXIiOm51bGwsImVuZF9tZXRlciI6bnVsbCwibWluaW11bV9jaGFyZ2VfdG90YWwiOjIwNzUsImJpbGxpbmdfdXNhZ2UiOjIwNzUsInVzYWdlIjoyMTMuNzU3MDAwMDAwMDk5NjUsImR1ZV9kYXRlIjoiMjAtRmViLTI0IiwiY3V0X2RhdGUiOiIyMDI0LTAyLTAxIDIyOjU1OjIzIiwiaW52b2ljZSI6IklOVi9HQ1AvRUxDLzAxLzIwMjQvMTIiLCJpZF9wZWxhbmdnYW4iOiIiLCJ0ZW5hbnRfbmFtZSI6IkEzIE5PLjIwIC0gSEVMQkVUSCBTQUtUSSBTQUsiLCJiaWxsaW5nX2FkZHJlc3MiOiJDMjA1NCIsInBpcGEiOm51bGwsImV4cG9ydCI6eyJjdXN0X2lkIjoiQzIwNTQiLCJhZGRyZXNzIjoiQkxPSyBBMyBOTy4yMFxuIiwibm9kZV90eXBlIjoiRUxFQ1RSSUNJVFkgMyBQSEFTRSIsInBlcmlvZGVfYmlsbGluZyI6IjIwMjQtMDEiLCJkYXlhIjoiNDEuNTAwIFZBIiwic3RhcnRfZGF0ZSI6IjIwMjQtMDEtMDFUMTM6MzA6MDArMDg6MDAiLCJlbmRfZGF0ZSI6IjIwMjQtMDItMDFUMTE6MDA6MDArMDg6MDAiLCJsd2JwX2F3YWwiOjcwMjA1MS45MTgsImx3YnBfYWtoaXIiOjcwMjI0MC43MSwid2JwX2F3YWwiOjEzODA3Ni4yNTQsIndicF9ha2hpciI6MTM4MTAxLjIxOSwia3doX2F3YWwiOjg0MDEyOC4xNzE5OTk5OTk5LCJrd2hfYWtoaXIiOjg0MDM0MS45MjksInBlbWFraWFuX2t3aCI6MjEzLjc1NzAwMDAwMDA5OTY1LCJiaWxsaW5nX3BlbWFraWFuX2t3aCI6MjA3NSwia3ZhcmhfYXdhbCI6NTA2OTI0LjUyMywia3ZhcmhfYWtoaXIiOjUwNjkyNy41MjIsInBlbWFraWFuX2t2YXJoIjoyLjk5OTAwMDAwMDAxMDcxLCJrZWxlYmloYW5fa3ZhcmgiOjEuMTM5NjIwMDAwMDA0MDcsIm1pbmltdW1fY2hhcmdlX3RvdGFsIjoyMDc1LCJrd2hfcHJpY2UiOjE2MDAsImFtb3VudF9rd2giOjMzMjAwMDAsImFtb3VudF9rdmFyaCI6MjA1MSwia3ZhcmhfcHJpY2UiOjE4MDAsIm1heF9rdmFyaCI6MS44NTkzODAwMDAwMDY2NDA1fSwibGFpbl9sYWluMiI6WyJQZW1ha2lhbiBtaW5pbXVtIDUwIGphbSA6IGRheWEvMS4wMDAgeCA1MCBqYW1cbjQxLjUwMCBWQSB4IDUwamFtID0gMi4wNzUiLCJLZWxlYmloYW4gcGVtYWtpYW4gS1ZBUkhcbjIuOTk5MDAwMDAwMDEwNzEgLSAoMC42MiB4IDIwNzUpID0gMS4xMzk2MjAwMDAwMDQwNyJdfQ
  // eyJpZCI6NjE3NDUsImxhaW5fbGFpbiI6eyJUYWdpaGFuIExhaW5ueWEgKDEwJSkiOjYwMDZ9LCJzdWJfdG90YWwiOjYwMDYwLCJncmFuZHRvdGFsIjo2NjA2NiwidW5pdCI6Im0zIiwic3RhcnRfZGF0ZSI6IjIwMjMtMTAtMzFUMTk6MDA6MDArMDg6MDAiLCJlbmRfZGF0ZSI6IjIwMjMtMTEtMDlUMDg6MDA6MDArMDg6MDAiLCJzdGFydF9tZXRlciI6OTI4LjA2LCJlbmRfbWV0ZXIiOjk0OC4wOCwibWluaW11bV9jaGFyZ2VfdG90YWwiOjAsImJpbGxpbmdfdXNhZ2UiOjIwLjAyLCJ1c2FnZSI6MjAuMDIsInBhcmFtZXRlcl8xIjoiMjYiLCJwYXJhbWV0ZXJfMiI6IjI2IiwicGFyYW1ldGVyXzMiOiIzNSIsInByaWNlX3BhcmFtZXRlcl8xIjozMDAwLCJwcmljZV9wYXJhbWV0ZXJfMiI6MzUwMCwicHJpY2VfcGFyYW1ldGVyXzMiOjQwMDAsImFtb3VudF9wYXJhbWV0ZXJfMSI6NjAwNjAsImFtb3VudF9wYXJhbWV0ZXJfMiI6MCwiYW1vdW50X3BhcmFtZXRlcl8zIjowLCJ1c2FnZV9wYXJhbWV0ZXJfMSI6MjAuMDIsInVzYWdlX3BhcmFtZXRlcl8yIjowLCJ1c2FnZV9wYXJhbWV0ZXJfMyI6MCwiZHVlX2RhdGUiOm51bGwsImN1dF9kYXRlIjoiMjAyMy0xMS0wOSAwNzowMDowMCIsImludm9pY2UiOiJNQy5CTE9LIEUuOTYtSU5WLTA5MTEyMy0yMzhHIiwiZmFrdHVyIjpudWxsLCJpZF9wZWxhbmdnYW4iOiIiLCJ0ZW5hbnRfbmFtZSI6IkUgMyBOTy4xMS1QVC4gVFVOQVMgTUFKVSBNQU5ESVJJIiwiYmlsbGluZ19hZGRyZXNzIjoiRSAzIE5PLjExIn0

  useEffect(() => {
    generatePDF();

    return () => {};
  }, []);

  // console.log(
  //   base64ToBase64Url(
  //     btoa(
  //       JSON.stringify({
  //         id: 61745,
  //         lain_lain: {
  //           "Discount Kwh(90 x 323904)": 29151360,
  //           "Discount Kvarh(90 x 50365.52)": 4532896.8,
  //           "Biaya Penerangan Jalan Umum (5%)": 22614431.42,
  //           "Tagihan Lainnya (10%)": 47490305.982,
  //         },
  //         total: 522393365.802,
  //         grandtotal: 522393365.802,
  //         sub_total: 485972885.2,
  //         unit: "",
  //         start_date: "2023-10-31T19:00:00+08:00",
  //         end_date: "2023-11-09T08:00:00+08:00",
  //         start_meter: 928.06,
  //         end_meter: 948.08,
  //         minimum_charge_total: 0,
  //         billing_usage: 20.02,
  //         usage: 20.02,
  //         due_date: null,
  //         cut_date: "2023-11-09 07:00:00",
  //         invoice: "MC.BLOK E.96-INV-091123-238G",
  //         faktur: null,
  //         id_pelanggan: "",
  //         tenant_name: "E 3 NO.11-PT. TUNAS MAJU MANDIRI",
  //         billing_address: "E 3 NO.11",
  //         export: {
  //           node_type: "ELECTRICITY 3 PHASE",
  //           start_date: "2023-10-25T18:30:00+08:00",
  //           end_date: "2023-11-09T01:00:00+08:00",
  //           lwbp_awal: 5561397,
  //           lwbp_akhir: 5833245,
  //           wbp_awal: 1118197,
  //           wbp_akhir: 1170253,
  //           kwh_awal: 6679594,
  //           kwh_akhir: 7003498,
  //           billing_pemakian_kwh: 323904,
  //           kvarh_awal: 5699954,
  //           kvarh_akhir: 5951140,
  //           pemakian_kvarh: 251186,
  //           kelebihan_kvarh: 50365.52,
  //           daya: 5561,
  //           // tambahan sendiri
  //           pemakaian_kwh: 60006,
  //           minimum_charge_total: 20650143,
  //           kwh_price: 321356,
  //           amount_kwh: 1236778,
  //           kvarh_price: 231567,
  //           amount_kvarh: 2315678,
  //         },
  //         lain_lain2: [
  //           "Pemakian minimum 60 jam : daya/1000 x 60 jam\n900 kva x 60jam = 54000",
  //           "Kelebihan pemakian KVARH\n251186 - (0.62 x 323904) = 50365.52",
  //         ],
  //       })
  //     )
  //   )
  // );

  return (
    <div>
      <div
        id="html-content-holder"
        className={"w-[800px] bg-white text-black py-6 px-6"}
      >
        <div class={"header flex justify-between"}>
          <div>
            <h3 class={"font-bold text-sm"}>INFORMASI TAGIHAN LISTRIK</h3>
            <h4 class={"text-sm"}>Kepada Yth,</h4>
            <h3 class={"font-bold text-sm"}>{data.tenant_name}</h3>
          </div>
          <div>
            <h4 class={"text-xl font-bold text-right"}>
              PT. GLOBAL CITRA PRIMAKARYA
            </h4>
            <h3 class={"text-lg font-bold text-right"}>Marunda Center</h3>
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
                      {"080."}
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
                      {data.export.cust_id}
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
                  {data.export.address}
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
              {/* <td
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
              </td> */}
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
          <h4 class={" text-xs"}>Daya : {data?.export.daya}</h4>
          <h4 class={" text-xs"}>
            Pencatatan Meteran KWH Periode{" "}
            {moment(data.export.periode_billing).format("MMMM YYYY")}
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
                        {convertNumberFloatingDotToComma(
                          parseFloat(data?.export?.lwbp_awal)
                        )}
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
                        {convertNumberFloatingDotToComma(
                          parseFloat(data?.export?.wbp_awal)
                        )}
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
                        {convertNumberFloatingDotToComma(
                          parseFloat(data?.export?.kwh_awal)
                        )}
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
                        {moment(data.end_date).format("DD-MMM-YY")}
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
                        {convertNumberFloatingDotToComma(
                          parseFloat(data.export?.lwbp_akhir)
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
                        {convertNumberFloatingDotToComma(
                          parseFloat(data.export?.wbp_akhir)
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
                          "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center font-bold"
                        }
                      >
                        {convertNumberFloatingDotToComma(
                          parseFloat(data.export?.kwh_akhir)
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
                      {convertNumberFloatingDotToComma(
                        parseFloat(data.export.kwh_awal)
                      )}
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
                      {moment(data.end_date).format("DD-MMM-YY")}
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
                      {convertNumberFloatingDotToComma(
                        parseFloat(data.export.kwh_akhir)
                      )}
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
                      {convertNumberFloatingDotToComma(parseFloat(data.export.pemakaian_kwh))}
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
                      {convertNumberFloatingDotToComma(
                        parseFloat(data.export.pemakian_kwh)
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
                      {convertNumberFloatingDotToComma(
                        parseFloat(data.export.minimum_charge_total)
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
                      {convertNumberFloatingDotToComma(
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
                        {convertNumberFloatingDotToComma(
                          parseFloat(data.export.kvarh_awal)
                        )}
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
                        "border-solid border border-black text-xs font-semibold relative"
                      }
                    >
                      <p
                        class={
                          "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center font-bold"
                        }
                      ></p>
                    </td>
                    {/* <td
                      class={
                        "border-solid border border-black text-xs font-semibold relative border-r-0"
                      }
                    >
                      <p
                        class={
                          "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center font-bold"
                        }
                      ></p>
                    </td> */}
                    {/* <td
                      class={
                        "border-solid border border-black text-xs font-semibold relative"
                      }
                    >
                      <p
                        class={
                          "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center font-bold"
                        }
                      ></p>
                    </td> */}
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
                        {moment(data.end_date).format("DD-MMM-YY")}
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
                        {convertNumberFloatingDotToComma(
                          parseFloat(data.export.kvarh_akhir)
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
                        {convertNumberFloatingDotToComma(
                          parseFloat(data.export.pemakian_kvarh)
                        )}
                      </p>
                    </td>
                    {/* <td
                      class={
                        "border-solid border border-black text-xs font-semibold relative border-r-0 border-t-0"
                      }
                    >
                      <p
                        class={
                          "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center font-bold"
                        }
                      >
                        {convertNumberFloatingDotToComma(
                          parseFloat(data.export.max_kvarh)
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
                        {convertNumberFloatingDotToComma(
                          parseFloat(data.export.kelebihan_kvarh)
                        )}
                      </p>
                    </td> */}
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
                        {convertNumberFloatingDotToComma(
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
                            {cekKandungan(v, "Discount") ? (
                              <span class={"text-red-500"}>
                                {`(${WeCurrencyWith00(data.lain_lain[v])})`}
                              </span>
                            ) : (
                              WeCurrencyWith00(data.lain_lain[v])
                            )}
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
