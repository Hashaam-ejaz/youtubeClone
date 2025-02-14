interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex w-full min-h-screen items-center justify-center">
      {children}
    </div>
  );
};

export default Layout;
