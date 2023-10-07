import React from "react";
import { FaBlog, FaCompress, FaRegEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  ComposedChart,
} from "recharts";

const DashboardComponent = () => {
  const data = [
    {
      name: "Home",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "About",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Service",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Portfolio",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Blog",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Contact",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];
  const data_1 = [
    {
      name: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: "Page D",
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: "Page E",
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: "Page F",
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];

  return (
    <>
      <div className="m-[30px] grid grid-cols-12 gap-[30px]">
        <div className="col-span-3 flex items-center justify-between rounded-lg bg-[#36404A] p-[20px]">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-cyan-500">
            <FaBlog className="text-[20px]" />
          </div>
          <div className="text-end">
            <p className="text-base text-text">Total Blog </p>
            <h2 className="text-[26px] font-semibold text-white">20</h2>
          </div>
        </div>
        <div className="col-span-3 flex items-center justify-between rounded-lg bg-[#36404A] p-[20px]">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-cyan-500">
            <FaRegEnvelope className="text-[20px]" />
          </div>
          <div className="text-end">
            <p className="text-base text-text">Total Message </p>
            <h2 className="text-[26px] font-semibold text-white">60</h2>
          </div>
        </div>
        <div className="col-span-3 flex items-center justify-between rounded-lg bg-[#36404A] p-[20px]">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-cyan-500">
            <FaBlog className="text-[20px]" />
          </div>
          <div className="text-end">
            <p className="text-base text-text">Total Comment </p>
            <h2 className="text-[26px] font-semibold text-white">20</h2>
          </div>
        </div>
        <div className="col-span-3 flex items-center justify-between rounded-lg bg-[#36404A] p-[20px]">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-cyan-500">
            <FaCompress className="text-[20px]" />
          </div>
          <div className="text-end">
            <p className="text-base text-text">Total Project </p>
            <h2 className="text-[26px] font-semibold text-white">40</h2>
          </div>
        </div>
      </div>

      {/* Chat Overview */}
      <div className="mx-[30px] grid grid-cols-12 gap-[30px]">
        <div className="col-span-7">
          <div className=" h-[450px] w-full rounded-lg bg-[#36404A] px-[20px] py-[50px]">
            <div>
              <h2 className="mb-2 text-base">
                Visitor Overview -{" "}
                <span className="text-sm text-white">October 5, 2023</span>
              </h2>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                stroke="#00BCD4"
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 20,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" height={60} stroke="#c4cfde" />
                <YAxis stroke="#c4cfde" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#00BCD4" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-span-5">
          <div className=" h-[450px] w-full rounded-lg bg-[#36404A] px-[20px] py-[50px]">
            <div>
              <h2 className="mb-2 text-base">
                Visitor Overview -{" "}
                <span className="text-sm text-white">October 5, 2023</span>
              </h2>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={data}
                stroke="#00BCD4"
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" barSize={20} fill="#00BCD4" />
                <Line type="monotone" dataKey="uv" stroke="#ddd" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="m-[30px] grid grid-cols-12 gap-[30px]">
        <div className="col-span-5">
          <div className="mx-auto w-full  rounded-lg   bg-[#36404A] shadow-lg">
            <header className="-b  px-5 py-4">
              <h2 className="font-semibold text-text">Recent Comments</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead className="text-xs font-semibold uppercase text-text">
                    <tr>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Email</div>
                      </th>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Date</div>
                      </th>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-center font-semibold">Action</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    <tr>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left">alexshatov@gmail.com</div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left font-medium text-text">
                          October 5, 2023
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-center text-sm">
                          <Link to="?">
                            <span class="inline-flex items-center gap-1 rounded-full bg-purple-50 px-2 py-1 text-xs font-semibold text-purple-600">
                              <span class="h-1.5 w-1.5 rounded-full bg-purple-600"></span>
                              View Post
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left">
                          AaronMHance@jourrapide.com
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left font-medium text-text">
                          October 5, 2023
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-center text-sm">
                          <Link to="?">
                            <span class="inline-flex items-center gap-1 rounded-full bg-purple-50 px-2 py-1 text-xs font-semibold text-purple-600">
                              <span class="h-1.5 w-1.5 rounded-full bg-purple-600"></span>
                              View Post
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left">LauraTBrown@teleworm.us</div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left font-medium text-text">
                          October 5, 2023
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-center text-sm">
                          <Link to="?">
                            <span class="inline-flex items-center gap-1 rounded-full bg-purple-50 px-2 py-1 text-xs font-semibold text-purple-600">
                              <span class="h-1.5 w-1.5 rounded-full bg-purple-600"></span>
                              View Post
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left">
                          MattAJones@jourrapide.com
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left font-medium text-text">
                          October 5, 2023
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-center text-sm">
                          <Link to="?">
                            <span class="inline-flex items-center gap-1 rounded-full bg-purple-50 px-2 py-1 text-xs font-semibold text-purple-600">
                              <span class="h-1.5 w-1.5 rounded-full bg-purple-600"></span>
                              View Post
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left">JohnPPoynter@dayrep.com</div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left font-medium text-text">
                          October 5, 2023
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-center text-sm">
                          <Link to="?">
                            <span class="inline-flex items-center gap-1 rounded-full bg-purple-50 px-2 py-1 text-xs font-semibold text-purple-600">
                              <span class="h-1.5 w-1.5 rounded-full bg-purple-600"></span>
                              View Post
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left">
                          MichaelLLappin@armyspy.com
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left font-medium text-text">
                          October 5, 2023
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-center text-sm">
                          <Link to="?">
                            <span class="inline-flex items-center gap-1 rounded-full bg-purple-50 px-2 py-1 text-xs font-semibold text-purple-600">
                              <span class="h-1.5 w-1.5 rounded-full bg-purple-600"></span>
                              View Post
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="mx-auto w-full  rounded-lg   bg-[#36404A] shadow-lg">
            <header className="-b  px-5 py-4">
              <h2 className="font-semibold text-text">Recent Blog</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead className="text-xs font-semibold uppercase text-text">
                    <tr>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Title</div>
                      </th>

                      <th className="whitespace-nowrap p-2">
                        <div className="text-center font-semibold">Action</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    <tr>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left">
                          Why Do We Need Strict Mode
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-center text-sm">
                          <Link to="?">
                            <span class="inline-flex items-center gap-1 rounded-full bg-pink-50 px-2 py-1 text-xs font-semibold text-pink-600">
                              <span class="h-1.5 w-1.5 rounded-full bg-pink-600"></span>
                              View Post
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left">
                          Where designs are implemented
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-center text-sm">
                          <Link to="?">
                            <span class="inline-flex items-center gap-1 rounded-full bg-pink-50 px-2 py-1 text-xs font-semibold text-pink-600">
                              <span class="h-1.5 w-1.5 rounded-full bg-pink-600"></span>
                              View Post
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left">
                          But of course as a project grows
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-center text-sm">
                          <Link to="?">
                            <span class="inline-flex items-center gap-1 rounded-full bg-pink-50 px-2 py-1 text-xs font-semibold text-pink-600">
                              <span class="h-1.5 w-1.5 rounded-full bg-pink-600"></span>
                              View Post
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left">
                          Why Do We Need Strict Mode
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-center text-sm">
                          <Link to="?">
                            <span class="inline-flex items-center gap-1 rounded-full bg-pink-50 px-2 py-1 text-xs font-semibold text-pink-600">
                              <span class="h-1.5 w-1.5 rounded-full bg-pink-600"></span>
                              View Post
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left">
                          Why Do We Need Strict Mode
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-center text-sm">
                          <Link to="?">
                            <span class="inline-flex items-center gap-1 rounded-full bg-pink-50 px-2 py-1 text-xs font-semibold text-pink-600">
                              <span class="h-1.5 w-1.5 rounded-full bg-pink-600"></span>
                              View Post
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left">
                          Why Do We Need Strict Mode
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-center text-sm">
                          <Link to="?">
                            <span class="inline-flex items-center gap-1 rounded-full bg-pink-50 px-2 py-1 text-xs font-semibold text-pink-600">
                              <span class="h-1.5 w-1.5 rounded-full bg-pink-600"></span>
                              View Post
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="mx-auto w-full  rounded-lg   bg-[#36404A] shadow-lg">
            <header className="-b  px-5 py-4">
              <h2 className="font-semibold text-text">Recent Projects</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead className="text-xs font-semibold uppercase text-text">
                    <tr>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Title</div>
                      </th>

                      <th className="whitespace-nowrap p-2">
                        <div className="text-center font-semibold">Action</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    <tr>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left">Mobile Application</div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-center text-sm">
                          <Link to="?">
                            <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                              <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                              View Post
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left">Android Apps</div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-center text-sm">
                          <Link to="?">
                            <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                              <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                              View Post
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left">Web Application</div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-center text-sm">
                          <Link to="?">
                            <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                              <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                              View Post
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left">Software Dev</div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-center text-sm">
                          <Link to="?">
                            <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                              <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                              View Post
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left">E-commerce Web</div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-center text-sm">
                          <Link to="?">
                            <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                              <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                              View Post
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-left">Apps Application</div>
                      </td>
                      <td className="whitespace-nowrap p-4">
                        <div className="text-center text-sm">
                          <Link to="?">
                            <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                              <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                              View Post
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
