"use client";

import { useRouter } from "next/navigation";
import { HiArrowSmallRight } from "react-icons/hi2";

const ProposalsHeader = ({ project }: { project: any }) => {
	const router = useRouter();

	return (
		<div className="flex items-center gap-4 mb-8">
			<div>
				<button
					onClick={() => router.back()}
					className="btn-icon-only size-7 md:size-9 bg-secondary-0 rounded-lg"
				>
					<HiArrowSmallRight className="md:size-5" />
				</button>
			</div>
			<h1 className="font-bold text-xl text-secondary-700 md:text-2xl">
				لیست درخواست های {project.title}
			</h1>
		</div>
	);
};

export default ProposalsHeader;
