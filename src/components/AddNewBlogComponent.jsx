import React from "react";
import { useState } from "react";
import Editor from "../childComponents/Editor";

const AddNewBlogComponent = () => {
  const [editorData, setEditorData] = useState("");
  console.log(editorData);
  return (
    <>
      <div className="m-[20px] rounded-xl bg-[#36404A] p-[30px]">
        <div className="flex items-center gap-2">
          <p className="text-xl font-medium text-white">Add New Blog</p>
        </div>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Hading Text"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Feature Image CDN Link"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
              <div className="mb-[50px] flex gap-3">
                <Editor data={editorData} onDataChange={setEditorData} />
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

export default AddNewBlogComponent;
