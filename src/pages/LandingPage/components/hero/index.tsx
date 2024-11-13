import './hero.scss';
import { assetsImage } from '../../../../assets/assets';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__title">
        <p>Kết Nối Việc Làm,</p>
        <p>Cơ Hội Mới,</p>
        <p>Cuộc Sống Mới</p>
      </div>
      <div className="hero__img">
        <img src={assetsImage.HeroImage} alt="image-hero" />
      </div>
    </section>
  );
}
