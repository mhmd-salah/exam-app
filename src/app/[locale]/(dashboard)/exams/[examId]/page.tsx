import ExamQuestions from "@/features/dashboard/exams/components/ExamQuestions";
import Heading from "@/features/dashboard/layout/components/Heading";
import { CircleQuestionMark } from "lucide-react";

interface IProps {
  params: Promise<{ examId: string }>;
}

const ExamId = async ({ params }: IProps) => {
  const { examId } = await params;

  return (
    <div>
      <Heading>
        <CircleQuestionMark />
      </Heading>
      <ExamQuestions examId={examId} />
    </div>
  );
};

export default ExamId;
