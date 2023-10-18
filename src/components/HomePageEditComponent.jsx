import React from "react";
import { useState } from "react";
import InfoPopover from "../childComponents/InfoPopover";
import { Link } from "react-router-dom";

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
      {/* Profile Info Section Start */}
      <div className="m-[30px] rounded-xl bg-[#36404A] p-[30px]">
        <div className="flex items-center gap-2">
          <p className="text-xl font-medium text-white">Profile Info Edit</p>
          <InfoPopover img={"assets/images/popover/img-2.png"} />
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
                <input
                  type="text"
                  placeholder="Position"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Edit Email"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <label className="text-base">Social Link Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Facebook ID"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Twitter ID"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Linked In ID"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Instagram ID"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">Button Edit</label>
              <div className="flex w-1/2 gap-3">
                <input
                  type="text"
                  placeholder="Button Cover Text"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Button Link"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
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
        </div>
      </div>
      {/* Profile Info Section End */}

      <div className="m-[30px] grid grid-cols-12 gap-[20px] ">
        <div className="col-span-6">
          <div className=" rounded-xl bg-[#36404A] p-[30px]">
            <div className="flex items-center gap-2">
              <p className="text-xl font-medium text-white">
                Content Top Section Edit
              </p>
              <InfoPopover img={"assets/images/popover/img-1.png"} />
            </div>
            <div className="mt-[16px]">
              <div className="grid gap-5">
                <div className="grid gap-2">
                  {/* <label className="text-base">Edit Heading info</label> */}
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Sub Heading Text"
                      className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Heading Text"
                      className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  {/* <label className="text-base">Description Edit</label> */}
                  <div className="flex gap-3">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                      placeholder="Description"
                      className=" w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-[20px] rounded-xl bg-[#36404A] p-[30px]">
            <div className="flex items-center gap-2">
              <p className="text-xl font-medium text-white">
                Project Section Edit
              </p>
              <InfoPopover img={"assets/images/popover/img-4.png"} />
            </div>
            <div className="mt-[16px]">
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <label className="text-base">Edit Heading info</label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Heading Text"
                      className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                    />
                  </div>
                  <div className="flex gap-3">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="3"
                      placeholder="Description"
                      className=" w-full rounded-lg border border-border bg-transparent p-3 outline-none placeholder:text-sm"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-[20px] rounded-xl bg-[#36404A] p-[30px]">
            <div className="flex items-center gap-2">
              <p className="text-xl font-medium text-white">
                Experience Section Edit
              </p>
              <InfoPopover img={"assets/images/popover/img-8.png"} />
            </div>
            <div className="mt-[16px]">
              <div className="flex gap-5">
                <div className="grid w-full gap-2">
                  <label className="text-base">Edit Years Of Experience</label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Years"
                      className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                    />
                  </div>
                  <div className="flex gap-3">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                      placeholder="Description"
                      className=" w-full rounded-lg border border-border bg-transparent p-3 outline-none placeholder:text-sm"
                    ></textarea>
                  </div>
                </div>
                <div className="grid w-full gap-2">
                  <label className="text-base">Edit Project Complete</label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="CountUp"
                      className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                    />
                  </div>
                  <div className="flex gap-3">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                      placeholder="Description"
                      className=" w-full rounded-lg border border-border bg-transparent p-3 outline-none placeholder:text-sm"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-[20px] rounded-xl bg-[#36404A] p-[30px]">
            <div className="flex items-center gap-2">
              <p className="text-xl font-medium text-white">
                Testimonials Section Edit
              </p>
              <InfoPopover img={"assets/images/popover/img-9.png"} />
            </div>
            <div className="mt-[16px]">
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <label className="text-base">Edit Heading info</label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Heading Text"
                      className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                    />
                  </div>
                  <div className="flex gap-3">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      placeholder="Description"
                      className=" w-full rounded-lg border border-border bg-transparent p-3 outline-none placeholder:text-sm"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 ">
          <div className=" rounded-xl bg-[#36404A] p-[30px]">
            <div className="flex items-center gap-2">
              <p className="text-xl font-medium text-white">
                About Us Section Edit
              </p>
              <InfoPopover img={"assets/images/popover/img-3.png"} />
            </div>
            <div className="mt-[16px]">
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <label className="text-base">Upload Logo</label>
                  <div className="flex gap-3">
                    <input type="file" accept="image/*" />
                  </div>
                </div>
                <div className="grid gap-2">
                  {/* <label className="text-base">Edit Description</label> */}
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Heading Text"
                      className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                    />
                  </div>
                  <div className="flex gap-3">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="3"
                      placeholder="Description"
                      className=" w-full rounded-lg border border-border bg-transparent p-3 outline-none placeholder:text-sm"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[20px] rounded-xl bg-[#36404A] p-[30px]">
            <div className="flex items-center gap-2">
              <p className="text-xl font-medium text-white">
                Service Offer Section Edit
              </p>
              <InfoPopover img={"assets/images/popover/img-5.png"} />
            </div>
            <div className="mt-[16px]">
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <label className="text-base">
                    Upload Images{" "}
                    <span className="text-sm text-red-500">(Max 3)</span>
                  </label>
                  <div className="flex gap-3">
                    <input type="file" accept="image/*" />
                  </div>
                </div>
                <div className="grid gap-2">
                  {/* <label className="text-base">Edit Description</label> */}
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Heading Text"
                      className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                    />
                  </div>
                  <div className="flex gap-3">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="3"
                      placeholder="Description"
                      className=" w-full rounded-lg border border-border bg-transparent p-3 outline-none placeholder:text-sm"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[20px] rounded-xl bg-[#36404A] p-[30px]">
            <div className="flex items-center gap-2">
              <p className="text-xl font-medium text-white">
                Blog Section Edit
              </p>
              <InfoPopover img={"assets/images/popover/img-6.png"} />
            </div>
            <div className="mt-[16px]">
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <label className="text-base">Edit Heading info</label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Heading Text"
                      className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                    />
                  </div>
                  <div className="flex gap-3">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="3"
                      placeholder="Description"
                      className=" w-full rounded-lg border border-border bg-transparent p-3 outline-none placeholder:text-sm"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[20px] rounded-xl bg-[#36404A] p-[30px]">
            <div className="flex items-center gap-2">
              <p className="text-xl font-medium text-white">
                Contact Section Edit
              </p>
              <InfoPopover img={"assets/images/popover/img-7.png"} />
            </div>
            <div className="mt-[16px]">
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <label className="text-base">Edit Heading info</label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Heading Text"
                      className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                    />
                  </div>
                  <div className="flex gap-3">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="3"
                      placeholder="Description"
                      className=" w-full rounded-lg border border-border bg-transparent p-3 outline-none placeholder:text-sm"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-[30px] ">
        <button className="btn">Save Change</button>
      </div>
    </section>
  );
};

export default HomePageEditComponent;
