const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

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
