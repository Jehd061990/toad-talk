import { useState } from "react";
import Friends from "./friends/Friends";

import "./chatbox.css";

const Chatbox = () => {
  const [openFiles, setOpenFiles] = useState(false);
  const [openMembers, setOpenMembers] = useState(false);
  const [chatTab, setChatTab] = useState("");

  return (
    <div className="chat-box items-center flex flex-col-reverse md:flex-row -z-0 secondary-font">
      {/* ChatBox Component */}
      <div className="chat-box-chats me-5 ms-5 md:ms-0">
        <Friends />
      </div>

      {/* Chats Right Side Components (files and members) */}
      <div className="gap-5 flex-col me-5 items-end hidden md:flex">
        <div
          className={
            openFiles
              ? " chat-files-container flex flex-col items-end open"
              : " chat-files-container flex  items-center close"
          }
        >
          <label
            className="swap"
            onChange={() => {
              setOpenFiles(!openFiles);
            }}
          >
            <input type="checkbox" />
            <div className="swap-on">
              <span className="material-symbols-outlined text-white">
                close
              </span>
            </div>
            <div className="swap-off">
              <span className="material-symbols-outlined text-white">
                folder
              </span>
            </div>
          </label>
        </div>
        <div
          className={
            openMembers
              ? "chat-members-container open flex flex-col items-end open"
              : "chat-members-container close flex  items-center close"
          }
        >
          <label
            className="swap"
            onChange={() => {
              setOpenMembers(!openMembers);
            }}
          >
            <input type="checkbox" />
            <div className="swap-on">
              <span className="material-symbols-outlined text-white">
                close
              </span>
            </div>
            <div className="swap-off">
              <span className="material-symbols-outlined text-white">
                group
              </span>
            </div>
          </label>
        </div>
      </div>

      {/* Chats Mobile Version Componenst (chats, filse and member) */}
      <div className="fixed top-3 gap-5 flex-col mt-0 items-end flex  md:hidden">
        <div role="tablist" className="tabs tabs-lifted">
          <button
            role="tab"
            className={`tab bg-transparent ${
              chatTab === "messages" ? "tab-active" : ""
            }`}
            onClick={() => setChatTab("messages")}
          >
            <span className="material-symbols-outlined text-accent">chat</span>
          </button>
          <button
            role="tab"
            className={`tab bg-transparent ${
              chatTab === "files" ? "tab-active" : ""
            }`}
            onClick={() => setChatTab("files")}
          >
            <span className="material-symbols-outlined text-accent">
              folder
            </span>
          </button>
          <button
            role="tab"
            className={`tab bg-transparent ${
              chatTab === "members" ? "tab-active" : ""
            }`}
            onClick={() => setChatTab("members")}
          >
            <span className="material-symbols-outlined text-accent">group</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
