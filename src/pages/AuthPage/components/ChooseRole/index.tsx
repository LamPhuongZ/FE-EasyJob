import "./chooseRole.scss";
import { assetsImage } from "../../../../assets/assets";
import { Button } from "../../../../components/button";

type Props = {
  toggleActive: () => void;
  onSelectRole: (role: string) => void;
};

export default function ChooseRole({ toggleActive, onSelectRole }: Props) {
  return (
    <div className="chooseRole">
      <img src={assetsImage.ChooseRoleImage} alt="choose-role" loading="lazy" />
      <p className="question">
        Bạn đã có tài khoản?{" "}
        <Button
          title="Đăng nhập"
          onClick={toggleActive}
          className="link"
          circle={false}
          color="custom"
        />
      </p>

      <div className="group__choose">
        <Button
          title="Bạn là nhà tuyển dụng"
          color="custom"
          className="btn__recruiter"
          circle={false}
          onClick={() => onSelectRole("Recruiter")}
        />
        <Button
          title="Bạn là ứng viên tìm việc"
          color="custom"
          className="btn__jobSeeker"
          circle={false}
          onClick={() => onSelectRole("JobSeeker")}
        />
      </div>
    </div>
  );
}
