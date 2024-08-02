import { NavLink } from "@/features";
import { ownerNavLinks } from "@/utils/constants";

type OwnerLinkPropType = {
	onClose?: React.MouseEventHandler<HTMLDivElement>;
};

const OwnerLinks = ({ onClose }: OwnerLinkPropType) => {
	return (
		<ul className="gap-2 flex flex-col">
			{ownerNavLinks.map((link) => (
				<NavLink key={link.title} {...link} onClose={onClose} />
			))}
		</ul>
	);
};

export default OwnerLinks;
