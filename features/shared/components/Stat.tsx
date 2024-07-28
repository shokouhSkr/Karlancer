import { persianPriceFormatter } from "@/utils/persianPriceFormatter";

type StatPropType = {
	title: string;
	value: number;
	icon: React.ReactNode;
	color: string;
};

const colors: { [key: string]: string } = {
	primary: "bg-primary-100 text-primary-900",
	green: "bg-green-100 text-green-500",
	yellow: "bg-yellow-100 text-yellow-500",
};

const Stat = ({ title, value, icon, color }: StatPropType) => {
	return (
		<div className="flex bg-secondary-0 rounded-xl flex-1 p-4 shadow">
			<div className={`flex-shrink-0 size-20 rounded-full p-2 ${colors[color]}`}>{icon}</div>

			<div className="flex flex-col font-bold justify-around pr-3 flex-grow">
				<h5 className="text-lg text-secondary-500">{title}</h5>
				<p className="text-3xl text-secondary-900">{persianPriceFormatter(value)}</p>
			</div>
		</div>
	);
};

export default Stat;
