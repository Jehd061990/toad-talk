import { useState } from "react";

import "./friends.css";

const Friends = ({ getChatId, openFriends }) => {
  // const [hideFriendsComponent, setHideFriendsComponent] = useState(null);

  const sendChatId = (e) => {
    const chatId = e.currentTarget.getAttribute("value");
    getChatId(chatId);
    // setHideFriendsComponent(chatId);
  };

  return (
    <>
      <div
        className={`chat-friends-wrapper m-5 w-full md:w-20 lg:w-96  gap-5 flex-col ${
          openFriends !== null ? "hidden" : "flex"
        } md:flex`}
      >
        <label className="input input-bordered flex md:hidden lg:flex items-center gap-2">
          <img
            className="md:-translate-x-10 lg:-translate-x-0"
            src="./img/search-icon.svg"
            alt=""
          />

          <input type="text" className="grow" placeholder="Search" />
        </label>
        <div className="hidden md:flex lg:hidden justify-center">
          <button
            className="bg-transparent border-none"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <img src="./img/search-icon.svg" alt="" />
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <label className="input input-bordered flex items-center gap-2">
                <img src="./img/search-icon.svg" alt="" />

                <input type="text" className="grow" placeholder="Search" />
              </label>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div className=" w-full h-full overflow-y-scroll">
          <div className="flex flex-col gap-2 mx-2">
            <div
              className="flex items-center justify-around md:justify-around lg:justify-between text-sm"
              value={"power"}
              onClick={sendChatId}
            >
              <div className="avatar online">
                <div className=" w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="w-1/2 md:hidden lg:block">
                <h1 className="font-semibold">Design Chat</h1>
                <p className="text-xs">You: Okay lang ... </p>
              </div>
              <div className="translate-y-2 md:hidden lg:block">
                <div className="bg-orange-600 rounded-full w-7 h-7 text-white font-normal flex items-center justify-center">
                  1
                </div>
              </div>

              <div className="md:hidden lg:block">
                <div className="text-slate-400">4m</div>
                <div>
                  <img className="" src="./img/pin-icon.svg" alt="" />
                </div>
              </div>
            </div>

            <div
              className="flex items-center justify-around md:justify-between text-sm"
              value={"damage"}
              onClick={sendChatId}
            >
              <div className="avatar online">
                <div className=" w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="w-1/2 md:hidden lg:block">
                <h1 className="font-semibold">Design Chat</h1>
                <p className="text-xs">You: Okay lang ... </p>
              </div>
              <div className="translate-y-2 md:hidden lg:block">
                <div className="bg-orange-600 rounded-full w-7 h-7 text-white font-normal flex items-center justify-center">
                  1
                </div>
              </div>

              <div className="md:hidden lg:block">
                <div className="text-slate-400">4m</div>
                <div>
                  <img className="" src="./img/pin-icon.svg" alt="" />
                </div>
              </div>
            </div>

            <div
              className="flex items-center justify-around md:justify-between text-sm"
              value={"agility"}
              onClick={sendChatId}
            >
              <div className="avatar online">
                <div className=" w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="w-1/2 md:hidden lg:block">
                <h1 className="font-semibold">Design Chat</h1>
                <p className="text-xs">You: Okay lang ... </p>
              </div>

              <div className="translate-y-2 md:hidden lg:block">
                <div className="bg-orange-600 rounded-full w-7 h-7 text-white font-normal flex items-center justify-center">
                  1
                </div>
              </div>

              <div className="md:hidden lg:block">
                <div className="text-slate-400">4m</div>
                <div>
                  <img className="" src="./img/pin-icon.svg" alt="" />
                </div>
              </div>
            </div>

            <div
              className="flex items-center justify-around md:justify-between text-sm"
              value={"damage"}
              onClick={sendChatId}
            >
              <div className="avatar online">
                <div className=" w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="w-1/2 md:hidden lg:block">
                <h1 className="font-semibold">Design Chat</h1>
                <p className="text-xs">You: Okay lang ... </p>
              </div>
              <div className="translate-y-2 md:hidden lg:block">
                <div className="bg-orange-600 rounded-full w-7 h-7 text-white font-normal flex items-center justify-center">
                  1
                </div>
              </div>

              <div className="md:hidden lg:block">
                <div className="text-slate-400">4m</div>
                <div>
                  <img className="" src="./img/pin-icon.svg" alt="" />
                </div>
              </div>
            </div>

            <div
              className="flex items-center justify-around md:justify-between text-sm"
              value={"agility"}
              onClick={sendChatId}
            >
              <div className="avatar online">
                <div className=" w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="w-1/2 md:hidden lg:block">
                <h1 className="font-semibold">Design Chat</h1>
                <p className="text-xs">You: Okay lang ... </p>
              </div>

              <div className="translate-y-2 md:hidden lg:block">
                <div className="bg-orange-600 rounded-full w-7 h-7 text-white font-normal flex items-center justify-center">
                  1
                </div>
              </div>

              <div className="md:hidden lg:block">
                <div className="text-slate-400">4m</div>
                <div>
                  <img className="" src="./img/pin-icon.svg" alt="" />
                </div>
              </div>
            </div>

            <div
              className="flex items-center justify-around md:justify-between text-sm"
              value={"damage"}
              onClick={sendChatId}
            >
              <div className="avatar online">
                <div className=" w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="w-1/2 md:hidden lg:block">
                <h1 className="font-semibold">Design Chat</h1>
                <p className="text-xs">You: Okay lang ... </p>
              </div>
              <div className="translate-y-2 md:hidden lg:block">
                <div className="bg-orange-600 rounded-full w-7 h-7 text-white font-normal flex items-center justify-center">
                  1
                </div>
              </div>

              <div className="md:hidden lg:block">
                <div className="text-slate-400">4m</div>
                <div>
                  <img className="" src="./img/pin-icon.svg" alt="" />
                </div>
              </div>
            </div>

            <div
              className="flex items-center justify-around md:justify-between text-sm"
              value={"agility"}
              onClick={sendChatId}
            >
              <div className="avatar online">
                <div className=" w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="w-1/2 md:hidden lg:block">
                <h1 className="font-semibold">Design Chat</h1>
                <p className="text-xs">You: Okay lang ... </p>
              </div>

              <div className="translate-y-2 md:hidden lg:block">
                <div className="bg-orange-600 rounded-full w-7 h-7 text-white font-normal flex items-center justify-center">
                  1
                </div>
              </div>

              <div className="md:hidden lg:block">
                <div className="text-slate-400">4m</div>
                <div>
                  <img className="" src="./img/pin-icon.svg" alt="" />
                </div>
              </div>
            </div>

            <div
              className="flex items-center justify-around md:justify-between text-sm"
              value={"damage"}
              onClick={sendChatId}
            >
              <div className="avatar online">
                <div className=" w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="w-1/2 md:hidden lg:block">
                <h1 className="font-semibold">Design Chat</h1>
                <p className="text-xs">You: Okay lang ... </p>
              </div>
              <div className="translate-y-2 md:hidden lg:block">
                <div className="bg-orange-600 rounded-full w-7 h-7 text-white font-normal flex items-center justify-center">
                  1
                </div>
              </div>

              <div className="md:hidden lg:block">
                <div className="text-slate-400">4m</div>
                <div>
                  <img className="" src="./img/pin-icon.svg" alt="" />
                </div>
              </div>
            </div>

            <div
              className="flex items-center justify-around md:justify-between text-sm"
              value={"agility"}
              onClick={sendChatId}
            >
              <div className="avatar online">
                <div className=" w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="w-1/2 md:hidden lg:block">
                <h1 className="font-semibold">Design Chat</h1>
                <p className="text-xs">You: Okay lang ... </p>
              </div>

              <div className="translate-y-2 md:hidden lg:block">
                <div className="bg-orange-600 rounded-full w-7 h-7 text-white font-normal flex items-center justify-center">
                  1
                </div>
              </div>

              <div className="md:hidden lg:block">
                <div className="text-slate-400">4m</div>
                <div>
                  <img className="" src="./img/pin-icon.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Friends;

{
  /* <div className="w-full h-80vh bg-accent overflow-y-scroll"></div> */
}
