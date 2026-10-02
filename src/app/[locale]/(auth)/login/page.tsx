import { Params } from "@/shared/types/misc/route_params";
import { getTranslations, setRequestLocale } from "next-intl/server";

interface ISignin_props {
  params: Params;
}

const Signin = async ({ params }: ISignin_props) => {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("auth.layout");

  return (
    <div className="flex justify-center ">
      <h2 className="text-3xl font-semibold mb-19 text-slate-200 p-2 border-slate-100 border-4">
        in progress
      </h2>
    </div>
  );
};

export default Signin;
