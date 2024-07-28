import { NavLink } from "@/features";
import { freelancerNavLinks } from "@/utils/constants";

type FreelancerLinkPropType = {
  onClose?: React.MouseEventHandler<HTMLDivElement>;
};

const FreelancerLinks = ({ onClose }: FreelancerLinkPropType) => {
  return (
    <ul className="gap-2 flex flex-col lg:flex-row">
      {freelancerNavLinks.map((link) => (
        <NavLink key={link.title} {...link} onClose={onClose} />
      ))}
    </ul>
  );
};

export default FreelancerLinks;
