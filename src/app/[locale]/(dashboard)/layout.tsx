import Sidebar from "@/features/dashboard/components/Sidebar";

interface IProps {
  children: React.ReactNode;
}

export default function DiplomasLayout({ children }: IProps) {
  return (
    <div className="mint-h-screen flex bg-gray-50">
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}
