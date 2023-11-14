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
