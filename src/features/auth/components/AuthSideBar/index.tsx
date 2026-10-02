import List from "@/shared/components/List";
import Logo from "@/shared/components/logo";
import { useTranslations } from "next-intl";
import { featuresList } from "../../constants/AuthSideBar/constents";
import FeatureItem from "./FeatureItem";

export default function AuthSideBar() {
  const t = useTranslations("auth.layout");

  return (
    <aside className="hidden gap-15 lg:flex flex-col justify-center h-full w-full p-8 lg:p-14 bg-linear-to-br from-blue-300/90 via-blue-200/20 to-white text-slate-900 border-r border-slate-100">
      {/* Exam app logo */}
      <Logo />

      {/* Heading */}
      <h1 className="text-3xl font-bold leading-snug max-w-md text-slate-900">
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
