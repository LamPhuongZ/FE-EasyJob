import { IoSearch } from "react-icons/io5";
import Button from "../../../../components/button/Button";
import { useState } from "react";
import { Province, useAddress } from "../../../../hooks/useAddress";
import { assetsImage } from "../../../../assets/assets";

export default function Banner() {
  const { provinces } = useAddress();
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="banner">
      <div className="banner__top !hidden  md:!flex md:!items-center">
        <div className="banner__left ">
          <img
            src={assetsImage.VolumeImage}
            alt="img-banner"
            className="w-full h-full "
          />
        </div>
        <div className="banner__content cssanimation typing ">
          <h1 className="text xl:!text-[50px] md:!text-[20px] ">
            Kết nối việc làm, Cơ hội mới, cuộc sống mới
          </h1>
        </div>
        <div className="banner__right  ">
          <img
            src={assetsImage.NoteImage}
            alt="img-banner"
            className="text-right w-full h-full mb-2 "
          />
        </div>
      </div>

      <div className="banner__group xl:!w-full !p-0">
        <div className="banner__search w-full">
          <div className="search">
            <IoSearch className="icon__search" style={{ fontSize: "24px" }} />
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="input__search !w-[50%] "
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <div className="line"></div>
          <select className="select__area bg-[transparent] w-[20%] !text-xs md:w-[30%] md:!text-lg">
            <option value="0">Tất cả địa điểm</option>
            {provinces?.map((province: Province, index: number) => (
              <option value={province.id} key={`${province.id}_${index}`}>
                {province.name}
              </option>
            ))}
          </select>
          <Button
            title={<p className="text-sm md:text-lg">Tìm kiếm</p>}
            className="btn__search !w-[30%] md:!w-[10%]"
            circle={false}
          />
        </div>

        <div className="popular__keywords">
          <div className="popular__keywords__group">
            <span className="title">Từ khóa phổ biến:</span>
            <div className="skills">
              <Button
                title={<a href="#searchItems"></a>}
                className="btn__jobSkill"
                circle={false}
                color="custom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
