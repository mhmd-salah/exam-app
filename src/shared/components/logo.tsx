import { Link } from "@/i18n/navigation";
import { FolderCodeIcon } from "lucide-react";

export default function Logo() {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-2 font-bold text-blue-600">
        <div className="rounded-r-full bg-blue-600 p-1.5 text-white">
          <FolderCodeIcon className="h-5 w-5" />
        </div>
        <span className="text-lg tracking-tight">Exam App</span>
      </div>
    </Link>
  );
}
