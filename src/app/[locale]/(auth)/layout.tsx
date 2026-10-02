import AuthSideBar from "@/features/auth/components/AuthSideBar";

interface IAuthLayout_props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: IAuthLayout_props) {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Aside Section */}
      <div className="hidden lg:block ">
        <AuthSideBar />
      </div>

      {/* Form Section */}
      <div className="flex items-center justify-center p-8 lg:p-16 ">
        <div className="max-w-md mx-auto w-full">{children}</div>
      </div>
    </main>
  );
}
