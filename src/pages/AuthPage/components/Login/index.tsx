import "./login.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../../../utils/validation";
import { Field } from "../../../../components/field";
import { Label } from "../../../../components/label";
import { Input, InputPassword } from "../../../../components/input";
import { Button } from "../../../../components/button";
import { Link } from "react-router-dom";
import { assetsImage } from "../../../../assets/assets";
import { useState } from "react";

interface ILoginType {
  email: string;
  password: string;
}

type Props = {
  toggleActive: () => void;
}

export default function Login({ toggleActive }: Props) {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [togglePassword, setTogglePassword] = useState(false);

  const handleLogin = (values: ILoginType) => {
    console.log(values);
    reset();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="card__title">
          <h1 className="title">Chào mừng bạn đã trở lại</h1>
          <p className="question">
            Bạn chưa có tài khoản?{" "}
            <Button title="Đăng ký" onClick={toggleActive} className="link" circle={false} color="custom" />
          </p>
        </div>
        <div className="btn__google">
          <img src={assetsImage.Google} alt="btn-google" />
          <p className="title">Đăng nhập với Google</p>
        </div>

        <div className="group__line">
          <div className="line"></div>
          <p>or login with email</p>
          <div className="line"></div>
        </div>

        <form className="form" onSubmit={handleSubmit(handleLogin)}>
          <Field>
            <Label htmlFor="email" marginBottom="mb-2">
              Email
            </Label>
            <Input
              name="email"
              placeholder="Nhập địa chỉ email..."
              control={control}
            />
            {errors.email && (
              <p className="error__content">{errors.email.message}</p>
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
          <Field className="forgot__pass">
            <div className="check__remember">
              <input type="checkbox" />
              <p>Ghi nhớ mật khẩu</p>
            </div>

            <Link to={"/forgot-password"} className="link">
              Quên mật khẩu?
            </Link>
          </Field>
          <Field>
            <Button title="Đăng Nhập" className="w-full h-16" circle={false} disabled={isSubmitting} />
          </Field>
        </form>
      </div>
    </div>
  );
}
