import React, { useState, useRef } from "react";

interface OtpInputProps {
  length: number; // Độ dài của mã OTP
  onChange: (otp: string) => void; // Hàm callback để trả OTP
}

export default function OTPInput({ length, onChange }: OtpInputProps) {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return; // Chỉ cho phép nhập số
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join(""));

    // Tự động chuyển sang ô tiếp theo
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData.getData("text");
    if (/^\d+$/.test(pastedData)) {
      const newOtp = pastedData.slice(0, length).split("");
      setOtp([...newOtp, ...Array(length - newOtp.length).fill("")]);
      onChange(newOtp.join(""));

      // Focus ô cuối cùng đã nhập
      const lastIndex = Math.min(newOtp.length - 1, length - 1);
      inputRefs.current[lastIndex]?.focus();
    }
    e.preventDefault();
  };

  return (
    <div className="flex space-x-7">
      {otp.map((_, index) => (
        <input
          key={index}
          type="text"
          value={otp[index]}
          maxLength={1}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          ref={(el) => (inputRefs.current[index] = el!)}
          className="w-12 h-12 text-center border-b-2 border-blue-500 rounded focus:outline-none focus:ring focus:ring-blue-300"
        />
      ))}
    </div>
  );
}
