import './feedback.scss';
import { assetsIcon, assetsImage } from '../../../../assets/assets';

const feedbackData = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    author: "Lương Văn A",
    image: assetsImage.AuthorImage,
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    author: "Lương Văn A",
    image: assetsImage.AuthorImage,
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    author: "Lương Văn A",
    image: assetsImage.AuthorImage,
  },
];

export default function Feedback() {
  return (
    <section className="feedback">
      <div className="feedback__group">
        <h2 className="title">
          Họ nói về chúng tôi
          <span className="line"></span>
          <img
            src={assetsIcon.StarFourFillIcon}
            alt="icon-star-four-fill"
            width={30}
            height={30}
          />
        </h2>
        <div className="feedback__cards">
          {feedbackData.map((item, index) => (
              <div
                key={index}
                className="feedback__card"
              >
                <div className="feedback__cardItem">
                  <p className="feedback__text">{item.text}</p>
                  <div className="feedback__cardImg">
                    <img
                      src={item.image}
                      alt={item.author}
                    />
                    <p className="feedback__author">
                      {item.author}
                    </p>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
