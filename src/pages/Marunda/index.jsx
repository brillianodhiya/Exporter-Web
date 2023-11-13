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

  console.log(
    encodeURI(
      JSON.stringify({
        id: 61745,
        areaId: 95,
        tenantId: 235,
        nodeId: 510,
        cut_date: "2023-11-13 09:15:02",
        start_meter: null,
        end_meter: null,
        start_date: "2023-07-06T15:30:00+08:00",
        end_date: "2023-11-13T01:00:00+08:00",
        totalizer: null,
        usage: 228789,
        invoice: "MC.BLOK E.510-INV-13112023-235G",
        ppn: 11,
        harga_satuan: null,
        price_1_phase: 0,
        discount_1_phase: 0,
        price_3_phase: 0,
        discount_3_phase: 0,
        price_kvarh_3_phase: 0,
        discount_kvarh_3_phase: 0,
        periode_cut: 1,
        biaya_transaksi: 5000,
        biaya_penyesuaian: 0,
        virtual_account: null,
        status: "NEW",
        correction_usage: "0",
        billing_usage: 228789,
        denda: [],
        periode_billing: "2023-11",
        due_date: null,
        deveui: "080000003000516d",
        node_type: "ELECTRICITY 1 PHASE",
        unit: "",
        typeId: 14,
        resultErp: null,
        payment_method: null,
        payment_date: null,
        minimum_charge: 0,
        minimum_charge_total: 0,
        billing_type: "tenant",
        log_area_id: null,
        log: '{"responseCode":200,"response":{"log":[{"start_date":"2023-07-06T15:30:00+08:00","start_meter":670709000,"end_meter":671877000,"end_date":"2023-07-07T00:30:00+08:00","usage":1168000},{"start_date":"2023-07-07T00:30:00+08:00","start_meter":671877000,"end_meter":672265000,"end_date":"2023-07-07T04:30:00+08:00","usage":388000},{"start_date":"2023-07-07T04:30:00+08:00","start_meter":672265000,"end_meter":698618000,"end_date":"2023-07-16T00:30:00+08:00","usage":26353000},{"start_date":"2023-07-16T00:30:00+08:00","start_meter":698618000,"end_meter":700112000,"end_date":"2023-07-16T20:30:00+08:00","usage":1494000},{"start_date":"2023-07-16T20:30:00+08:00","start_meter":700112000,"end_meter":706362000,"end_date":"2023-07-18T22:00:00+08:00","usage":6250000},{"start_date":"2023-07-18T22:00:00+08:00","start_meter":706362000,"end_meter":708435000,"end_date":"2023-07-20T00:30:00+08:00","usage":2073000},{"start_date":"2023-07-20T00:30:00+08:00","start_meter":708435000,"end_meter":709084000,"end_date":"2023-07-20T08:30:00+08:00","usage":649000},{"start_date":"2023-07-20T08:30:00+08:00","start_meter":709084000,"end_meter":713758000,"end_date":"2023-07-21T17:00:00+08:00","usage":4674000},{"start_date":"2023-07-21T17:00:00+08:00","start_meter":713758000,"end_meter":723259000,"end_date":"2023-07-25T00:00:00+08:00","usage":9501000},{"start_date":"2023-07-25T00:00:00+08:00","start_meter":723259000,"end_meter":725108000,"end_date":"2023-07-25T12:30:00+08:00","usage":1849000},{"start_date":"2023-07-25T12:30:00+08:00","start_meter":725108000,"end_meter":809542000,"end_date":"2023-09-07T14:30:00+08:00","usage":84434000},{"start_date":"2023-09-07T14:30:00+08:00","start_meter":809542000,"end_meter":832413000,"end_date":"2023-09-21T23:30:00+08:00","usage":22871000},{"start_date":"2023-09-21T23:30:00+08:00","start_meter":832413000,"end_meter":833761000,"end_date":"2023-09-22T23:00:00+08:00","usage":1348000},{"start_date":"2023-09-22T23:00:00+08:00","start_meter":833761000,"end_meter":835228000,"end_date":"2023-09-24T00:30:00+08:00","usage":1467000},{"start_date":"2023-09-24T00:30:00+08:00","start_meter":835228000,"end_meter":836544000,"end_date":"2023-09-24T23:30:00+08:00","usage":1316000},{"start_date":"2023-09-24T23:30:00+08:00","start_meter":836544000,"end_meter":837938000,"end_date":"2023-09-26T00:00:00+08:00","usage":1394000},{"start_date":"2023-09-26T00:00:00+08:00","start_meter":837938000,"end_meter":839548000,"end_date":"2023-09-27T00:30:00+08:00","usage":1610000},{"start_date":"2023-09-27T00:30:00+08:00","start_meter":839548000,"end_meter":840439000,"end_date":"2023-09-27T12:30:00+08:00","usage":891000},{"start_date":"2023-09-27T12:30:00+08:00","start_meter":840439000,"end_meter":842081000,"end_date":"2023-09-28T15:30:00+08:00","usage":1642000},{"start_date":"2023-09-28T15:30:00+08:00","start_meter":842081000,"end_meter":844115000,"end_date":"2023-09-30T00:30:00+08:00","usage":2034000},{"start_date":"2023-09-30T00:30:00+08:00","start_meter":844115000,"end_meter":845492000,"end_date":"2023-10-01T00:30:00+08:00","usage":1377000},{"start_date":"2023-10-01T00:30:00+08:00","start_meter":845492000,"end_meter":846870000,"end_date":"2023-10-02T00:30:00+08:00","usage":1378000},{"start_date":"2023-10-02T00:30:00+08:00","start_meter":846870000,"end_meter":848188000,"end_date":"2023-10-02T23:30:00+08:00","usage":1318000},{"start_date":"2023-10-02T23:30:00+08:00","start_meter":848188000,"end_meter":848913000,"end_date":"2023-10-03T12:00:00+08:00","usage":725000},{"start_date":"2023-10-03T12:00:00+08:00","start_meter":848913000,"end_meter":850992000,"end_date":"2023-10-05T00:30:00+08:00","usage":2079000},{"start_date":"2023-10-05T00:30:00+08:00","start_meter":850992000,"end_meter":852370000,"end_date":"2023-10-06T00:30:00+08:00","usage":1378000},{"start_date":"2023-10-06T00:30:00+08:00","start_meter":852370000,"end_meter":853688000,"end_date":"2023-10-06T23:30:00+08:00","usage":1318000},{"start_date":"2023-10-06T23:30:00+08:00","start_meter":853688000,"end_meter":855125000,"end_date":"2023-10-08T00:30:00+08:00","usage":1437000},{"start_date":"2023-10-08T00:30:00+08:00","start_meter":855125000,"end_meter":856502000,"end_date":"2023-10-09T00:30:00+08:00","usage":1377000},{"start_date":"2023-10-09T00:30:00+08:00","start_meter":856502000,"end_meter":857848000,"end_date":"2023-10-10T00:00:00+08:00","usage":1346000},{"start_date":"2023-10-10T00:00:00+08:00","start_meter":857848000,"end_meter":859073000,"end_date":"2023-10-10T21:30:00+08:00","usage":1225000},{"start_date":"2023-10-10T21:30:00+08:00","start_meter":859073000,"end_meter":859928000,"end_date":"2023-10-11T12:30:00+08:00","usage":855000},{"start_date":"2023-10-11T12:30:00+08:00","start_meter":859928000,"end_meter":862087000,"end_date":"2023-10-13T09:30:00+08:00","usage":2159000},{"start_date":"2023-10-13T09:30:00+08:00","start_meter":862087000,"end_meter":863867000,"end_date":"2023-10-15T00:30:00+08:00","usage":1780000},{"start_date":"2023-10-15T00:30:00+08:00","start_meter":863867000,"end_meter":864974000,"end_date":"2023-10-16T00:00:00+08:00","usage":1107000},{"start_date":"2023-10-16T00:00:00+08:00","start_meter":864974000,"end_meter":865524000,"end_date":"2023-10-16T11:30:00+08:00","usage":550000},{"start_date":"2023-10-16T11:30:00+08:00","start_meter":865524000,"end_meter":867250000,"end_date":"2023-10-18T00:30:00+08:00","usage":1726000},{"start_date":"2023-10-18T00:30:00+08:00","start_meter":867250000,"end_meter":868426000,"end_date":"2023-10-19T00:30:00+08:00","usage":1176000},{"start_date":"2023-10-19T00:30:00+08:00","start_meter":868426000,"end_meter":869623000,"end_date":"2023-10-20T00:00:00+08:00","usage":1197000},{"start_date":"2023-10-20T00:00:00+08:00","start_meter":869623000,"end_meter":870885000,"end_date":"2023-10-21T00:30:00+08:00","usage":1262000},{"start_date":"2023-10-21T00:30:00+08:00","start_meter":870885000,"end_meter":871442000,"end_date":"2023-10-21T11:30:00+08:00","usage":557000},{"start_date":"2023-10-21T11:30:00+08:00","start_meter":871442000,"end_meter":874529000,"end_date":"2023-10-24T00:30:00+08:00","usage":3087000},{"start_date":"2023-10-24T00:30:00+08:00","start_meter":874529000,"end_meter":875078000,"end_date":"2023-10-24T11:00:00+08:00","usage":549000},{"start_date":"2023-10-24T11:00:00+08:00","start_meter":875078000,"end_meter":876929000,"end_date":"2023-10-26T00:00:00+08:00","usage":1851000},{"start_date":"2023-10-26T00:00:00+08:00","start_meter":876929000,"end_meter":878155000,"end_date":"2023-10-27T00:30:00+08:00","usage":1226000},{"start_date":"2023-10-27T00:30:00+08:00","start_meter":878155000,"end_meter":879364000,"end_date":"2023-10-28T00:30:00+08:00","usage":1209000},{"start_date":"2023-10-28T00:30:00+08:00","start_meter":879364000,"end_meter":880569000,"end_date":"2023-10-29T00:30:00+08:00","usage":1205000},{"start_date":"2023-10-29T00:30:00+08:00","start_meter":880569000,"end_meter":881751000,"end_date":"2023-10-30T00:00:00+08:00","usage":1182000},{"start_date":"2023-10-30T00:00:00+08:00","start_meter":881751000,"end_meter":882332000,"end_date":"2023-10-30T11:30:00+08:00","usage":581000},{"start_date":"2023-10-30T11:30:00+08:00","start_meter":882332000,"end_meter":883615000,"end_date":"2023-10-31T07:00:00+08:00","usage":1283000},{"start_date":"2023-10-31T07:00:00+08:00","start_meter":883615000,"end_meter":887951000,"end_date":"2023-11-03T11:00:00+08:00","usage":4336000},{"start_date":"2023-11-03T11:00:00+08:00","start_meter":887951000,"end_meter":889156000,"end_date":"2023-11-04T11:00:00+08:00","usage":1205000},{"start_date":"2023-11-04T11:00:00+08:00","start_meter":889156000,"end_meter":891036000,"end_date":"2023-11-06T00:30:00+08:00","usage":1880000},{"start_date":"2023-11-06T00:30:00+08:00","start_meter":891036000,"end_meter":891454000,"end_date":"2023-11-06T08:30:00+08:00","usage":418000},{"start_date":"2023-11-06T08:30:00+08:00","start_meter":891454000,"end_meter":892751000,"end_date":"2023-11-07T10:30:00+08:00","usage":1297000},{"start_date":"2023-11-07T10:30:00+08:00","start_meter":892751000,"end_meter":896297000,"end_date":"2023-11-10T09:00:00+08:00","usage":3546000},{"start_date":"2023-11-10T09:00:00+08:00","start_meter":896297000,"end_meter":897665000,"end_date":"2023-11-11T12:30:00+08:00","usage":1368000},{"start_date":"2023-11-11T12:30:00+08:00","start_meter":897665000,"end_meter":899417000,"end_date":"2023-11-12T23:30:00+08:00","usage":1752000},{"start_date":"2023-11-12T23:30:00+08:00","start_meter":899417000,"end_meter":899498000,"end_date":"2023-11-13T01:00:00+08:00","usage":81000}],"total":228789000}}',
        log_flag: true,
        no_meter: "39000061117",
        is_combine_billing: false,
        erp_payload: null,
        erp_id: null,
        materai: 10000,
        finance_name: null,
        finance_id: null,
        parameter_1: null,
        parameter_2: null,
        parameter_3: null,
        price_parameter_1: 0,
        price_parameter_2: 0,
        price_parameter_3: 0,
        amount_parameter_1: 0,
        amount_parameter_2: 0,
        amount_parameter_3: 0,
        usage_parameter_1: 0,
        usage_parameter_2: 0,
        usage_parameter_3: 0,
        lwbp_awal: 0,
        lwbp_akhir: 0,
        wbp_awal: 0,
        wbp_akhir: 0,
        kwh_awal: 670709,
        kwh_akhir: 899498,
        kvarh_lwbp_awal: 0,
        kvarh_lwbp_akhir: 0,
        kvarh_wbp_awal: 0,
        kvarh_wbp_akhir: 0,
        kvarh_awal: 0,
        kvarh_akhir: 0,
        kwh_price: 1000,
        kwh_discount: 100,
        kvarh_price: 0,
        kvarh_discount: 0,
        pemakian_kwh: 228789,
        pemakian_kvarh: 0,
        billing_pemakian_kwh: 228789,
        max_kvarh: 0,
        kelebihan_kvarh: 0,
        iots_wa_statuses: [],
        iot_tenant: {
          id: 235,
          user_id: 250,
          area_id: 95,
          email: "",
          username: "E 2 NO.7",
          password:
            "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
          password_flag: "123456",
          tenant_name: "E 2 NO.7-PT. HARTA BAN INDONESIA",
          image: "https://mc-api.weiots.io/0",
          address: "E 2 NO.7",
          phone: "-",
          handphone: "-",
          member_id: 235,
          member_level: null,
          member_level_id: null,
          erp_name: null,
          erp_id: null,
          erp_contract_name: null,
          erp_contract_id: null,
          anomali_usage_start_date: null,
          anomali_usage_end_date: null,
          minim_balance_gas: 0,
          minim_balance_water: 0,
          minimum_charge_gas: 0,
          minimum_charge_water: 0,
          minimum_charge_electricity_ct: 0,
          minimum_charge_electricity_non_ct: 0,
          is_ppn_value: 10,
          is_ppn: true,
          company_name: "MARUNDA",
          billing_address: "E 2 NO.7",
          tenant_close: false,
          id_deleted: false,
          id_pelanggan: "",
          createdAt: "2022-09-13T08:08:06.000Z",
          updatedAt: "2022-09-13T08:08:06.000Z",
        },
        iot_node: {
          id: 510,
          areaId: 95,
          interval: 60,
          typeId: 14,
          device_type_id: 1,
          tenantId: 235,
          internalId: null,
          image_url: null,
          devEui: "080000003000516d",
          description: "Abidin",
          installationDate: "2022-12-05T14:59:37.000Z",
          last_update: "2023-11-13T09:00:00+08:00",
          previous_update: "2023-11-13T07:00:00+08:00",
          live_last_meter: null,
          live_previous_meter: null,
          live_interval: 120,
          live_battery: "100",
          start_anomali_date: null,
          start_anomali_meter: null,
          is_anomali: false,
          last_cut_date: "2023-11-13",
          live_valve: "open",
          setting_valve: "open",
          setting_interval: "60",
          rtu_pricing_id: 123,
          rtu_pricing_name: "SumActiveEnergy - Wh",
          latitude: "0",
          longitude: "0",
          altitude: "0",
          address: null,
          merk: "EDMI",
          meter_id: "39000061117",
          prepayment: "0",
          live_prepayment: "0",
          live_prepayment_date: null,
          line_anomali: null,
          line_offline: null,
          line_low_battery: null,
          line_prepaid: null,
          field_billing_rtu: "",
          field_billing_rtu_lwbp: null,
          field_billing_rtu_wbp: null,
          field_billing_rtu_kvarh_lwbp: null,
          field_billing_rtu_kvarh_wbp: null,
          email_anomali: null,
          email_offline: null,
          email_low_battery: null,
          email_prepaid: null,
          anomali_usage_start_date: null,
          anomali_usage_end_date: null,
          max_usage: "0",
          minim_balance_gas: 0,
          minim_balance_water: 0,
          alarm_pressure: 0,
          interval_alarm_pressure: 0,
          last_alarm_pressure: 0,
          is_unsigned: false,
          node_link_id: null,
          sensor_to_botom: 0,
          high_alarm: 0,
          low_alarm: 0,
          child_app_name: null,
          child_sn: null,
          iaq: null,
          iaq_quality: null,
          is_display: true,
          sensor_level_offset: 0,
          setting_pulse: 0,
          live_pulse: 0,
          start_totalizer: 0,
          flag_install: false,
          max_totalizer: 0,
          daya: 900,
          daya_min_usage: 0,
          createdAt: "2022-12-05T07:59:39.000Z",
          updatedAt: "2023-11-13T02:15:10.000Z",
        },
        iot_area: {
          id: 95,
          user_id: 214,
          company_id: 1,
          pricing_option: 1,
          automatic_bill: 1,
          email: "blok_e@mc.com",
          area_name: "BLOK E",
          username: "blok_e@mc.com",
          stamp_number: null,
          stamp_date: null,
          pic_name: "Morino",
          email_pic: "",
          phone: "-",
          address: "MARUNDA",
          image: "0",
          handphone: "-",
          url_to_company: null,
          decode_id: null,
          company_token: null,
          url_erp: null,
          email_erp: null,
          pass_erp: null,
          is_erp: false,
          is_line: false,
          auto_paid_prepaid: false,
          anomali_usage_start_date: null,
          anomali_usage_end_date: null,
          minim_balance_gas: 0,
          minim_balance_water: 0,
          pressure: 50,
          water_pressure: 0.5,
          pressure_pt: 50,
          low_pressure: 0.3,
          interval_pressure: 0,
          interval_water_pressure: 0,
          interval_pressure_pt: 0,
          interval_low_pressure: 0,
          minimum_charge_gas: 0,
          minimum_charge_water: 0,
          minimum_charge_electricity_ct: 0,
          minimum_charge_electricity_non_ct: 0,
          billing_charge_type: "tenant",
          erp_name: null,
          erp_id: null,
          erp_contract_name: null,
          erp_contract_id: null,
          is_ppn_value: 10,
          is_ppn: true,
          nomor_pelanggan: "POC.BLOK E.95",
          saas: false,
          saas_expired: null,
          saas_cut_date: null,
          saas_price: 0,
          saas_item_id: null,
          saas_unit_id: null,
          saas_Item_name: null,
          saas_30: null,
          saas_7: null,
          saas_3: null,
          company_name: "MARUNDA",
          billing_address: "-",
          admin_pic_email: "",
          iots_cutoffs: {
            id: 320,
            areaId: 11,
            tenantId: null,
            tanggal_cutoff: 1,
            order: 1,
            auto_bill_type: 1,
            status: null,
            time: "08:00:00",
            createdAt: "2021-08-02T05:37:51.000Z",
            updatedAt: "2021-08-02T05:37:51.000Z",
          },
        },
        iots_billing_attachments: [],
        amount: null,
        amount_kwh: 228789000,
        erp_inv: null,
        sub_total: 228789000,
        amount_pajak: 25166790,
        total_denda: 0,
        pricing: null,
        dicount_kwh: 22878900,
        dicount_kvarh: 0,
        jalan: 0,
        tagihan_lain: 0,
        lain_lain: {
          "Discount Kwh(100 x 228789)": 22878900,
          "Biaya Penerangan Jalan Umum (5%)": 10295505,
          "Tagihan Lainnya (10%)": 21620560.5,
        },
        total: 237826165.5,
        grandtotal: 237826165.5,
      })
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

          {/* sction 3  */}
          <div class={"w-full my-5"}>
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
        </div>
      </object>
    </div>
  );
}
