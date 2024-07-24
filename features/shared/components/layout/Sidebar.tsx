"use client";

import { usePathname } from "next/navigation";
import { AdminLinks, FreelancerLinks, OwnerLinks } from "@/features";

type SidebarPropType = {
  isSidebarOpen: boolean;
  onClose: React.MouseEventHandler<HTMLDivElement>;
};

const Sidebar = ({ isSidebarOpen, onClose }: SidebarPropType) => {
  const currentPath = usePathname();

  const dynamicSidebarLinks = () => {
    if (currentPath.startsWith("/owner")) return <OwnerLinks onClose={onClose} />;
    if (currentPath.startsWith("/freelancer")) return <FreelancerLinks onClose={onClose} />;
    if (currentPath.startsWith("/admin")) return <AdminLinks onClose={onClose} />;

    return null;
  };

  return (
    <>
      {/* BACKDROP */}
      <div
        className={`${
          isSidebarOpen && "fixed top-0 left-0 z-40 h-dvh w-full lg:hidden bg-[#00000080]"
        }`}
        onClick={onClose}
      />

      {/* OVERLAY */}
      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "translate-x-80"
        } fixed right-0 top-0 bottom-0 z-50 w-64 bg-secondary-0 shadow-lg transition-transform duration-300 lg:hidden flex flex-col`}
      >
        <span className="bg-purple-100 p-6">کارلنسر</span>
        <ul className="relative flex-1 p-6">{dynamicSidebarLinks()}</ul>
      </aside>
    </>
  );
};

export default Sidebar;
