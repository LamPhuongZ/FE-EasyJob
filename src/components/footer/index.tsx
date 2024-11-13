import { Link } from "react-router-dom";
import { assetsIcon, assetsImage } from "../../assets/assets";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__detail">
        <div className="footerLine">
          <div className="footerLine__left">
            <img
              src={assetsImage.LogoCompany}
              alt="Company Logo"
              className="h-10"
              loading="lazy"
            />
            <h1 className="title">Việc Làm Dễ</h1>
          </div>
          <div className="footerLine__right">
            <Link to={""}>
              <img
                src={assetsImage.Facebook}
                alt="Facebook Logo"
                className="h-8"
                loading="lazy"
              />
            </Link>
            <Link to={""}>
              <img
                src={assetsImage.Instagram}
                alt="Instagram Logo"
                className="h-8"
                loading="lazy"
              />
            </Link>
            <Link to={""}>
              <img
                src={assetsImage.Twitter}
                alt="Twitter Logo"
                className="h-8"
                loading="lazy"
              />
            </Link>
          </div>
        </div>
        <hr className="line" />
        <div className="footer__content">
          <div className="footer__col1">
            <h3 className="title">Về chúng tôi</h3>
            <div className="footer__col1__detail">
              <Link to={""} className="link">
                Giới thiệu
              </Link>
              <Link to={""} className="link">
                Chính sách
              </Link>
              <Link to={""} className="link">
                Điều khoản dịch vụ
              </Link>
              <Link to={""} className="link">
                Lợi ích
              </Link>
            </div>
          </div>
          <div className="footer__col2">
            <h3 className="title">Khám phá</h3>
            <div className="footer__col2__detail">
              <Link to={""} className="link">
                Tính năng
              </Link>
              <Link to={""} className="link">
                Liên hệ
              </Link>
              <Link to={""} className="link">
                Phát triển
              </Link>
            </div>
          </div>
          <div className="footer__col3">
            <h3 className="title">Liên hệ</h3>
            <div className="footer__col3__detail">
              <div className="phone-detail flex gap-2">
                <img src={assetsIcon.PhoneIcon} alt="icon-phone" loading="lazy" />
                <a href="tel:+84867133779" className="font-semibold">
                  (+84) 86 713 3779
                </a>
              </div>
              <div className="address-detail flex gap-2">
                <img src={assetsIcon.AddressIcon} alt="icon-address" loading="lazy" />
                <p className="font-semibold">Quận 7, Hồ Chí Minh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
