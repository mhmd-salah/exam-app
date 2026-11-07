"use client";
import useGetDiplomaExams from "../hooks/useGetDiplomaExams";
import DiplomaExamCard from "./DiplomaExamCard";

const DiplomaExamsGrid = () => {
  const { data, isLoading } = useGetDiplomaExams({ id: "07c143c9-e5d2-4301-8a34-5c76da61ec09" });

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (data?.status) {
    const diploma = data.payload.diploma;
    return (
      <div>
        <h1>{diploma.title}</h1>

        {diploma.exams.map((exam) => (
          <DiplomaExamCard key={exam.id} exam={exam} />
        ))}
      </div>
    );
  }
};

export default DiplomaExamsGrid;
