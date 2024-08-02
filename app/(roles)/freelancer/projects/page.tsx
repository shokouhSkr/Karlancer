import { Suspense } from "react";
import { FreelancerProjectsHeader, FreelancerProjectsTable, Loading } from "@/features";

const ProjectsPage = () => {
	// In Next.js 13 and later, when using the "use client" directive and client-side routing features like useSearchParams, you need to wrap your component in a Suspense boundary.
	return (
		<div>
			<Suspense
				fallback={
					<div className="flex justify-center">
						<Loading size={15} />
					</div>
				}
			>
				<FreelancerProjectsHeader />
				<FreelancerProjectsTable />
			</Suspense>
		</div>
	);
};

export default ProjectsPage;
