"use client";
import { usePathname } from "@/i18n/navigation";
// import { GraduationCap } from "lucide-react";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

const Heading = ({ children }: IProps) => {
  const pathname = usePathname();
  const sectionHeadingName = pathname.split("/")[1];

  return (
    <div className="mb-5">
      <div className="flex items-center justify-center gap-2">
        {/* <div>
        <ChevronLeft size={30} className=" border"/>
        </div> */}
        <h2 className="flex flex-1 items-center gap-2 bg-blue-600 px-3 py-3 text-2xl text-white">
          {children}
          {sectionHeadingName.toUpperCase()}
        </h2>
      </div>
    </div>
  );
};

export default Heading;
