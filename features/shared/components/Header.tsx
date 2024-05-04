type HeaderPropType = {
  onOpenSidebar: React.MouseEventHandler<HTMLButtonElement>;
};

const Header = ({ onOpenSidebar }: HeaderPropType) => {
  return (
    <header className="col-span-full bg-secondary-0 px-8 py-4">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onOpenSidebar} className="lg:hidden">
            MENU BARS
          </button>
          <span className="ml-4">LOGO</span>
          <div className="hidden lg:flex">LINKS</div>
        </div>

        <div>USER ACCOUNT</div>
      </nav>
    </header>
  );
};

export default Header;
