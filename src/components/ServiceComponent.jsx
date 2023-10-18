import React from "react";
import { FaCaretRight } from "react-icons/fa6";
import Service from "../script/Service";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import Fade from "react-reveal/Fade";

const ServiceComponent = () => {
  return (
    <section className=" mt-[60px] ">
      {/* Service Intro */}
      <div className="rounded-xl bg-white px-[20px] py-[40px] dark:bg-card lg:p-[40px]">
        <div>
          <Fade>
            <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
              Our Best Service<span className="text-theme">!</span>
            </h1>
            <p className="text-[14px] text-text">
              The imperative for integrated, expansive, and seamless digital
              experiences is fueling software product design and development
              across organizations at an unprecedented scale. These demands
              require capabilities to imagine, build, and run digital products
              and services for new and existing.
            </p>
          </Fade>

          <div className="mt-[60px]">
            <div className="grid grid-cols-12 md:gap-[30px]">
              {Service.map((item, index) => (
                <div
                  className="col-span-12 mb-[40px] md:col-span-6 md:mb-0"
                  key={index}
                >
                  <div className="boxShadow rounded-xl bg-white p-[30px] dark:bg-btn dark:shadow-none">
                    <Fade>
                      <div>
                        <img src={item.img} alt="" className="w-[60px]" />
                      </div>
                      <div className="mt-[20px]">
                        <h2 className="text-[24px] text-btn dark:text-white">
                          {item.title}
                        </h2>
                        <ul className="mt-[20px] grid gap-[16px]">
                          {item.elements.map((element, item) => (
                            <li
                              className="flex items-start text-text"
                              key={item}
                            >
                              <FaCaretRight className="mr-[8px] mt-[4px]" />{" "}
                              {element}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Fade>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
