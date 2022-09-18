import * as yup from "yup";

export const schema = yup.object({
  title: yup
    .string()
    .required("必須項目です。")
    .max(100, "100文字以内で入力してください。"),
  dueDate: yup
    .date()
    .typeError("必須項目です。")
    .required("必須項目です。")
    .min(new Date(), "過去の日付を入力できません"),
  memo: yup.string().max(500, "500文字以内で入力してください。"),
});
