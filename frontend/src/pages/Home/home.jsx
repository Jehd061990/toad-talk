import { useState } from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Chatbox from "../../components/chatbox/Chatbox";

const home = () => {
  const [clickNavBtn, setClickNavBtn] = useState("");

  const sideBarData = (data) => {
    setClickNavBtn(data);
  };

  return (
    <div className="flex flex-row h-100vh relative">
      <Sidebar onData={sideBarData} />
      <Chatbox navClick={clickNavBtn} />
    </div>
  );
};

export default home;
