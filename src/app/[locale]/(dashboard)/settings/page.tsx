"use client";
import Heading from "@/features/dashboard/layout/components/Heading";
import { usePathname } from "@/i18n/navigation";
import { Settings } from "lucide-react";

export default function Page() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Heading>
      <Settings size={30} />
    </Heading>
  );
}
