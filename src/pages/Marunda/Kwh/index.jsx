import moment from "moment";
import {
  WeCurrencyWith00,
  convertNumberSm,
} from "../../../components/utils/Converter";
import { useState } from "preact/hooks";
import angkaTerbilang from "@develoka/angka-terbilang-js";
export const KwhComponent = () => {
  const [data, setData] = useState({
    billing_address: "Blok A",
    cut_date: "2021-08-01T00:00:00.000Z",
    due_date: "2021-08-10T00:00:00.000Z",
    grandtotal: 0,
  });
  return (
    <div>
      <div
        id="html-content-holder"
        className={"w-[800px] bg-white text-black py-6 px-6"}
      >
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
            Daya : {data?.daya} {data?.satuan}
          </h4>
          <h4 class={" text-xs"}>
            Pencatatan Meteran Air Periode{" "}
            {moment(data.cut_date).format("MMMM YYYY")}
          </h4>
        </div>

        {/* section 4 */}
        <div class={"flex flex-col gap-8"}>
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
                      {/* {WeCurrencyWith00(parseFloat(data.sub_total))} */}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

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
                      "border-solid border border-black text-xs font-semibold relative"
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
                      {WeCurrencyWith00(parseFloat(data.sub_total))}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

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
                      "border-solid border border-black text-xs font-semibold relative"
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
                      {WeCurrencyWith00(parseFloat(data.sub_total))}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* section 5 */}

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
        </div>
      </div>
    </div>
  );
};
