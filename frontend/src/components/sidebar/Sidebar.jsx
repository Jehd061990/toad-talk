import "./sidebar.css";
import { useState } from "react";

import React from "react";

const Sidebar = () => {
  const [navBtn, setNavBtn] = useState(false);
  return (
    <>
      <div
        className={`side-bar z-10 bg-accent md:w-24 lg:w-48 h-100vh secondary-font ${
          navBtn ? "open-side-bar" : "close-side-bar"
        } absolute md:relative md:bg-transparent`}
      >
        <div className="user-nav grid justify-center bg-transparent relative">
          <label
            className={`swap fixed  right-0 mt-3 text-white ${
              navBtn ? "open-nav-btn" : "close-nav-btn"
            } md:absolute`}
            onChange={() => {
              setNavBtn(!navBtn);
            }}
          >
            <input type="checkbox" />
            <div className="swap-on">
              <span className="material-symbols-outlined">close</span>
            </div>
            <div className="swap-off">
              <span className="material-symbols-outlined">menu</span>
            </div>
          </label>
          <div className="mt-10">
            <div className="avatar online">
              <div className="w-24 md:w-16 lg:w-20 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
          <div className="items-center flex flex-col-reverse mb-5">
            <p className="text-white">Log-out</p>
            <button className="grid justify-center items-center  logout-btn">
              <img
                className="md:w-8 lg:w-11"
                src="./img/logout-icon.svg"
                alt="."
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          navBtn
            ? "hidden w-14 h-100vh bg-slate-600 -z-10 open-navBtn-bg md:block"
            : "hidden w-14 h-100vh bg-slate-600 -z-10 close-navBtn-bg md:block"
        }
      ></div>
    </>
  );
};

export default Sidebar;
