import { useMutation } from "@tanstack/react-query";
import { ISubmitExamPayload, submitExam } from "../api/submitExams.api";

export default function useSubmitExam(id: string) {
  return useMutation({
    mutationFn: (payload: ISubmitExamPayload) => submitExam(payload),
    onSuccess: (data) => {
      if (data.status === true) {
        console.log("exam submitted successfully:", data.payload);
      } else {
        console.error("api error ", data.message);
      }
    },
    onError: (err) => {
      console.error(err.message);
    },
  });
}
