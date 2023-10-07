import React from "react";
import { Link } from "react-router-dom";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import Fade from "react-reveal/Fade";

const HomeComponent = () => {
  const dark = localStorage.getItem("theme");

  return (
    <section className=" mt-[60px] ">
      {/* About Intro */}
      <div className="rounded-xl bg-white p-[30px] dark:bg-card">
        <Fade>
          <p className="text-[18px] text-text">
            <span className="dark:text-theme">Hi!</span> There I’m
          </p>
          <h2 className="mt-[20px] text-[50px] leading-[60px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
            Professional <span className="text-theme">Front-end</span> <br />{" "}
            Web Developer
          </h2>
          <p className="mt-[15px] text-text">
            I am a Professional Front-end Web Developer and have been working in
            this field for more than 4 years. We are highly experts in
            converting PSD to HTML, PSD to Bootstrap, Figma to HTML, Sketch to
            HTML, and Xd to HTML ,CSS responsive design and pixel-perfect using
            bootstrap latest version, jQuery, JavaScript. I always take care of
            code with SEO friendly.
          </p>
        </Fade>
      </div>

      {/* About US */}
      <div className="mt-[30px] ">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="col-span-12 md:col-span-5">
            <div className="rounded-xl bg-white p-[30px] dark:bg-card">
              <Fade>
                <img
                  src={
                    dark === "dark"
                      ? "/assets/images/logo.svg"
                      : "/assets/images/logo-dark.svg"
                  }
                  alt=""
                  className="mt-[10px]"
                />
                <div className="mt-[20px]">
                  <p className="text-[14px] text-text dark:text-white">
                    More Specialized
                  </p>
                  <Link to={"/about"}>
                    <h3 className="mt-[5px] inline-block text-[26px] tracking-[6px] text-btn dark:text-white">
                      About Us
                    </h3>
                  </Link>
                </div>
              </Fade>
            </div>

            <div>
              <div className="mt-[30px] rounded-xl bg-white p-[30px] dark:bg-card">
                <Fade>
                  <div className="flex gap-[20px]">
                    <button className="boxShadow rounded-lg p-[20px] dark:bg-btn dark:shadow-none">
                      <img src="/assets/images/icon/figma.png" alt="" />
                    </button>
                    <button className="boxShadow rounded-lg p-[20px] dark:bg-btn dark:shadow-none ">
                      <img src="/assets/images/icon/react.png" alt="" />
                    </button>
                    <button className="boxShadow rounded-lg p-[20px] dark:bg-btn dark:shadow-none ">
                      <img src="/assets/images/icon/php.png" alt="" />
                    </button>
                  </div>

                  <div className="mt-[30px]">
                    <p className="text-[14px] text-text dark:text-white">
                      Specialization
                    </p>
                    <Link to={"/service"}>
                      <h3 className="mt-[5px] inline-block text-[26px] tracking-[6px] text-btn dark:text-white">
                        Services Offer{" "}
                      </h3>
                    </Link>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="mt-[30px] rounded-xl bg-white p-[30px] dark:bg-card">
              <Fade>
                <div className="grid grid-cols-12 ">
                  <div className="col-span-6">
                    <h2 className="text-[50px] font-semibold text-btn dark:text-theme">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <>
                              <CountUp delay={0} start={0} end={12} />+
                            </>
                          )
                        }
                      </TrackVisibility>
                    </h2>
                    <p className="text-text dark:text-white">
                      Years of <br /> Experience
                    </p>
                  </div>
                  <div className="col-span-6">
                    <h2 className="text-[50px] font-semibold text-btn dark:text-theme">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <>
                              <CountUp delay={0} start={0} end={350} />+
                            </>
                          )
                        }
                      </TrackVisibility>
                    </h2>
                    <p className="text-text dark:text-white">
                      Project <br /> Completed
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="rounded-xl bg-white p-[30px] dark:bg-card">
              <Fade>
                <div className="flex justify-center gap-[20px]">
                  <div className="overflow-hidden rounded-lg">
                    <div>
                      <img
                        src="/assets/images/show/image-1.png"
                        alt=""
                        className="transition-all duration-300 hover:scale-[110%]"
                      />
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <div>
                      <img
                        src="/assets/images/show/image-2.png"
                        alt=""
                        className="transition-all duration-300 hover:scale-[110%]"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-[30px]">
                  <p className="text-[14px] text-text dark:text-white">
                    Showcase View
                  </p>
                  <Link to={"/projects"}>
                    <h3 className="mt-[5px] inline-block text-[26px] tracking-[6px] text-btn dark:text-white">
                      Projects
                    </h3>
                  </Link>
                </div>
              </Fade>
            </div>
            <div className="mt-[30px] grid grid-cols-12 gap-[30px]">
              <div className="col-span-6 rounded-xl bg-theme px-[30px] py-[25px]">
                <Fade>
                  <p className="text-[14px] text-btn">Visit Our Blog</p>
                  <Link to={"/blog"}>
                    <h3 className="mt-[5px] inline-block text-[26px] tracking-[6px] text-btn">
                      Blog
                    </h3>
                  </Link>
                </Fade>
              </div>
              <div className="hero-pattern col-span-6 rounded-xl bg-white px-[30px]	py-[25px] dark:bg-card">
                <Fade>
                  <p className="text-[14px] text-text dark:text-white">
                    Let’s work
                  </p>
                  <Link to={"/contact"}>
                    <h3 className="mt-[5px] inline-block text-[26px] tracking-[6px] text-btn dark:text-white">
                      Contact
                    </h3>
                  </Link>
                </Fade>
              </div>
            </div>
            <div className="mt-[30px] ">
              <div
                className="relative flex h-[185px] items-end rounded-xl bg-cover bg-local bg-center bg-no-repeat  px-[30px] py-[30px]"
                style={{
                  backgroundImage: `url(${"/assets/images/show/image-4.png"})`,
                }}
              >
                <div>
                  <Fade>
                    <p className="text-[14px] text-white">What Client Says?</p>
                    <Link to={"/testimonial"}>
                      <h3 className="mt-[5px] text-[26px] tracking-[6px] text-white">
                        Testimonials
                      </h3>
                    </Link>
                  </Fade>
                  <img
                    className="absolute right-[30px] top-[50px] z-10"
                    src="/assets/images/icon/shape.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
