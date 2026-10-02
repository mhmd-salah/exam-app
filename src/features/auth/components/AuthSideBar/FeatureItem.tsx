import { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

interface IFeatureItem_props {
  featureKey: string;
  Icon: LucideIcon;
}

export default function FeatureItem({ featureKey, Icon }: IFeatureItem_props) {
  const t = useTranslations("auth.layout.authSideBar.features");

  return (
    <li className="grid grid-cols-[auto_1fr] gap-4 items-start">
      <div
        aria-hidden
        className="p-1 border-2 border-blue-500 rounding-lg text-blue-600 bg-white/30 shadow-sm mt-0.5"
      >
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h2 className="text-lg font-semibold font-mono text-blue-600">
          {t(`${featureKey}.title`)}
        </h2>
        <p className="text-sm font-mono text-slate-600 mt-1 leading-relaxed max-w-xs">
          {t(`${featureKey}.description`)}
        </p>
      </div>
    </li>
  );
}
