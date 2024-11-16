import './support.scss';
import { assetsIcon } from "../../../../assets/assets";

export default function Support() {
  const content = [
    {
      id: 1,
      src: assetsIcon.BriefcaseFillIcon,
      des: "Dễ dàng tìm việc làm",
    },
    {
      id: 2,
      src: assetsIcon.EaselFillIcon,
      des: "Giao diện thân thiện với người dùng",
    },
    { id: 3, src: assetsIcon.ShieldFillIcon, des: "Bảo mật thông tin khách hàng" },
  ];

  return (
    <section className="support">
      <div className="support__title">
        <h1>Tại sao chọn chúng tôi ?</h1>
        <img src={assetsIcon.VectorIcon} alt="vector" />
      </div>
      <div className="form-layout-col3 mt-12">
        {content.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col justify-center bg-white px-[47px] py-[110px] rounded-[20px] shadow-custom w-[380px] lg:h-[510px] md:h-[300px]"
            >
              <div className="flex flex-col gap-5 items-center">
                <img src={item.src} alt="icon-support" width={98} height={86} />
                <h1 className="text-4xl font-bold text-center capitalize">
                  {item.des}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
