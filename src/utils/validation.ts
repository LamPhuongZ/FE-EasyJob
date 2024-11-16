import * as yup from "yup";

export const EmailSchema = yup.object({
  email: yup.string().email().required("Vui lòng nhập email!!"),
});

export const SkillSchema = yup.object({
  skill: yup.array().min(1, "Vui lòng chọn ít nhất một kỹ năng!!"),
});
