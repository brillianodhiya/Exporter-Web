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

    html2pdf().from(element).set(opt).save();
    // .outputPdf("datauri");
    // .then((out) => {
    //   // console.log(out);
    //   setUri(out);
    // });
  }

  //   "https://dagrs.berkeley.edu/sites/default/files/2020-01/sample.pdf"

  useEffect(() => {
    setTimeout(() => {
      generatePDF();
    }, 5000);
    return () => {};
  }, []);

  console.log(
    encodeURI(
      btoa(
        JSON.stringify({
          id: 61745,
          lain_lain: {
            "Discount Kwh(100 x 228789)": 22878900,
            "Biaya Penerangan Jalan Umum (5%)": 10295505,
            "Tagihan Lainnya (10%)": 21620560.5,
          },
          total: 237826165.5,
          grandtotal: 237826165.5,
          export: {
            node_type: "ELECTRICITY 1 PHASE",
            start_date: "2023-07-06T15:30:00+08:00",
            end_date: "2023-11-13T01:00:00+08:00",
            lwbp_awal: 0,
            lwbp_akhir: 0,
            wbp_awal: 0,
            wbp_akhir: 0,
            kwh_awal: 670709,
            kwh_akhir: 899498,
            billing_pemakian_kwh: 228789,
            kvarh_awal: 0,
            kvarh_akhir: 0,
            pemakian_kvarh: 0,
            kelebihan_kvarh: 0,
          },
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
              Pencatatan Meteran Air Periode Agustus 2023
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
                      Biaya <br /> Pemakaian
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
                      1 Aug 23
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
                      635
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
                      1000
                    </p>
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
                      1 Aug 23
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
                      635
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
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-center font-bold"
                      }
                    ></p>
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
                    ></p>
                  </td>
                  <td>
                    <p
                      class={
                        "text-right ml-1 leading-normal -mt-[6px] mb-[6px] text-xs font-semibold bottom-2 left-1"
                      }
                    >
                      Rp102.494.587
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* section 5 */}
          <div class={"mt-4 w-full pt-1 "}>
            <table class={"w-full"}>
              <tbody>
                <tr>
                  <td class={"text-sm relative w-[77%]"}>
                    <p
                      class={
                        "ml-1 leading-normal -mt-[8px] mb-[8px] bottom-2 left-1 text-left"
                      }
                    >
                      TAGIHAN LAINNYA (10%)
                    </p>
                  </td>
                  <td class={"text-xs relative border-r-0"}>
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-right font-semibold"
                      }
                    >
                      Rp.10.249.459
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
                      {/* Rp.10.249.459 */}
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
                      {/* Rp0 */}
                    </p>
                  </td>
                  <td class={"text-xs relative border-r-0"}>
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-right font-semibold"
                      }
                    >
                      {/* Rp.10.249.459 */}
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
                      {/* Rp0 */}
                    </p>
                  </td>
                  <td class={"text-xs relative border-r-0"}>
                    <p
                      class={
                        "ml-1 leading-normal -mt-[6px] mb-[6px] bottom-2 left-1 text-right font-semibold"
                      }
                    >
                      {/* Rp.10.249.459 */}
                    </p>
                  </td>
                </tr>
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
                      Rp112.744.046
                    </p>
                  </td>
                </tr>
              </thead>
            </table>
          </div>

          {/* section 7 */}
          <div></div>
        </div>
      </object>
    </div>
  );
}
