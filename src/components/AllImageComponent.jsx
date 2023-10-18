import React from "react";
import { Toaster } from "react-hot-toast";
import ImageSpeedCall from "../childComponents/ImageSpeedCall";

const AllImageComponent = () => {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="m-[30px] rounded-xl bg-[#36404A] p-[30px]">
        <div className="flex items-center gap-2">
          <p className="text-xl font-medium text-white">
            View or Delete Or take CDN link
          </p>
        </div>

        <div className="mt-[16px]">
          <div className="grid grid-cols-12 gap-[20px]">
            {[...Array(10)].map((item, index) => (
              <div className="col-span-2">
                <div className="relative">
                  <img
                    className="h-[250px] w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                    src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                    alt="nature "
                  />
                  <div className="absolute bottom-[10px] right-[10px]">
                    <ImageSpeedCall link="https://google.com" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllImageComponent;
