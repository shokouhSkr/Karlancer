import { Loading, Stat } from "@/features";
import { useOwnerProjects } from "@/features/project/hooks/useOwnerProjects";
import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from "react-icons/hi";

const OwnerStats = () => {
	const { isLoading, projects } = useOwnerProjects();

	if (isLoading)
		return (
			<div className="flex justify-center">
				<Loading />
			</div>
		);

	const numOfProjects = projects?.length;
	const numOfAcceptedProjects = projects?.filter((project: any) => project.status === 2).length;
	const numOfProposals = projects?.reduce((acc: any, cur: any) => cur.proposals?.length + acc, 0);

	return (
		<div className="space-y-4 md:space-y-0 md:flex md:gap-4">
			<Stat
				title="پروژه ها"
				value={numOfProjects}
				color="primary"
				icon={<HiOutlineViewGrid className="size-16" />}
			/>
			<Stat
				title="پروژه های واگذار شده"
				value={numOfAcceptedProjects}
				color="green"
				icon={<HiCurrencyDollar className="size-16" />}
			/>
			<Stat
				title="درخواست ها"
				value={numOfProposals}
				color="yellow"
				icon={<HiCollection className="size-16" />}
			/>
		</div>
	);
};

export default OwnerStats;
