export const WeCurrencyWith00 = (value) => {
  return (
    "Rp" +
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    })
      .format(value)
      .split("Rp")[1]
      .trim()
  );
};

export function base64ToBase64Url(base64) {
  // Remove any trailing "=" from the base64 string
  let base64Url = base64.replace(/=+$/, "");

  // Replace characters according to the Base64 URL encoding rules
  base64Url = base64Url.replace(/\+/g, "-").replace(/\//g, "_");

  return base64Url;
}

export function base64UrlToBase64(base64Url) {
  // Pad the Base64 URL string with "=" until its length is a multiple of 4
  while (base64Url.length % 4) {
    base64Url += "=";
  }

  // Replace characters according to the Base64 decoding rules
  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

  return base64;
}

export const convertNumberSm = (number) => {
  number = parseFloat(number);

  if (isNaN(number)) {
    number = 0;
  }

  let data = new Intl.NumberFormat("id-ID").format(number);
  if (data.split(",").length > 1) {
    if (data.split(",")[1].length < 3) {
      return (
        data.split(",")[0] + "," + (data.split(",")[1] + "000").slice(0, 3)
      );
    } else {
      return data;
    }
  } else {
    return data + ",000";
  }
};

export const convertNumberSm2 = (number) => {
  // return new Intl.NumberFormat("id-ID").format(number)
  // if (number) {
  //   return number.replace(/[.,]/g, function (x) {
  //     return x == "," ? "." : ",";
  //   });
  // } else {
  //   return "0,000";
  // }
  // return number.toFixed(3).split(".").join(",");
  number = parseFloat(number);

  if (isNaN(number)) {
    number = 0;
  }

  let data = new Intl.NumberFormat("id-ID").format(number);
  if (data.split(",").length > 1) {
    if (data.split(",")[1].length < 3) {
      return (
        data.split(",")[0] + "," + (data.split(",")[1] + "000").slice(0, 3)
      );
    } else {
      return data;
    }
  } else {
    return data;
  }
  // number = parseFloat(number);
  // if (Number.isInteger(number)) {
  //   return new Intl.NumberFormat("id-ID").format(number) + ",000";
  // } else {
  //   if (
  //     new Intl.NumberFormat("id-ID").format(number).split(",")[1].length >= 3
  //   ) {
  //     return new Intl.NumberFormat("id-ID").format(number);
  //   } else if (
  //     new Intl.NumberFormat("id-ID").format(number).split(",")[1].length == 2
  //   ) {
  //     return new Intl.NumberFormat("id-ID").format(number) + "0";
  //   }
  //   if (
  //     new Intl.NumberFormat("id-ID").format(number).split(",")[1].length == 1
  //   ) {
  //     return new Intl.NumberFormat("id-ID").format(number) + "00";
  //   } else {
  //     return new Intl.NumberFormat("id-ID").format(number);
  //   } // }
};

export const convertNumberFloatingDotToComma = (number) => {
  return number.toString().replace(/[.,]/g, function (x) {
    return x == "," ? "." : ",";
  });
};
