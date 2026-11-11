"use client";

import useGetQuestions from "@/features/dashboard/exams/hooks/useGetQuestions";
import { Label } from "@/shared/components/ui/label";
import { Progress } from "@/shared/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
import { useState } from "react";
import useSubmitExam from "../hooks/useSubmitExam";

interface IProps {
  id: string;
}

const ExamQuestions = ({ id }: IProps) => {
  // Hooks
  const { data, isLoading, isError } = useGetQuestions(id);
  const { mutate: submitExamMutate, isPending } = useSubmitExam(id);

  // Stats
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [startedAt] = useState(() => new Date().toISOString());

  // Questions
  const questions = data && data.status === true ? data.payload.questions : [];

  const currentQuestion = questions[currentIndex];
  // const selectedAnswer = answer[currentQuestion.id];
  const isLastQuestions = currentIndex === questions.length - 1;
  const progress = ((currentIndex + 1) / questions.length) * 100;

  // handle select answer on input radio
  const handleSelectAnswer = (answerId: string) => {
    setAnswer((prev) => ({
      ...prev,
      [currentQuestion.id]: answerId,
    }));
    console.log(answer);
  };

  // handle submit answers
  const handleSubmit = () => {
    const formattedAnswers = Object.entries(answer).map(([questionId, answerId]) => ({
      questionId,
      answerId,
    }));

    const payloadBody = {
      examId: id,
      answers: formattedAnswers,
      startedAt: startedAt,
    };

    submitExamMutate(payloadBody, {
      onSuccess: (data) => {
        if (data.status === true) {
          console.log(data);
          setIsFinished(true);
        }
      },
    });
  };

  if (isFinished)
    return (
      <div>
        <h1>Result</h1>
      </div>
    );

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Something went wrong</p>;

  if (!questions.length) return <p>No Questions found</p>;

  return (
    <div className="bg-white p-5 font-mono">
      <div className="my-7">
        <div>
          <div>{}</div>
        </div>
        <Progress
          value={progress}
          className="**:data-[slot=progress-track]:bg-muted **:data-[slot=progress-indicator]:bg-blue-600 **:data-[slot=progress-track]:h-4"
        />
      </div>

      {/* Question */}
      <div>
        {/* Question text*/}
        <h2 className="text-2xl font-bold text-blue-600">{currentQuestion.text}</h2>

        {/* Answers */}
        <div className="mt-3">
          <RadioGroup value={answer[currentQuestion.id] ?? ""} onValueChange={handleSelectAnswer}>
            {currentQuestion.answers.map((answer) => (
              <div className="flex items-center gap-3 px-2 hover:bg-gray-100" key={answer.id}>
                <RadioGroupItem value={answer.id} id={answer.id} />
                <Label htmlFor={answer.id} className="w-full cursor-pointer p-3">
                  {answer.text}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Control */}
        <div className="flex items-center gap-4 py-5 text-white *:w-full *:bg-blue-600 *:py-2">
          <button
            onClick={() => {
              if (currentIndex < 1) return;
              setCurrentIndex((prev) => prev - 1);
            }}
            className={`${currentIndex === 0 ? "cursor-not-allowed opacity-50" : "hover:bg-blue-700"}`}
            disabled={currentIndex == 0}
          >
            Previous
          </button>
          <button
            onClick={() => {
              if (isLastQuestions) {
                handleSubmit();
              } else {
                setCurrentIndex((prev) => prev + 1);
              }
            }}
          >
            {isLastQuestions ? <span> {isPending ? "Loading" : "Submit"}</span> : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamQuestions;
