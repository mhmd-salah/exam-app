"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { Settings, FolderCode, GraduationCap } from "lucide-react";
import Image from "next/image";
import React from "react";
import UserDropdown from "./UserDropdown";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sticky top-0 flex h-screen w-64 flex-col justify-between border border-gray-100 bg-blue-50 p-4">
      <div className="py-4">
        {/* Logo */}
        <div>
          <span className="mb-2 flex items-center gap-2 px-2">
            <Image src={"/images/final-logo.svg"} alt={"exam"} width={150} height={200} priority />
          </span>
          <span className="flex gap-1 px-2 py-0.5 font-mono text-lg font-semibold text-blue-600">
            <FolderCode />
            Exam App
          </span>
        </div>
        {/* Links */}
        <nav className="space-y-3 py-8 font-mono">
          <Link
            href="/diplomas"
            className={`flex gap-2 border border-blue-50 px-3 py-2 text-sm ${pathname === "/diplomas" ? "border border-blue-600 bg-blue-100 text-blue-600" : ""}`}
          >
            <GraduationCap strokeWidth={1} />
            Diplomas
          </Link>

          <Link
            href="/settings"
            className={`flex gap-2 border border-blue-50 px-3 py-2 text-sm ${pathname === "/settings" ? "border border-blue-600 bg-blue-100 text-blue-600" : ""}`}
          >
            <Settings strokeWidth={1} />
            Account Settings
          </Link>
        </nav>
      </div>
      <UserDropdown />
    </aside>
  );
};

export default Sidebar;
