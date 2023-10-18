import React from "react";
import InfoPopover from "../childComponents/InfoPopover";
import CreateExperience from "../childComponents/CreateExperience";
import EditExperience from "../childComponents/EditExperience";
import CreateEducation from "../childComponents/CreateEducation";
import EditEducation from "../childComponents/EditEducation";
import CreateSkill from "../childComponents/CreateSkill";
import EditSkill from "../childComponents/EditSkill";

const AboutPageEditComponent = () => {
  return (
    <>
      <div className="m-[20px] rounded-xl bg-[#36404A] p-[30px]">
        <div className="flex items-center gap-2">
          <p className="text-xl font-medium text-white">About Info Edit</p>
          <InfoPopover img={"assets/images/popover/img-10.png"} />
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
                  placeholder="Profile Image CDN"
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
            <div className="flex gap-[30px]">
              <div className="grid w-full gap-4">
                <label className="text-base">Completed Project Edit</label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Project item"
                    className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                  />
                </div>
              </div>
              <div className="grid w-full gap-4">
                <label className="text-base">Satisfied Clients Edit</label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Project item"
                    className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-[20px] rounded-xl bg-[#36404A] p-[30px]">
        <div className="flex items-center gap-2">
          <p className="text-xl font-medium text-white">
            Experience & Education Section Edit
          </p>
          <InfoPopover img={"assets/images/popover/img-11.png"} />
        </div>

        <div className="mt-[16px]">
          <div className="flex gap-[20px]">
            <div className="grid w-full gap-2">
              <label className="text-base">Experience item Add/Remove</label>
              <div>
                <div className="overflow-hidden rounded-lg border border-border">
                  <table className="w-full border-collapse bg-transparent text-left text-sm text-text">
                    <thead className="bg-transparent">
                      <tr>
                        <th scope="col" className="p-2 font-medium text-white">
                          Title
                        </th>

                        <th
                          scope="col"
                          className="flex justify-end p-2 font-medium text-white"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-border">
                      <tr>
                        <th className="  p-2 font-normal text-text">
                          <div className="relative ">
                            <p>Full Stack Developer</p>
                          </div>
                        </th>

                        <td className="flex justify-end p-2">
                          <div className="flex  gap-4">
                            <a x-data="{ tooltip: 'Delete' }" href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                                x-tooltip="tooltip"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </a>
                            <a x-data="{ tooltip: 'Edite' }" href="#">
                              <EditExperience />
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-2">
                <CreateExperience />
              </div>
            </div>
            <div className="grid w-full gap-2">
              <label className="text-base">Education item Add/Remove</label>
              <div>
                <div className="overflow-hidden rounded-lg border border-border">
                  <table className="w-full border-collapse bg-transparent text-left text-sm text-text">
                    <thead className="bg-transparent">
                      <tr>
                        <th scope="col" className="p-2 font-medium text-white">
                          Title
                        </th>

                        <th
                          scope="col"
                          className="flex justify-end p-2 font-medium text-white"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-border">
                      <tr>
                        <th className="  p-2 font-normal text-text">
                          <div className="relative ">
                            <p>BTech Software Engineering</p>
                          </div>
                        </th>

                        <td className="flex justify-end p-2">
                          <div className="flex  gap-4">
                            <a x-data="{ tooltip: 'Delete' }" href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                                x-tooltip="tooltip"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </a>
                            <a x-data="{ tooltip: 'Edite' }" href="#">
                              <EditEducation />
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-2">
                <CreateEducation />
              </div>
            </div>
            <div className="grid w-full gap-2">
              <label className="text-base">Skill item Add/Remove</label>
              <div>
                <div className="overflow-hidden rounded-lg border border-border">
                  <table className="w-full border-collapse bg-transparent text-left text-sm text-text">
                    <thead className="bg-transparent">
                      <tr>
                        <th scope="col" className="p-2 font-medium text-white">
                          Title
                        </th>

                        <th
                          scope="col"
                          className="flex justify-end p-2 font-medium text-white"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-border">
                      <tr>
                        <th className="  p-2 font-normal text-text">
                          <div className="relative ">
                            <p>React JS</p>
                          </div>
                        </th>

                        <td className="flex justify-end p-2">
                          <div className="flex  gap-4">
                            <a x-data="{ tooltip: 'Delete' }" href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                                x-tooltip="tooltip"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </a>
                            <a x-data="{ tooltip: 'Edite' }" href="#">
                              <EditSkill />
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-2">
                <CreateSkill />
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

export default AboutPageEditComponent;
