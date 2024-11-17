import * as yup from "yup";

const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;
const passRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const EmailSchema = yup.object({
  email: yup.string().email("Địa chỉ email không hợp lệ").required("Vui lòng nhập email!!"),
});

export const LoginSchema = yup.object({
  email: yup.string().email("Địa chỉ email không hợp lệ").required("Vui lòng nhập email!!"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu!!")
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
    .matches(passRegExp, "Mật khẩu phải có ít nhất 1 chữ hoa, 1 chữ thường, 1 ký tự đặc biệt"),
});

export const RegisterSchema = yup.object({
  email: yup.string().email("Địa chỉ email không hợp lệ").required("Vui lòng nhập email!!"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu!!")
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
    .matches(passRegExp, "Mật khẩu phải có ít nhất 1 chữ hoa, 1 chữ thường, 1 ký tự đặc biệt"),
  confirmPassword: yup
    .string()
    .required("Vui lòng nhập mật khẩu!!")
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
    .matches(passRegExp, "Mật khẩu phải có ít nhất 1 chữ hoa, 1 chữ thường, 1 ký tự đặc biệt"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Số điện thoại không hợp lệ")
    .required("Vui lòng nhập số điện thoại"),
});

export const SkillSchema = yup.object({
  skill: yup.array().min(1, "Vui lòng chọn ít nhất một kỹ năng!!"),
});
