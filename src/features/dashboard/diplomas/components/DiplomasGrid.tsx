"use client";
import { Link } from "@/i18n/navigation";
import useGetDiplomas from "../hooks/useGetDiplomas";
import DiplomaCard from "./DiplomaCard";

export default function DiplomasGrid() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage, isError } =
    useGetDiplomas();

  if (isLoading) {
    return <div>loading</div>;
  }
  if (isError) {
    return <div>error</div>;
  }

  const allDiplomas = data?.pages.flatMap((page) => page.payload.data) || [];

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allDiplomas.map((diploma) => (
          <Link
            href={`/diplomas/${diploma.title.trim().split(" ").join("-").toLowerCase()}`}
            key={diploma.id}
          >
            <DiplomaCard diploma={diploma} />
          </Link>
        ))}
      </div>
      <div onClick={()=> fetchNextPage()} className=" cursor-pointer text-sm text-center py-3 mt-5 text-gray-500 bg-white font-mono">
        Click To More
      </div>
      {isFetchingNextPage? <p>
        Loading more diplomas
      </p> :""}
    </div>
  );
}
