import "./modalAuth.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { assetsImage } from "../../assets/assets";
import Login from "./components/Login";
import ChooseRole from "./components/ChooseRole";
import RegisterRecruiter from "./components/Register-Recruiter";
import RegisterJobSeeker from "./components/Register-JobSeeker";

export default function ModalAuth() {
  const [isToggleActive, setIsToggleActive] = useState<boolean>(true);
  const [isOverlayActive, setIsOverlayActive] = useState<boolean>(true);
  const [selectedForm, setSelectedForm] = useState<string>("chooseRole");

  const handleToggleActive = () => {
    setIsToggleActive((prev) => !prev);
    setIsOverlayActive((prev) => !prev);

    if (!isToggleActive) {
      setSelectedForm("chooseRole");
    }
  };

  // Lớp cho overlay dựa trên trạng thái
  const overlayClass = isOverlayActive
    ? isToggleActive
      ? "overlay overlay-right" // Khi overlay cần di chuyển sang phải
      : "overlay overlay-left" // Khi overlay cần di chuyển sang trái
    : "overlay"; // Khi overlay không hiển thị

  return (
    <div className="modal__auth">
      <div className="auth__group">
        <div className="components__auth">
          <Login toggleActive={handleToggleActive} />
          <div
            className={`${
              selectedForm === "chooseRole"
                ? "animate-slideIn"
                : "animate-slideOut hidden"
            }`}
          >
            <ChooseRole
              toggleActive={handleToggleActive}
              onSelectRole={setSelectedForm}
            />
          </div>

          <div
            className={`${
              selectedForm === "Recruiter"
                ? "animate-slideIn"
                : "animate-slideOut hidden"
            }`}
          >
            <RegisterRecruiter toggleActive={handleToggleActive} />
          </div>

          <div
            className={`${
              selectedForm === "JobSeeker"
                ? "animate-slideIn"
                : "animate-slideOut hidden"
            }`}
          >
            <RegisterJobSeeker toggleActive={handleToggleActive} />
          </div>
        </div>
        <div className={overlayClass}>
          <NavLink className="nav__link" to={"/"}>
            <img src={assetsImage.LogoCompany} alt="" className="logo" />
            <p>
              Easy J
              <img
                src={assetsImage.LogoCompany}
                alt=""
                className="logo__title"
              />
              b
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
