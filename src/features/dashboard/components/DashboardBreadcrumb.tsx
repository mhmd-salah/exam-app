"use client";

import { Link, usePathname } from "@/i18n/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";

const breadcrumbLabels: Record<string, string> = {
  dashboard: "Dashboard",
  diplomas: "Diplomas",
  settings: "Settings",
};

const DashboardBreadCrumb = () => {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;
          const label = breadcrumbLabels[segment] ?? segment;

          return (
            <div key={href}>
              {index > 0 && <BreadcrumbSeparator className="text-gray-400" />}

              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="text-xs text-gray-400">{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink>
                    <Link href={href} className="text-xs text-gray-400">
                      {label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DashboardBreadCrumb;
