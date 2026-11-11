"use client";
import List from "@/shared/components/List";
import useGetDiplomaExams from "../hooks/useGetDiplomaExams";
import DiplomaExamCard from "./DiplomaExamCard";
import { Link, usePathname } from "@/i18n/navigation";

interface IProps {
  diplomaId: string;
}

const DiplomaExamsGrid = ({ diplomaId }: IProps) => {
  const { data, isLoading } = useGetDiplomaExams({ diplomaId });
  const pathname = usePathname();

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (data?.status) {
    const diploma = data.payload.diploma;
    return (
      <List
        items={diploma.exams}
        renderItem={(exam) => (
          <Link href={"/exams/" + exam.id} key={exam.id}>
            <DiplomaExamCard exam={exam} />
          </Link>
        )}
      />
    );
  }
};

export default DiplomaExamsGrid;
