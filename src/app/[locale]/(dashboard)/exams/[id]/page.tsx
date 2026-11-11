import ExamQuestions from "@/features/dashboard/exams/components/ExamQuestions";
import Heading from "@/features/dashboard/layout/components/Heading";
import { CircleQuestionMark } from "lucide-react";

interface IProps {
  params: Promise<{ id: string }>;
}

const ExamId = async ({ params }: IProps) => {
  const { id } = await params;

  return (
    <div>
      <Heading>
        <CircleQuestionMark />
      </Heading>
      <ExamQuestions id={id} />
    </div>
  );
};

export default ExamId;
