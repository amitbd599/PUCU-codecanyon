import React from "react";
import InfoPopover from "../childComponents/InfoPopover";

const ContactPageEditComponent = () => {
  return (
    <>
      <div className="m-[20px] rounded-xl bg-[#36404A] p-[30px]">
        <div className="flex items-center gap-2">
          <p className="text-xl font-medium text-white">Contact Info Edit</p>
          <InfoPopover img={"assets/images/popover/img-17.png"} />
        </div>

        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-4">
              <label className="text-base">Info Content Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Heading Text"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Heading Text Color"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
              <div className="flex gap-3">
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
        <div className="mt-[30px]">
          <div className="grid gap-5">
            <div className="grid gap-4">
              <label className="text-base">Contact Form Content Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Name Placeholder "
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Email Placeholder "
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Website Placeholder "
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Message Placeholder "
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Button Text"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-[20px] rounded-xl bg-[#36404A] p-[30px]">
        <div className="flex items-center gap-2">
          <p className="text-xl font-medium text-white">Google Map Edit</p>
          <InfoPopover img={"assets/images/popover/img-18.png"} />
        </div>

        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-4">
              <label className="text-base">Add your google map</label>

              <div className="flex gap-3">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Map info"
                  className=" w-full rounded-lg border border-border bg-transparent p-3 outline-none placeholder:text-sm"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-[20px] rounded-xl bg-[#36404A] p-[30px]">
        <div className="flex items-center gap-2">
          <p className="text-xl font-medium text-white">
            Request a quote for work Edit
          </p>
          <InfoPopover img={"assets/images/popover/img-19.png"} />
        </div>

        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="mt-[16px]">
              <div className="flex gap-[20px]">
                <div className="grid w-full gap-4">
                  <label className="text-base">Call for help Edit</label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Heading Text"
                      className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                    />
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Phone Number-1"
                      className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                    />
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Phone Number-2"
                      className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                    />
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Phone Number-3"
                      className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                    />
                  </div>
                </div>
                <div className="grid w-full gap-4">
                  <label className="text-base">Office address Edit</label>
                  <div className="flex gap-3">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="8"
                      placeholder="Address info"
                      className=" w-full rounded-lg border border-border bg-transparent p-3 outline-none placeholder:text-sm"
                    ></textarea>
                  </div>
                </div>
                <div className="grid w-full gap-4">
                  <label className="text-base">Email address Edit</label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Heading Text "
                      className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                    />
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Email-1"
                      className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                    />
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Email-2"
                      className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                    />
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Email-3"
                      className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                    />
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
    </>
  );
};

export default ContactPageEditComponent;
