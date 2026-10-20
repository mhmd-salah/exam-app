"use client";
import Heading from "@/features/dashboard/layout/components/Heading";
import { usePathname } from "@/i18n/navigation";
import { GraduationCap } from "lucide-react";

export default function Page() {
  const pathname = usePathname();
  console.log(pathname);
  return <Heading><GraduationCap size={30}/></Heading>;
}
