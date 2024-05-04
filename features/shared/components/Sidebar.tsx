type SidebarPropType = {
  isSidebarOpen: boolean;
  onClose: React.MouseEventHandler<HTMLDivElement>;
};

const Sidebar = ({ isSidebarOpen, onClose }: SidebarPropType) => {
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
        <div className="bg-purple-50 p-6">LOGO</div>
        <ul className="relative flex-1 bg-purple-400 p-6">LINKS</ul>
        <div className="bg-purple-50 p-6">LOGOUT</div>
      </aside>
    </>
  );
};

export default Sidebar;
