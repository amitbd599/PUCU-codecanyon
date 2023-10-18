import React from "react";
import InfoPopover from "../childComponents/InfoPopover";

const ErrorPageEditComponent = () => {
  return (
    <>
      <div className="m-[20px] rounded-xl bg-[#36404A] p-[30px]">
        <div className="flex items-center gap-2">
          <p className="text-xl font-medium text-white">Error Info Edit</p>
          <InfoPopover img={"assets/images/popover/img-20.png"} />
        </div>

        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-4">
              <label className="text-base">Info Content Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Hading Text"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Hading Text Color"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Image CDN Link"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-[30px] ">
        <button className="btn">Save Change</button>
      </div>
    </>
  );
};

export default ErrorPageEditComponent;
