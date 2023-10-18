import React from "react";

const AllBlogPageComponent = () => {
  return (
    <>
      <div className="m-5 overflow-hidden rounded-lg border border-border shadow-md">
        <table className="w-full border-collapse bg-dashBg text-left text-sm text-gray-500">
          <thead className="bg-dashBg">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-white">
                Title
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-white">
                Image
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-white">
                View
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-white">
                Date
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-white">
                Approve
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-white" />
            </tr>
          </thead>
          <tbody className="divide-y divide-border border-t border-border">
            {[...Array(10)].map((item, index) => (
              <tr>
                <td className="px-6 py-4">Product Designer</td>
                <th className="flex gap-3 px-6 py-4 font-normal text-text">
                  <div className="relative h-10 w-10">
                    <img
                      className="h-full w-full rounded-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                </th>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                    View Blog
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex gap-2">October 18, 2023</div>
                </td>
                <td className="px-6 py-4">
                  <label class="relative inline-flex cursor-pointer items-center">
                    <input id="switch-2" type="checkbox" class="peer sr-only" />
                    <label for="switch-2" class="hidden"></label>
                    <div class="bg-slate-200 peer h-4 w-11 rounded-full border after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-300 peer-checked:after:translate-x-full peer-focus:ring-green-300"></div>
                  </label>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4">
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
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllBlogPageComponent;
