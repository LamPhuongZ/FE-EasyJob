import "./SurveySkillPage.scss";
import { assetsImage } from "../../assets/assets";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SkillSchema } from "../../utils/validation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";

const dataSkills = [
  { id: "1", skill: "Giao hàng" },
  { id: "2", skill: "Đóng gói hàng hóa" },
  { id: "3", skill: "Thợ phụ xây dựng" },
  { id: "4", skill: "Phát tờ rơi" },
  { id: "5", skill: "Trông giữ xe" },
  { id: "6", skill: "Trông giữ xe" },
  { id: "7", skill: "Trông giữ xe" },
  { id: "8", skill: "Trông giữ xe" },
  { id: "9", skill: "Trông giữ xe" },
  { id: "10", skill: "Trông giữ xe" },
  { id: "11", skill: "Trông giữ xe" },
  { id: "12", skill: "Trông giữ xe" },
];

export default function SurveySkillPage() {
  const {
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(SkillSchema),
    defaultValues: {
      skill: []
    }
  });

  const [selectedSkills, setSelectedSkills] = useState<number[]>([]);

  const handleSendSkill = (values: { skill?: number[] }) => {
    console.log("Selected skills:", values); // Send selected skills
    toast.success("Cập nhật thành công");
    reset();
  };

  const handleSelectedSkill = (skillId: number) => {
    setSelectedSkills((prevSkills) => {
      if (prevSkills.includes(skillId)) {
        return prevSkills.filter((id) => id !== skillId); // Remove from selected
      } else {
        return [...prevSkills, skillId]; // Add to selected
      }
    });
  };

  useEffect(() => {
    console.log("Selected skills:", selectedSkills); // Send selected skills
    setValue("skill", selectedSkills);
  }, [selectedSkills]);

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message);
    }
  }, [errors]);

  return (
    <section className="surveySkill">
      <div className="card">
        <Link to={"/"} className="logo">
          <img src={assetsImage.LogoCompany} alt="logo-company" />
        </Link>

        <div className="card__title">
          <h1 className="title">Kỹ năng</h1>
          <p className="description">Vui lòng chọn kỹ năng của bạn để thông tin được đầy đủ</p>
        </div>

        <form className="form" onSubmit={handleSubmit(handleSendSkill)}>
          <div className="card__skill">
            {dataSkills?.map((skill, index) => (
              <div className="skills" key={`${skill.id}_${index}`}>
                <Button
                  title={skill.skill}
                  circle={false}
                  color="custom"
                  className={`btn__jobSkill ${
                    selectedSkills.includes(~~skill.id) ? "active" : ""
                  }`}
                  onClick={() => handleSelectedSkill(~~skill.id)}
                />
              </div>
            ))}
          </div>

          <Button
            type="submit"
            title="Cập nhật kỹ năng"
            circle={false}
            className="w-full h-16 mt-[126px]"
          />
        </form>
      </div>
    </section>
  );
}
