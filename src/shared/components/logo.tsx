import { Link } from "@/i18n/navigation";
import { FolderCodeIcon } from "lucide-react";

export default function Logo() {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-2 text-blue-600 font-bold">
        <div className="p-1.5 bg-blue-600 text-white rounded-r-full">
          <FolderCodeIcon className="w-5 h-5" />
        </div>
        <span className="text-lg tracking-tight">Exam App</span>
      </div>
    </Link>
  );
}
