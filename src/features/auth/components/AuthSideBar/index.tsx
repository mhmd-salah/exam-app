import List from "@/shared/components/List";
import Logo from "@/shared/components/logo";
import { useTranslations } from "next-intl";
import { featuresList } from "../../constants/authSideBar.constants";
import FeatureItem from "./FeatureItem";

export default function AuthSideBar() {
  const t = useTranslations("auth.layout");

  return (
    <aside className="hidden h-full w-full flex-col justify-center gap-15 border-r border-slate-100 bg-linear-to-br from-blue-300/90 via-blue-200/20 to-white p-8 text-slate-900 lg:flex lg:p-14">
      {/* Exam app logo */}
      <Logo />

      {/* Heading */}
      <h1 className="max-w-md text-3xl leading-snug font-bold text-slate-900">
        {t("authSideBar.subtitle")}
      </h1>

      {/* Features */}
      <List
        items={featuresList}
        className="space-y-8"
        renderItem={({ feature, icon }) => (
          <FeatureItem key={feature} featureKey={feature} Icon={icon} />
        )}
      />
    </aside>
  );
}
