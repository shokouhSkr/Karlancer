// compound component design

const Table = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="relative overflow-y-auto overflow-x-auto max-h-[540px] rounded-xl shadow">
			<table className="bg-secondary-0 w-full min-w-max">{children}</table>
		</div>
	);
};

const TableHeader = ({ children }: { children: React.ReactNode }) => {
	return (
		<thead>
			<tr className="bg-slate-200 sticky top-0 z-10">{children}</tr>
		</thead>
	);
};

const TableBody = ({ children }: { children: React.ReactNode }) => {
	return <tbody>{children}</tbody>;
};

const TableRow = ({ children }: { children: React.ReactNode }) => {
	return <tr>{children}</tr>;
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;

export default Table;
