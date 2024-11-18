import "./OTPRegister.scss";
import { OTPInput } from "../../../../components/otp-input";
import { useState } from "react";
import { Button } from "../../../../components/button";
import { Field } from "../../../../components/field";

export default function OTPRegister() {
  const [otp, setOtp] = useState<string>("");

  const handleOtpChange = (otp: string) => {
    setOtp(otp);
    console.log("Current OTP:", otp);
  };

  const handleSubmit = () => {
    alert(`Submitted OTP: ${otp}`);
  };

  return (
    <div className="otp">
      <div className="card">
        <div className="card__title">
          <h1 className="title">CODE Verification</h1>
          <p className="description">
            We have send code to your Email ui**@gmail.com
          </p>
        </div>
        <div className="group__code">
          <p className="enter__code">Enter code here</p>
          <Field>
            <OTPInput length={4} onChange={handleOtpChange} />
          </Field>
          <Button
            title="SEND PASSWORD"
            disabled={otp.length < 4}
            onClick={handleSubmit}
            circle={false}
            className="w-full h-16"
          />
          <p className="resend__code">Don’t receive code? 
            <Button
              title="Resend"
              color="custom"
              circle={false}
              className="btn__resend"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
