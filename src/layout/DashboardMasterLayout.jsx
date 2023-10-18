import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import sidebarData from "../script/sidebarData";

const DashboardMasterLayout = (props) => {
  const [openParent, setOpenParent] = useState(null);
  const [activeLink, setActiveLink] = useState(null);

  // Load the active link and open parent from localStorage on component mount
  useEffect(() => {
    const savedActiveLink = localStorage.getItem("activeLink");
    const savedOpenParent = localStorage.getItem("openParent");
    if (savedActiveLink) {
      setActiveLink(savedActiveLink);
    }
    if (savedOpenParent) {
      setOpenParent(parseInt(savedOpenParent));
    }
  }, []);

  // Save the active link and open parent to localStorage whenever they change
  useEffect(() => {
    if (activeLink) {
      localStorage.setItem("activeLink", activeLink);
    }
    if (openParent) {
      localStorage.setItem("openParent", openParent);
    }
  }, [activeLink, openParent]);

  const toggleParent = (parent) => {
    setOpenParent((prevOpenParent) =>
      prevOpenParent === parent ? null : parent
    );
  };
  const handleChildClick = (link) => {
    setActiveLink(link);
  };

  return (
    <section className="flex bg-[#303841]">
      <div className="sidebar min-h-screen w-[260px] border-r border-[#4b5563] bg-dashBg px-5 py-6">
        <div className="sidebar-content">
          <div className="border-b border-text py-4">
            <img
              src="assets/images/logo.svg"
              alt=""
              className="w-[120px] pl-5"
            />
          </div>
          <ul className="mt-8 grid gap-2">
            {sidebarData.map((parentItem) => (
              <li key={parentItem.id}>
                {parentItem?.link ? (
                  <NavLink
                    to={parentItem?.link}
                    onClick={() => toggleParent(parentItem.id)}
                    className={(navData) =>
                      navData.isActive ? "dashNavActive " : "dashNavNotActive"
                    }
                  >
                    <i className={parentItem?.icon}></i>
                    {parentItem.title}
                  </NavLink>
                ) : (
                  <Link
                    to={"javascript:void(0)"}
                    onClick={() => toggleParent(parentItem.id)}
                    className={
                      openParent === parentItem.id
                        ? "dashNavActive justify-between"
                        : "dashNavNotActive justify-between"
                    }
                  >
                    <span className="flex items-center gap-2">
                      <i className={parentItem?.icon}></i>
                      {parentItem.title}
                    </span>

                    <span>
                      <i
                        className={`fa-light fa-angle-right transition-all duration-300 ${
                          openParent === parentItem.id ? "rotate-90" : ""
                        }`}
                      ></i>
                    </span>
                  </Link>
                )}

                <ul
                  className={`sub-menu pl-[26px]  ${
                    openParent === parentItem.id ? "open" : ""
                  }`}
                >
                  {parentItem.links?.map((link) => (
                    <li key={link.id}>
                      <NavLink
                        to={link?.link}
                        onClick={() => handleChildClick(link.id)}
                        className={(navData) =>
                          navData.isActive
                            ? "dashNavActive "
                            : "dashNavNotActive "
                        }
                      >
                        {link.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="min-h-screen w-full bg-[#303841] pl-[260px]">
        {props.children}
      </div>
    </section>
  );
};

export default DashboardMasterLayout;
