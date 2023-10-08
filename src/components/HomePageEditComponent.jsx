import React from "react";
import { useState } from "react";

const HomePageEditComponent = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleRemoveImage = () => {
    setImageSrc(null);
  };
  return (
    <section>
      <div className="m-[30px] rounded-xl bg-[#36404A] p-[30px]">
        <p className="text-xl font-medium text-white">Profile Info Edit</p>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-4">
              <label className="text-base">Info Content Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Hading Text"
                  className="border-border h-[40px] w-full rounded-lg border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Hading Text Color"
                  className="border-border h-[40px] w-full rounded-lg border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Position"
                  className="border-border h-[40px] w-full rounded-lg border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Edit Email"
                  className="border-border h-[40px] w-full rounded-lg border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="border-border h-[40px] w-full rounded-lg border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <label className="text-base">Social Link Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Facebook ID"
                  className="border-border h-[40px] w-full rounded-lg border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Twitter ID"
                  className="border-border h-[40px] w-full rounded-lg border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Linked In ID"
                  className="border-border h-[40px] w-full rounded-lg border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Instagram ID"
                  className="border-border h-[40px] w-full rounded-lg border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">Button Edit</label>
              <div className="flex w-1/2 gap-3">
                <input
                  type="text"
                  placeholder="Button Cover Text"
                  className="border-border h-[40px] w-full rounded-lg border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Button Link"
                  className="border-border h-[40px] w-full rounded-lg border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="mt-2 grid gap-2">
              <label className="text-base">Change Profile Picture</label>
              <div className="flex gap-3">
                <div className=" w-1/2  rounded-md bg-[#3A444F]">
                  <form className="px-9 py-6" method="POST">
                    <div className="mb-6 pt-4">
                      <label className="mb-5 block text-xl font-semibold text-white">
                        Upload File
                      </label>
                      <div className="mb-8">
                        <input
                          type="file"
                          name="file"
                          id="file"
                          className="sr-only"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                        <label
                          htmlFor="file"
                          className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                        >
                          <div>
                            <span className="mb-2 block text-xl font-semibold text-white">
                              Drop files here
                            </span>
                            <span className="mb-2 block text-base font-medium text-white">
                              Or
                            </span>
                            <span className="inline-flex rounded border border-[#e0e0e0] px-7 py-2 text-base font-medium text-white">
                              Browse
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div>
                      <button className="btn">Upload File</button>
                    </div>
                  </form>
                </div>
                <div className="w-1/2 rounded-lg bg-[#3A444F] p-5">
                  <div className="relative ">
                    {!!imageSrc ? (
                      <div className="h-[320px] w-full">
                        <img
                          src={imageSrc}
                          alt="Selected"
                          className="h-full w-full object-contain"
                        />
                        <span
                          onClick={handleRemoveImage}
                          className="absolute -top-[10px] right-0 cursor-pointer p-3"
                        >
                          <i className="fa-regular fa-xmark text-[30px] text-red-500"></i>
                        </span>
                      </div>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <p className="text-2xl text-theme">No Image Select</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[40px] block">
            <span className="btn cursor-pointer">Save Change</span>
          </div>
        </div>
      </div>
      <div className="m-[30px] rounded-xl bg-[#36404A] p-[30px]">
        <h2 className="text-xl font-medium text-white">Counter Section Edit</h2>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label className="text-base">Counter Section One Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Count Number"
                  className="border-border h-[40px] w-full rounded-lg border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Description"
                  className="border-border h-[40px] w-full rounded-lg border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">Counter Section Two Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Count Number"
                  className="border-border h-[40px] w-full rounded-lg border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Description"
                  className="border-border h-[40px] w-full rounded-lg border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">Counter Section Three Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Count Number"
                  className="border-border h-[40px] w-full rounded-lg border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Description"
                  className="border-border h-[40px] w-full rounded-lg border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="mt-[40px] block">
            <span className="btn cursor-pointer">Submit</span>
          </div>
        </div>
      </div>
      <div className="m-[30px] rounded-xl bg-[#36404A] p-[30px]">
        <h2 className="text-xl font-medium text-white">
          Home Profile Image Edit Section
        </h2>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label className="text-base">Profile Image Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Image Link"
                  className="border-border h-[40px] w-full rounded-lg border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-base">Shape Content Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Counter"
                  className="border-border h-[40px] w-full rounded-lg border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Text info"
                  className="border-border h-[40px] w-full rounded-lg border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="mt-[40px] block">
            <span className="btn cursor-pointer">Submit</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageEditComponent;
