"use client";

import { Link, usePathname } from "@/i18n/navigation";
import React from "react";

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
      <BreadcrumbList className="flex items-center gap-1">
        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;
          const label = breadcrumbLabels[segment] ?? segment;
          console.log(href, "-------");
          return (
            <React.Fragment key={href}>
              {index > 0 && <BreadcrumbSeparator className="text-gray-400" />}

              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="text-xs text-gray-400 capitalize">
                    {label.split("-").join(" ")}
                  </BreadcrumbPage>
                ) : (
                  <Link href={href} className="text-xs text-gray-400 capitalize">
                    {label}
                  </Link>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DashboardBreadCrumb;
