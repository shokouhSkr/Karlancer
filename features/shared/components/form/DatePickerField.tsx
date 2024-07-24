import { DatePickerFieldPropType } from "@/types";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const DatePickerField = ({ label, date, setDate }: DatePickerFieldPropType) => {
	return (
		<div>
			<span className="mb-2 block text-secondary-700">{label}</span>

			<DatePicker
				containerClassName="w-full"
				inputClass="text-input"
				calendarPosition="bottom-center"
				value={date}
				onChange={(date) => setDate(date)}
				format="YYYY/MM/DD"
				calendar={persian}
				locale={persian_fa}
			/>
		</div>
	);
};

export default DatePickerField;
