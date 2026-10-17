import Sidebar from "@/features/dashboard/components/Sidebar";
import DashboardBreadCrumb from "./../../../features/dashboard/components/DashboardBreadcrumb";

interface IProps {
  children: React.ReactNode;
}

export default function DiplomasLayout({ children }: IProps) {
  return (
    <div className="mint-h-screen flex bg-gray-50">
      <Sidebar />

      <main className="flex-1 ">
        <div className="px-2 py-2">
          <DashboardBreadCrumb/>
        </div>
        <div className="overflow-y-auto ">
        {children}
        </div>
      </main>
    </div>
  );
}
