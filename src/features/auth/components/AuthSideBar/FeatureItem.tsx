import { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

interface IFeatureItem_props {
  featureKey: string;
  Icon: LucideIcon;
}

export default function FeatureItem({ featureKey, Icon }: IFeatureItem_props) {
  const t = useTranslations("auth.layout.authSideBar.features");

  return (
    <li className="grid grid-cols-[auto_1fr] items-start gap-4">
      <div
        aria-hidden
        className="rounding-lg mt-0.5 border-2 border-blue-500 bg-white/30 p-1 text-blue-600 shadow-sm"
      >
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h2 className="font-mono text-lg font-semibold text-blue-600">
          {t(`${featureKey}.title`)}
        </h2>
        <p className="mt-1 max-w-xs font-mono text-sm leading-relaxed text-slate-600">
          {t(`${featureKey}.description`)}
        </p>
      </div>
    </li>
  );
}
