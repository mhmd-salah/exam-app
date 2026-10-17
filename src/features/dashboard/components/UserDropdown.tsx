"use client";

import { Link } from "@/i18n/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { LogOut, MoreVertical, User, LayoutDashboard } from "lucide-react";
import Image from "next/image";
import React from "react";

const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex cursor-pointer items-center justify-between rounded-lg p-2 transition-all hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Image
              src={"/images/final-logo.svg"}
              width={30}
              height={30}
              alt="user profile"
              className="brightness-0"
            />
          </div>
          <div className="flex flex-col text-left font-mono">
            <span className="mb-0.5 text-sm font-semibold text-blue-600">First name</span>
            <span className="text-xs font-semibold text-gray-400">email@gmail.com</span>
          </div>
          <MoreVertical size={18} className="text-gray-400" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="z-50 w-56 space-y-1 divide-y divide-gray-100 *:py-2"
        align="end"
      >
        {/* <div className="px-2 py-1.5 text-sm font-semibold">My Account</div> */}
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuItem className="cursor-pointer gap-2">
          <User size={16} />
          <Link href="/settings">Account</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer gap-2">
          <LayoutDashboard size={16} />
          <Link href={"/diplomas"}>Dashboard</Link>
        </DropdownMenuItem>
        {/* <DropdownMenuSeparator />/ */}
        <DropdownMenuItem className="cursor-pointer gap-2 text-red-600 focus:bg-red-50 focus:text-red-600">
          <LogOut size={16} />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
