import "./modalAuth.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { assetsImage } from "../../assets/assets";
import Login from "./components/Login";
import Register from "./components/Register";

export default function ModalAuth() {
  const [isToggleActive, setIsToggleActive] = useState<boolean>(true);
  const [isOverlayActive, setIsOverlayActive] = useState<boolean>(true);

  const handleToggleActive = () => {
    setIsToggleActive((prev) => !prev);
    setIsOverlayActive((prev) => !prev);
    console.log("isToggleActive:", !isToggleActive);
  };

  // Lớp cho overlay dựa trên trạng thái
  const overlayClass = isOverlayActive
    ? isToggleActive
      ? "overlay overlay-right" // Khi overlay cần di chuyển sang trái
      : "overlay overlay-left" // Khi overlay cần di chuyển sang phải
    : "overlay"; // Khi overlay không hiển thị

  return (
    <div className="modal__auth">
      <div className="auth__group">
        <div className="components__auth">
          <Login toggleActive={handleToggleActive} />
          <Register toggleActive={handleToggleActive} />
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
