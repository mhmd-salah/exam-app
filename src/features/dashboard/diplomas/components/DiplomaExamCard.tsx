import Image from "next/image";
import React from "react";
import { TDiplomaExam } from "../types/diplomaExams.types";

interface IProps {
  exam: TDiplomaExam;
}

const DiplomaExamCard = ({ exam }: IProps) => {
  return (
    <div className="mb-3 flex gap-2 bg-slate-100 p-3 transition-all hover:bg-blue-50">
      <div className="border border-blue-200 bg-blue-100 p-2">
        <Image src={exam.image} width={75} height={75} alt="logo" />
      </div>

      <div className="flex-1 font-mono">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-blue-600">{exam.title}</h3>
          <div className="divide-x divide-gray-800 text-sm *:px-3">
            <span>{exam.duration} Minutes</span>
            <span>{exam.questionsCount} Questions</span>
          </div>
        </div>
        <p className="text-sm text-gray-600">{exam.description}</p>
      </div>
    </div>
  );
};

export default DiplomaExamCard;
