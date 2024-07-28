import { adminNavLinks } from "@/utils/constants";
import { NavLink } from "@/features";

type AdminLinkPropType = {
  onClose?: React.MouseEventHandler<HTMLDivElement>;
};

const AdminLinks = ({ onClose }: AdminLinkPropType) => {
  return (
    <ul className="gap-2 flex flex-col lg:flex-row">
      {adminNavLinks.map((link) => (
        <NavLink key={link.title} {...link} onClose={onClose} />
      ))}
    </ul>
  );
};

export default AdminLinks;
