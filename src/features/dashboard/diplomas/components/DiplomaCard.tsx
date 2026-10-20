import Image from "next/image";
import { TDiploma } from "../types/diplomas.types";

interface IProps {
  diploma: TDiploma;
}

export default function DiplomaCard({ diploma }: IProps) {
  return (
    <div className="relative h-65 scale-3d overflow-hidden rounded-xl border border-gray-100 bg-gray-900 shadow-md transition-all duration-300 hover:shadow-lg">
      {diploma.image ? (
        <Image
          src={diploma.image}
          alt="diploma"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-slate-800 text-slate-400">
          No image
        </div>
      )}
      <div className="group absolute inset-0 flex flex-col justify-end bg-linear-to-t from-blue-700/95 via-blue-600/60 to-transparent p-5 font-mono text-white">
        <h3 className="text-lg">{diploma.title}</h3>
        <p className="line-clamp-1 leading-relaxed transition-all duration-300 ease-in-out group-hover:line-clamp-none">
          {diploma.description}
        </p>
      </div>
    </div>
  );
}
