import LoginForm from "@/features/auth/components/login";
import { Link } from "@/i18n/navigation";
import { Params } from "@/shared/types/misc/route_params";
import { setRequestLocale } from "next-intl/server";

interface ISignin_props {
  params: Params;
}

const Signin = async ({ params }: ISignin_props) => {
  const { locale } = await params;

  setRequestLocale(locale);

  // const t = await getTranslations("auth.layout");

  return (
    <div className="mt-20">
      <h2 className="mb-10 font-mono text-3xl font-bold">Login</h2>
      <LoginForm />

      <p className="mt-8 text-center font-mono text-sm font-medium text-gray-500">
        Don&#39;t have an account?
        <Link href="/register" className="font-mono font-semibold text-blue-600">
          &nbsp; Create yours
        </Link>
      </p>
    </div>
  );
};

export default Signin;
