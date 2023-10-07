import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
import ReactTyped from "react-typed";
const MasterLayout = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const dark = localStorage.getItem("theme"); //"dark"

  const darkControl = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.removeItem("theme");
      window.location.reload();
    } else {
      localStorage.setItem("theme", "dark");
      window.location.reload();
    }
  };

  const sidebarControl = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className={dark === "dark" ? "dark" : "bg-bodyWhite"}>
        {/* Header Section */}
        <header>
          <div className=" container mx-auto pt-[30px] ">
            <div className=" flex justify-between rounded-[10px] bg-white py-[30px] dark:bg-card ">
              <div className="logo flex items-center px-[30px]">
                <Link to={"/"}>
                  <img
                    src={
                      dark === "dark"
                        ? "/assets/images/logo.svg"
                        : "/assets/images/logo-dark.svg"
                    }
                    alt=""
                  />
                </Link>
              </div>
              <menu className="hidden items-center md:flex">
                <ul className="flex  gap-4">
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive
                          ? "font-semibold text-theme"
                          : "font-semibold text-text"
                      }
                      to={"/"}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive
                          ? "font-semibold text-theme"
                          : "font-semibold text-text"
                      }
                      to={"/about"}
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="w-[100px]">
                    <NavLink
                      className={(navData) =>
                        navData.isActive
                          ? "font-semibold text-theme"
                          : "font-semibold text-text"
                      }
                      to={"/contact"}
                    >
                      <ReactTyped
                        strings={[" Hire Me!", "Need Help?", "Contact Now"]}
                        typeSpeed={200}
                        backSpeed={100}
                        backDelay={1}
                        loop
                        smartBackspace
                      />
                    </NavLink>
                  </li>
                </ul>
              </menu>
              <div>
                <div className="flex items-center gap-4	 px-[30px]">
                  <button
                    className="hidden items-center gap-3 md:flex "
                    onClick={darkControl}
                  >
                    <p>
                      <span className="text-btn dark:text-theme ">Dark</span>
                      <span className="text-btn dark:text-white"> / </span>
                      <span className="text-theme dark:text-white">Light</span>
                    </p>
                    <div>
                      <img src="/assets/images/icon/sun.svg" alt="" />
                    </div>
                  </button>
                  <button
                    onClick={sidebarControl}
                    className="rounded-full border border-[#919295] p-[10px] text-[25px] "
                  >
                    <BiMenuAltRight className="text-text dark:text-text" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* sidebar intro */}
        <div
          className={
            sidebar
              ? "sidebar fixed left-0 top-0 z-[999] h-full w-full bg-btn/60 transition-all duration-500"
              : "sidebar fixed left-[100%] top-0 z-[999]  h-full w-full bg-btn/60 transition-all duration-500"
          }
        >
          <div className="ml-auto h-full min-h-[750px] w-[300px] bg-white px-[30px] pt-[60px] dark:bg-card md:min-h-[700px]">
            <div className="relative flex justify-center">
              <button
                onClick={sidebarControl}
                className="group absolute left-[-78px] rounded-lg bg-white px-[15px]  py-[10px] text-[26px] dark:bg-card"
              >
                <FaXmark className="text-btn transition-all duration-500 group-hover:rotate-90  dark:text-white dark:group-hover:text-theme" />
              </button>
              <div>
                <img
                  src={
                    dark === "dark"
                      ? "/assets/images/logo.svg"
                      : "/assets/images/logo-dark.svg"
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="my-[30px] border-t border-[#ddd] dark:border-btn"></div>
            <nav className="mt-[30px]">
              <ul>
                <li className="text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme dark:text-theme"
                        : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                    }
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme dark:text-theme"
                        : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                    }
                    to={"/about"}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className=" text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme dark:text-theme"
                        : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                    }
                    to={"/projects"}
                  >
                    Projects
                  </NavLink>
                </li>
                <li className=" text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme dark:text-theme"
                        : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                    }
                    to={"/blog"}
                  >
                    Blog
                  </NavLink>
                </li>
                <li className=" text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme dark:text-theme"
                        : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                    }
                    to={"/service"}
                  >
                    Services
                  </NavLink>
                </li>
                <li className=" text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme dark:text-theme"
                        : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                    }
                    to={"/testimonial"}
                  >
                    Testimonial
                  </NavLink>
                </li>
                <li className=" text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme dark:text-theme"
                        : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                    }
                    to={"/contact"}
                  >
                    Contact
                  </NavLink>
                </li>
                <li className=" text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme dark:text-theme"
                        : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                    }
                    to={"/error"}
                  >
                    Error
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="my-[30px] border-t border-[#ddd] dark:border-btn"></div>
            <button
              onClick={darkControl}
              className="inline-block cursor-pointer"
            >
              <div className="flex  items-center gap-4 md:hidden">
                <div>
                  <p>
                    <span className="text-btn dark:text-theme ">Dark</span>
                    <span className="text-btn dark:text-white"> / </span>
                    <span className="text-theme dark:text-white">Light</span>
                  </p>
                </div>
                <div>
                  <img src="/assets/images/icon/sun.svg" alt="" />
                </div>
              </div>
            </button>
            <div className="contact mt-[40px] pb-[20px] md:mt-[0px]">
              <div>
                <p className="text-[20px] font-semibold text-btn dark:text-white">
                  Follow Me:
                </p>

                <div className="mt-[20px] flex gap-3">
                  <Link to={"/"}>
                    <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                      <FaFacebookF />
                    </button>
                  </Link>
                  <Link to={"/"}>
                    <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                      <FaTwitter />
                    </button>
                  </Link>
                  <Link to={"/"}>
                    <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                      <FaLinkedinIn />
                    </button>
                  </Link>
                  <Link to={"/"}>
                    <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                      <FaInstagram />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Info Card Section */}
        <section>
          <div className="container mx-auto">
            <div className="grid grid-cols-12 ">
              <div className="col-span-12 lg:col-span-3 ">
                <div className="info-card mt-[60px]">
                  <div className="rounded-[20px] bg-white px-[45px] py-[40px] dark:bg-card">
                    <Fade>
                      <div className="relative flex justify-center ">
                        <img
                          src="/assets/images/show/ProfileImage.png"
                          alt=""
                          className="w-[200px]"
                        />
                        <img
                          src="/assets/images/show/underline.svg"
                          alt=""
                          className="absolute bottom-0"
                        />
                      </div>
                    </Fade>

                    <div>
                      <div className="mt-[25px]">
                        <Fade>
                          <div className=" text-center">
                            <h3 className="text-[24px] text-btn dark:text-white">
                              Hy! I’m
                              <span className="text-theme"> Alex Jhohan</span>
                            </h3>
                            <p className="text-btn dark:text-white">
                              JavaScript Developer
                            </p>
                            <p className="mt-[25px] text-[14px] text-btn dark:text-white">
                              admin@demo.com
                            </p>
                            <p className="mt-1 text-[14px] text-btn dark:text-white">
                              +88 889-859-66
                            </p>
                            <div className="mt-[30px] flex justify-center gap-3">
                              <Link to={"/"}>
                                <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                                  <FaFacebookF />
                                </button>
                              </Link>
                              <Link to={"/"}>
                                <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                                  <FaTwitter />
                                </button>
                              </Link>
                              <Link to={"/"}>
                                <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                                  <FaLinkedinIn />
                                </button>
                              </Link>
                              <Link to={"/"}>
                                <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                                  <FaInstagram />
                                </button>
                              </Link>
                            </div>
                            <div className="mt-[30px]">
                              <Link
                                to="/contact"
                                className="block rounded-full border-2 border-theme bg-theme py-[10px] font-medium  text-btn transition-all duration-300 dark:hover:bg-transparent dark:hover:text-theme"
                              >
                                Hire Me!
                              </Link>
                            </div>
                            <div className="mt-[20px]">
                              <a
                                download
                                href="assets/pdf/Resume-of-Amit-Biswas-MERN.pdf"
                                className="block rounded-full border-2 border-btn bg-btn py-[10px] font-medium text-white transition-all duration-300  dark:hover:bg-transparent"
                              >
                                Download CV
                              </a>
                            </div>
                          </div>
                        </Fade>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-9 lg:ml-[30px]">
                <div className="main__body">{props.children}</div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer Section */}
        <footer>
          <Fade>
            <div className="container mx-auto mt-[60px] flex justify-center pb-[40px]">
              <div>
                <p className="text-center text-text">
                  Copyright <span className="text-theme">pucu</span> ©2023. All
                  rights reserved
                </p>
                <div className="mt-[20px] flex justify-center text-center">
                  <img
                    src={
                      dark === "dark"
                        ? "/assets/images/logo.svg"
                        : "/assets/images/logo-dark.svg"
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Fade>
        </footer>
      </div>
    </>
  );
};

export default MasterLayout;
