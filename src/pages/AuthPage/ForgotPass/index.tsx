import "./ForgotPass.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EmailSchema } from "../../../utils/validation";
import Field from "../../../components/field/Field";
import Label from "../../../components/label/Label";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";

export default function ForgotPass() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(EmailSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSend = (values: { email: string }) => {
    console.log(values);
    reset();
  };

  return (
    <div className="forgotPass">
      <div className="card">
        <h1 className="title">Quên mật khẩu</h1>
        <form onSubmit={handleSubmit(handleSend)} className="form">
          <Field>
            <Label htmlFor="email" marginBottom="mb-2">
              Email
            </Label>
            <Input name="email" placeholder="Nhập email" control={control} />
            {errors.email && <p className="error__content">{errors.email.message}</p>}
          </Field>
          <Field>
            <Button
              type="submit"
              title="Gửi email"
              className="w-full h-16"
              circle={false}
            />
          </Field>
        </form>
      </div>
    </div>
  );
}
