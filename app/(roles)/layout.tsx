const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav className="bg-rose-200">roles layout</nav>
      {children}
    </div>
  );
};

export default Layout;
