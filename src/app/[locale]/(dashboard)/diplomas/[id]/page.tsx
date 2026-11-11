import DiplomaExamsGrid from "@/features/dashboard/diplomas/components/DiplomaExamsGrid";
import Heading from "@/features/dashboard/layout/components/Heading";
import { BookMarkedIcon } from "lucide-react";
import React from "react";

interface IProps {
  params: Promise<{ id: string }>;
}

const DiplomaExam = async ({ params }: IProps) => {
  const { id } = await params;
  return (
    <div>
      <Heading>
        <BookMarkedIcon />
      </Heading>
      <DiplomaExamsGrid id={id} />
      <div className="text-center text-sm text-gray-700">list of end</div>
    </div>
  );
};

export default DiplomaExam;
