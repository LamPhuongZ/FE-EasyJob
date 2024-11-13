import './howItWorks.scss';
import { assetsIcon, assetsImage } from "../../../../assets/assets";

const HowItWorks = () => {
  return (
    <div className="howItWorks">
      <div className="howItWorks__title">
        <h1 className="title">
          quy trình của chúng tôi
        </h1>
        <div className="howItWorks__img">
          <img src={assetsIcon.VectorIcon} alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="howItWorks__content">
        <div className="flex justify-start">
          <div className="bg-white rounded-xl shadow-2xl w-[800px] h-[250px] pt-8 pb-6 px-8 relative text-[#37A3FF] z-50">
            <p className="text-9xl font-black opacity-15 absolute -top-20 -left-11">
              01
            </p>
            <div className="w-[800px] h-56 flex gap-10">
              <div className="w-64 h-52 ">
                <img src={assetsImage.How1Image} alt="" className="w-full h-full" />
              </div>
              <div className="flex gap-5 justify-center w-[450px] flex-col pb-10">
                <p className=" text-4xl font-bold leading-[50px]">
                  Đăng ký hoặc đăng nhập bằng{" "}
                  <img src={assetsImage.Google} alt="" className="inline-block w-10 h-10" />
                  mail
                </p>
                <div className="border-2 border-[#37A3FF] w-20"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-white rounded-xl shadow-2xl w-[800px] h-[250px] pt-8 pb-6 px-8 relative text-[#54BD95] z-40">
            <p className="text-9xl font-black opacity-15 absolute -top-20 -right-11">
              02
            </p>
            <div className="w-[800px] h-56 flex gap-10">
              <div className="w-64 h-52 ">
                <img src={assetsImage.How2Image} alt="" className="w-full h-full" />
              </div>
              <div className="flex gap-5 justify-center w-[450px] flex-col pb-10">
                <p className="text-4xl font-bold leading-[50px]">
                  Cập nhập thông tin bản thân
                </p>
                <div className="border-2 border-[#54BD95] w-20"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start ">
          <div className="bg-white rounded-xl shadow-2xl w-[800px] h-[250px] pt-8 pb-6 px-8 relative text-[#FFDC4D] z-30">
            <p className="text-9xl font-black opacity-15 absolute -top-20 -left-11">
              03
            </p>
            <div className="w-[800px] h-56 flex gap-10">
              <div className="w-60 h-52 ">
                <img src={assetsImage.How3Image} alt="" className="w-full h-full" />
              </div>
              <div className="flex gap-5 justify-center w-[450px] flex-col pb-10">
                <p className=" text-4xl font-bold leading-[50px]">
                  Khám phá tìm công việc mình muốn
                </p>
                <div className="border-2 border-[#FFDC4D] w-20"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-white rounded-xl shadow-2xl w-[800px] h-[250px] pt-8 pb-6 px-8 relative text-[#FFBF60] z-20">
            <p className="text-9xl font-black opacity-15 absolute -top-20 -right-11">
              04
            </p>
            <div className="w-[800px] h-56 flex gap-10">
              <div className="w-60 h-52 ">
                <img src={assetsImage.How4Image} alt="" className="w-full h-full" />
              </div>
              <div className="flex gap-5 justify-center w-[450px] flex-col pb-10">
                <p className="text-4xl font-bold leading-[50px]">
                  Xem thông tin chi tiết công việc
                </p>
                <div className="border-2 border-[#FFBF60] w-20"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start ">
          <div className="bg-white rounded-xl shadow-2xl w-[800px] h-[250px] pt-8 pb-6 px-8 relative text-[#54BD95] z-10">
            <p className="text-9xl font-black opacity-15 absolute -top-20 -left-11">
              05
            </p>
            <div className="w-[800px] h-56 flex gap-10">
              <div className="w-60 h-52 ">
                <img src={assetsImage.How5Image} alt="" className="w-full h-full" />
              </div>
              <div className="flex gap-5 justify-center w-[450px] flex-col pb-10">
                <p className=" text-4xl font-bold leading-[50px]">
                  Ứng tuyển khi thấy phù hợp
                </p>
                <div className="border-2 border-[#54BD95] w-20"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-white rounded-xl shadow-2xl w-[800px] h-[250px] pt-8 pb-6 px-8 relative text-[#FF5758] z-0">
            <p className="text-9xl font-black opacity-15 absolute -top-20 -right-11">
              06
            </p>
            <div className="w-[800px] h-56 flex gap-10">
              <div className="w-64 h-52 ">
                <img src={assetsImage.How6Image} alt="" className="w-full h-full" />
              </div>
              <div className="flex gap-5 justify-center w-[450px] flex-col pb-10">
                <p className="text-4xl font-bold leading-[50px]">
                  Hoàn thành mục tiêu ứng tuyển
                </p>
                <div className="border-2 border-[#FF5758] w-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
