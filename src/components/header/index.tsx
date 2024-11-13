import { Link, useNavigate } from "react-router-dom";
import Button from "../button/Button";
// import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
// import { LuUserCircle2 } from "react-icons/lu";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { assetsImage } from "../../assets/assets";

export default function Header() {
  const navigate = useNavigate();

  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const itemsProfile = [
  //   {
  //     key: "1",
  //     style: { background: "none" },
  //     label: (
  //       <button
  //         onClick={() => {
  //           navigate("/profile");
  //         }}
  //       >
  //         <h1 className="text-xl flex items-center gap-2 p-3 hover:bg-green-500 w-full hover:text-white rounded transition">
  //           <LuUserCircle2 className="text-xl" />
  //           Trang cá nhân
  //         </h1>
  //       </button>
  //     ),
  //   },
  // ];

  // const itemsHeader: MenuProps["items"] = [
  //   {
  //     label: (
  //       <>
  //         {token && isEmployer ? (
  //           <Link to="/form-application">
  //             <Button
  //               title="Đăng bài"
  //               color="custom"
  //               className="bg-[#2EE498] w-40 !text-xl"
  //               circle={false}
  //             />
  //           </Link>
  //         ) : (
  //           <li>
  //             <Link
  //               to="/list-job/:jobId?section=listJob"
  //               onClick={() => handleScrollToSection}
  //               className="!text-xl"
  //             >
  //               Tìm việc
  //             </Link>
  //           </li>
  //         )}
  //       </>
  //     ),
  //     key: "0",
  //   },
  //   {
  //     label: (
  //       <>
  //         <Link
  //           to="/policy-page?section=policy"
  //           onClick={() => handleScrollToSection}
  //           className="!text-xl"
  //         >
  //           Chính sách
  //         </Link>
  //       </>
  //     ),
  //     key: "1",
  //   },

  //   {
  //     label: (
  //       <>
  //         <Link
  //           to="/landing-page?section=about"
  //           onClick={() => handleScrollToSection}
  //           className="!text-xl"
  //         >
  //           Về chúng tôi
  //         </Link>
  //       </>
  //     ),
  //     key: "2",
  //   },
  //   {
  //     type: "divider",
  //   },
  //   {
  //     label: (
  //       <>
  //         <Button
  //           title="Đăng nhập / Đăng ký"
  //           color="delete"
  //           className="btn__login"
  //           onClick={() => navigate("/login")}
  //           circle={false}
  //         />
  //         {/* {!userProfile ? (
  //           <Button
  //             title="Đăng nhập / Đăng ký"
  //             color="delete"
  //             className="btn__login"
  //             onClick={() => navigate("/login")}
  //             circle={false}
  //           />
  //         ) : (
  //           <Dropdown menu={{ items: itemsProfile }}>
  //             <div className="flex items-center gap-2">
  //               <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
  //                 <img
  //                   src={
  //                     userProfile.avatar || "https://via.placeholder.com/150"
  //                   }
  //                   alt="avatar"
  //                   className="w-full"
  //                   loading="lazy"
  //                 />
  //               </div>
  //               <a className="cursor-pointer max-w-[180px]">
  //                 <Space
  //                   className="font-bold leading-5 overflow-hidden "
  //                   style={{ maxWidth: "180px" }}
  //                 >
  //                   <p className="whitespace-nowrap !text-ellipsis">
  //                     {userProfile.fullname}
  //                   </p>
  //                 </Space>
  //               </a>
  //             </div>
  //           </Dropdown>
  //         )
  //         } */}
  //       </>
  //     ),
  //     key: "3",
  //   },
  // ];

  // const getMe = async () => {
  //   const actionAPI = await getProfileAPI();
  //   dispatch(actionAPI);
  // };

  // useEffect(() => {
  //   //reset Token
  //   if (!token) {
  //     return;
  //   }

  //   getMe();
  // }, []);

  // Dropdown menu header button

  return (
    <>
      <header className="header w-full !hidden sm:!block">
        <div className="header__group">
          <Link to="/" className="link__logo">
            <img
              src={assetsImage.LogoCompany}
              alt="icon-logo"
              width={40}
              height={40}
              loading="lazy"
            />
            <h1 className="title">Việc làm dễ</h1>
          </Link>
          <nav className="nav">
            <ul className="menu">
              {/* {token && isEmployer ? (
                <Link to="/form-application">
                  <Button
                    title="Đăng bài"
                    color="custom"
                    className="bg-[#2EE498] w-40"
                    circle={false}
                  />
                </Link>
              ) : (
                <li>
                  <Link
                    to="/list-job/:jobId?section=listJob"
                    onClick={() => handleScrollToSection}
                  >
                    Tìm việc
                  </Link>
                </li>
              )} */}
              <li>
                <Link
                  to="/list-job/:jobId?section=listJob"
                  onClick={() => handleScrollToSection}
                >
                  Tìm việc
                </Link>
              </li>
              <li>
                <Link
                  to="/policy-page?section=policy"
                  onClick={() => handleScrollToSection}
                >
                  Chính sách
                </Link>
              </li>
              <li>
                <Link
                  to="/landing-page?section=about"
                  onClick={() => handleScrollToSection}
                >
                  Về chúng tôi
                </Link>
              </li>
            </ul>
            <div className="btn__auth">
              <Button
                title="Đăng nhập / Đăng ký"
                color="custom"
                className="btn__login"
                onClick={() => navigate("/login")}
                circle={false}
              />
              {/* {!userProfile ? (
                <Button
                  title="Đăng nhập / Đăng ký"
                  color="custom"
                  className="btn__login"
                  onClick={() => navigate("/login")}
                  circle={false}
                />
              ) : (
                <Dropdown menu={{ items: itemsProfile }}>
                  <div className="flex items-center gap-2">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                      <img
                        src={
                          userProfile.avatar ||
                          "https://via.placeholder.com/150"
                        }
                        alt="avatar"
                        className="w-full"
                        loading="lazy"
                      />
                    </div>
                    <a className="cursor-pointer max-w-[180px]">
                      <Space
                        className="font-bold leading-5 overflow-hidden "
                        style={{ maxWidth: "180px" }}
                      >
                        <p className="whitespace-nowrap !text-ellipsis">
                          {userProfile.fullname}
                        </p>
                      </Space>
                    </a>
                  </div>
                </Dropdown>
              )} */}
            </div>
          </nav>
        </div>
      </header>
      <header className="header w-full !flex sm:!hidden  gap-3  items-center justify-between">
        <div>
          <Link to="/" className="link__logo flex items-center gap-2">
            <img
              src={assetsImage.LogoCompany}
              alt="icon-logo"
              width={40}
              height={40}
              loading="lazy"
            />
            <h1 className="title font-bold text-2xl">Việc làm dễ</h1>
          </Link>
        </div>
        <Dropdown
          className="self-start p-3 text-center"
          // menu={{ items: itemsHeader }}
          trigger={["click"]}
        >
          <a
            className="!bg-[#6da2f139] p-3 rounded "
            onClick={(e) => e.preventDefault()}
          >
            <Space>
              <AiOutlineUnorderedList />
            </Space>
          </a>
        </Dropdown>
      </header>
    </>
  );
}
