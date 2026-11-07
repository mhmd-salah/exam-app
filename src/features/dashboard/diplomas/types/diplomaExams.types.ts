export type TDiplomaExam = {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: number;
  createdAt: string;
  questionsCount: number;
};

export type TDiploma = {
  id: string;
  title: string;
  description: string;
  image: string;
  immutable: boolean;
  createdAt: string;
  updatedAt: string;
  exams: TDiplomaExam[];
};

export type TDiplomaExamsPayload = {
  diploma: TDiploma;
};
