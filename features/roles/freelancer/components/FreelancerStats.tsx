"use client";

import { Loading, Stat } from "@/features";
import { useProposals } from "@/features/proposal/hooks/useProposals";
import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from "react-icons/hi";

const FreelancerStats = () => {
	const { isLoading, proposals } = useProposals();

	if (isLoading)
		return (
			<div className="flex justify-center">
				<Loading />
			</div>
		);

	const numOfProposals = proposals?.length;
	const acceptedProposals = proposals?.filter((proposal: any) => proposal.status === 2);
	const numOfAcceptedProposals = acceptedProposals.length;
	const income = acceptedProposals?.reduce((acc: any, cur: any) => cur.price + acc, 0);

	return (
		<div className="space-y-4 md:space-y-0 md:flex md:gap-4">
			<Stat
				title="درخواست ها"
				value={numOfProposals}
				color="primary"
				icon={<HiOutlineViewGrid className="size-16" />}
			/>
			<Stat
				title="درخواست های تایید شده"
				value={numOfAcceptedProposals}
				color="green"
				icon={<HiCurrencyDollar className="size-16" />}
			/>
			<Stat
				title="کیف پول (تومان)"
				value={income}
				color="yellow"
				icon={<HiCollection className="size-16" />}
			/>
		</div>
	);
};

export default FreelancerStats;
