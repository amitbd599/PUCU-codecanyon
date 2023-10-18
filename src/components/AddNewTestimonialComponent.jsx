import { Option, Select } from "@material-tailwind/react";
import React from "react";
import { useState } from "react";

const AddNewTestimonialComponent = () => {
  const [editorData, setEditorData] = useState("");
  console.log(editorData);
  return (
    <>
      <div className="m-[20px] rounded-xl bg-[#36404A] p-[30px]">
        <div className="flex items-center gap-2">
          <p className="text-xl font-medium text-white">Add New Testimonial</p>
        </div>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Client Name"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Feature Image CDN Link"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <div className="w-72">
                  <Select label="Select Star Version" className="text-white">
                    <Option>1 Star</Option>
                    <Option>2 Star</Option>
                    <Option>3 Star</Option>
                    <Option>4 Star</Option>
                    <Option>5 Star</Option>
                  </Select>
                </div>
              </div>
              <div className="mb-[50px] flex gap-3">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Description"
                  className=" w-full rounded-lg border border-border bg-transparent p-3 outline-none placeholder:text-sm"
                ></textarea>
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

export default AddNewTestimonialComponent;
