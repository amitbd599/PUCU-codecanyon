import React from "react";
import Fade from "react-reveal/Fade";

const ErrorComponent = () => {
  const dark = localStorage.getItem("theme");
  return (
    <section className="mt-[60px] ">
      <Fade>
        <div className="rounded-xl bg-white p-[30px] dark:bg-card">
          <div>
            <h1 className="text-[62px] text-btn dark:text-white">
              Sorry Page Not Found<span className="text-theme">!</span>
            </h1>
            <p className="text-[14px] text-text">
              The Page You Are Looking For Is Not Available Or Doesn’t Belong To
              This Website!{" "}
            </p>
            <div className="mb-[30px] mt-[30px]">
              <div className="flex justify-center">
                <img
                  src={
                    dark === "dark"
                      ? "/assets/images/error.png"
                      : "/assets/images/error-dark.png"
                  }
                  alt=""
                  className="w-[700px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default ErrorComponent;
