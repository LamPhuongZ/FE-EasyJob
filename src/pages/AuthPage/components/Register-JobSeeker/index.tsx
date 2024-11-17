import "./registerJobSeeker.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../../../utils/validation";
import { useRef, useState } from "react";
import { assetsImage } from "../../../../assets/assets";
import { Field } from "../../../../components/field";
import { Label } from "../../../../components/label";
import { Input, InputPassword } from "../../../../components/input";
import { Button } from "../../../../components/button";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface IRegisterType {
  email: string;
  password: string;
  phone: string;
}

type Props = {
  toggleActive: () => void;
};

export default function RegisterJobSeeker({ toggleActive }: Props) {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
  });

  const [togglePassword, setTogglePassword] = useState(false);
  const navigate = useNavigate();
  const reCAPTCHARef = useRef<ReCAPTCHA | null>(null);

  const handleRegister = async (values: IRegisterType) => {
    const reCAPTCHAValue = reCAPTCHARef.current?.getValue();
    if (!reCAPTCHAValue) {
      toast.error("Làm ơn hãy hoàn thành reCAPTCHA");
      return;
    }

    console.log("reCAPTCHAValue: ", reCAPTCHAValue);
    console.log("Register value: ", values);

    // nếu xác nhận đăng ký thành công thì chuyển qua trang kỹ năng để cập nhật kỹ năng
    toast.success("Đăng ký thành công");
    navigate('/skill-page');

    reCAPTCHARef.current?.reset();
    reset();
  };

  return (
    <div className="registerJobSeeker">
      <div className="card">
        <div className="card__title">
          <h1 className="title">Chào mừng đến với EasyJob</h1>
          <p className="question">
            Bạn đã có tài khoản?{" "}
            <Button
              title="Đăng nhập"
              onClick={toggleActive}
              className="link"
              circle={false}
              color="custom"
            />
          </p>
        </div>
        <div className="btn__google">
          <img src={assetsImage.Google} alt="btn-google" />
          <p className="title">Đăng ký với Google</p>
        </div>

        <div className="group__line">
          <div className="line"></div>
          <p>or login with email</p>
          <div className="line"></div>
        </div>

        <form className="form" onSubmit={handleSubmit(handleRegister)}>
          <Field>
            <Label htmlFor="email" marginBottom="mb-2">
              Email
            </Label>
            <Input
              name="email"
              placeholder="Nhập địa chỉ email: example@gmail.com"
              control={control}
            />
            {errors.email && (
              <p className="error__content">{errors.email.message}</p>
            )}
          </Field>
          <Field>
            <Label htmlFor="phone" marginBottom="mb-2">
              Số điện thoại
            </Label>
            <Input
              type="phone"
              name="phone"
              placeholder="Nhập số điện thoại..."
              control={control}
            />
            {errors.phone && (
              <p className="error__content">{errors.phone.message}</p>
            )}
          </Field>
          <Field>
            <Label htmlFor="password" marginBottom="mb-2">
              Mật khẩu
            </Label>
            <InputPassword
              name="password"
              placeholder="Nhập mật khẩu..."
              control={control}
              type={togglePassword ? "text" : "password"}
              togglePassword={togglePassword}
              setTogglePassword={setTogglePassword}
            />
            {errors.password && (
              <p className="error__content">{errors.password.message}</p>
            )}
          </Field>
          <Field>
            <Label htmlFor="confirmPassword" marginBottom="mb-2">
              Nhập lại Mật khẩu
            </Label>
            <InputPassword
              name="confirmPassword"
              placeholder="Nhập lại mật khẩu..."
              control={control}
              type={togglePassword ? "text" : "password"}
              togglePassword={togglePassword}
              setTogglePassword={setTogglePassword}
            />
            {errors.confirmPassword && (
              <p className="error__content">{errors.confirmPassword.message}</p>
            )}
          </Field>
          <Field>
            <ReCAPTCHA
              className="btn__reCAPTCHA"
              ref={reCAPTCHARef}
              sitekey="YOUR_RECAPTCHA_SITE_KEY" // Thay bằng site key của bạn
            />
          </Field>
          <Field>
            <Button
              title="Đăng Ký"
              className="w-full h-16"
              circle={false}
              disabled={isSubmitting}
            />
          </Field>
        </form>
      </div>
    </div>
  );
}
