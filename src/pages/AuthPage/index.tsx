import React, { useState } from "react";

const LoginRegister: React.FC = () => {
  const [currentForm, setCurrentForm] = useState<"login" | "register" | "code">(
    "login"
  );

  const handleOverlayClick = () => {
    if (currentForm === "login") setCurrentForm("register");
    else if (currentForm === "register") setCurrentForm("code");
    else setCurrentForm("login");
  };

  console.log("form", currentForm);

  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="relative w-1/2">
        <div className="absolute w-full h-full">
          {/* Form Login */}
          <div
            className={`transition-opacity duration-500 ${
              currentForm === "login" ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="p-10">
              <h2 className="text-2xl mb-4">Đăng nhập</h2>
              <form>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full mb-2 p-2 border"
                />
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  className="w-full mb-4 p-2 border"
                />
                <button className="w-full p-2 bg-blue-500 text-white">
                  Đăng nhập
                </button>
              </form>
            </div>
          </div>

          {/* Form Register */}
          <div
            className={`transition-opacity duration-500 ${
              currentForm === "register" ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="p-10">
              <h2 className="text-2xl mb-4">Đăng ký</h2>
              <form>
                <input
                  type="text"
                  placeholder="Tên"
                  className="w-full mb-2 p-2 border"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full mb-2 p-2 border"
                />
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  className="w-full mb-4 p-2 border"
                />
                <button className="w-full p-2 bg-green-500 text-white">
                  Đăng ký
                </button>
              </form>
            </div>
          </div>

          {/* Form Code */}
          <div
            className={`transition-opacity duration-500 ${
              currentForm === "code" ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="p-10">
              <h2 className="text-2xl mb-4">Nhập mã xác nhận</h2>
              <form>
                <input
                  type="text"
                  placeholder="Mã xác nhận"
                  className="w-full mb-4 p-2 border"
                />
                <button className="w-full p-2 bg-purple-500 text-white">
                  Xác nhận
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Right Overlay */}
      <div className="w-1/2 bg-gray-800 text-white flex items-center justify-center">
        <button
          onClick={handleOverlayClick}
          className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 transition"
        >
          Chuyển
        </button>
      </div>
    </div>
  );
};

export default LoginRegister;
