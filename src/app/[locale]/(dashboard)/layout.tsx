import Sidebar from "@/features/dashboard/layout/components/Sidebar";
import DashboardBreadCrumb from "@/features/dashboard/layout/components/DashboardBreadcrumb";

interface IProps {
  children: React.ReactNode;
}

export default function DiplomasLayout({ children }: IProps) {
  return (
    <div className="mint-h-screen flex bg-gray-50">
      <Sidebar />

      <main className="flex-1">
        <div className="bg-white p-2">
          <DashboardBreadCrumb />
        </div>
        <div className="p-5">{children}</div>
      </main>
    </div>
  );
}
