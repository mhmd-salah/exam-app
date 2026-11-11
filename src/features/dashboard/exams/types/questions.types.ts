export type TAnswer = {
  id: string;
  text: string;
};

export type TQuestions = {
  id: string;
  text: string;
  examId: string;
  answers: TAnswer[];
};

export type TApiQuestionsPayload = {
  questions: TQuestions[];
};
