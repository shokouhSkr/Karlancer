import { Empty, OwnerProposalRow, Table } from "@/features";

const OwnerProposalsTable = ({ proposals }: { proposals: any }) => {
	if (proposals.length === 0) {
		return <Empty resourceName="درخواستی" />;
	}

	return (
		<Table>
			<Table.Header>
				<th>#</th>
				<th>فریلنسر</th>
				<th>توضیحات</th>
				<th>زمان تحویل</th>
				<th>هزینه (تومان)</th>
				<th>وضعیت</th>
				<th>عملیات</th>
			</Table.Header>

			<Table.Body>
				{proposals.map((proposal: any, index: number) => {
					return <OwnerProposalRow key={proposal._id} proposal={proposal} index={index} />;
				})}
			</Table.Body>
		</Table>
	);
};

export default OwnerProposalsTable;
