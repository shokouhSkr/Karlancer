const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianNumbers(number: number) {
  return number.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}
