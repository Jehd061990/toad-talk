import { useState } from "react";
import "./chatbox.css";

// Components
import Friends from "./friends/Friends";
import Convo from "./convo/Convo";
import { MobileGroupInfo, DesktopGroupInfo } from "./groupinfo/GroupInfo";
import { MobileMembers, DesktopMembers } from "./members/Members";

const Chatbox = () => {
  const [openFiles, setOpenFiles] = useState(false);
  const [openMembers, setOpenMembers] = useState(false);
  const [chatTab, setChatTab] = useState("messages");

  const [chatId, setChatId] = useState(null);

  const passChatId = (data) => {
    setChatId(data);
  };

  return (
    <div className="chat-box items-center flex flex-col-reverse md:flex-row -z-0 secondary-font">
      {/* ChatBox Component */}
      <div
        className={`md:flex ${
          chatTab === "messages" ? "flex" : "hidden"
        }  chat-box-chats me-5 ms-5 md:ms-0`}
      >
        <Friends getChatId={passChatId} openFriends={chatId} />
        <Convo chatId={chatId} closeConvo={passChatId} />
      </div>

      <div
        className={`${
          chatTab === "files" ? "flex" : "hidden"
        }  chat-box-chats me-5 ms-5 md:ms-0 md:hidden`}
      >
        <MobileGroupInfo />
      </div>

      <div
        className={`${
          chatTab === "members" ? "flex" : "hidden"
        }  chat-box-chats me-5 ms-5 md:ms-0 md:hidden`}
      >
        <MobileMembers />
      </div>

      {/* Chats Right Side Components (files and members) */}
      <div className="relative gap-5 flex-col me-5 items-end hidden md:flex">
        <DesktopGroupInfo openFiles={openFiles} setOpenFiles={setOpenFiles} />

        <DesktopMembers
          openMembers={openMembers}
          setOpenMembers={setOpenMembers}
        />
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
