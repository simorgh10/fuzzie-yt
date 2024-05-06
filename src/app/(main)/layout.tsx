import InfoBar from "@/components/infobar";
import Sidebar from "@/components/sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="h-full flex-1">
        <InfoBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
