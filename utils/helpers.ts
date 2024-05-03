const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianNumbers(number: number) {
  return number.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}

export const persianPriceFormatter = (price: number) => {
  let newPrice = String(price)
    .split("")
    .reverse()
    .join("")
    .match(/.{1,3}/g)!
    .map(function (x) {
      return x.split("").reverse().join("");
    })
    .reverse()
    .join(",");

  newPrice = newPrice.replace(/\d/g, (match) => farsiDigits[Number(match)]);

  return newPrice;
};

export const truncateText = (text: string, length: number): string => {
  if (text.length < length) return text;

  return text.slice(0, length) + "...";
};

export const toLocalDateShort = (date: string) => {
  return new Date(date).toLocaleDateString("fa-IR");
};
