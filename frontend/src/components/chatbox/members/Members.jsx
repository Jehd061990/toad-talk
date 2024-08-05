import { AddMembers, DesktopAddMember } from "./AddMembers";
import { DeleteMembers, DesktopDeleteMember } from "./DeleteMembers";

const MobileMembers = () => {
  return (
    <>
      <div className="w-full m-5 text-xl">
        <div className="flex justify-between">
          <div>
            <h1 className="font-semibold mb-5">5 Members</h1>
          </div>
          <div>
            <AddMembers />
            <DeleteMembers />
          </div>
        </div>
        <div className="w-full flex flex-row justify-center overflow-y-scroll">
          <div className="text-lg h-70vh  w-auto flex flex-col gap-2 ">
            <div className="gap-2 flex flex-row justify-between items-center">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <h2 className="w-full">Tanisha Combs</h2>
              <span className="text-accent">admin</span>
            </div>

            <div className="gap-2 flex flex-row justify-between items-center">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <h2 className="w-full">Tanisha Combs</h2>
              <span></span>
            </div>

            <div className="gap-2 flex flex-row justify-between items-center">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <h2 className="w-full">Tanisha Combs</h2>
              <span></span>
            </div>

            <div className="gap-2 flex flex-row justify-between items-center">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <h2 className="w-full">Tanisha Combs</h2>
              <span></span>
            </div>

            <div className="gap-2 flex flex-row justify-between items-center">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <h2 className="w-full">Tanisha Combs</h2>
              <span></span>
            </div>

            <div className="gap-2 flex flex-row justify-between items-center">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <h2 className="w-full">Tanisha Combs</h2>
              <span></span>
            </div>

            <div className="gap-2 flex flex-row justify-between items-center">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <h2 className="w-full">Tanisha Combs</h2>
              <span></span>
            </div>

            <div className="gap-2 flex flex-row justify-between items-center">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <h2 className="w-full">Tanisha Combs</h2>
              <span></span>
            </div>

            <div className="gap-2 flex flex-row justify-between items-center">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <h2 className="w-full">Tanisha Combs</h2>
              <span></span>
            </div>

            <div className="gap-2 flex flex-row justify-between items-center">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <h2 className="w-full">Tanisha Combs</h2>
              <span></span>
            </div>

            <div className="gap-2 flex flex-row justify-between items-center">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <h2 className="w-full">Tanisha Combs</h2>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DesktopMembers = ({ openMembers, setOpenMembers }) => {
  return (
    <>
      <div
        className={`relative chat-members-container flex ${
          openMembers ? "flex-col items-end open" : "items-center close"
        }`}
      >
        <label
          className="swap"
          onChange={() => {
            setOpenMembers(!openMembers);
          }}
        >
          <input type="checkbox" />
          <div className="swap-on">
            <span className="material-symbols-outlined text-base-content">
              close
            </span>
          </div>
          <div className="swap-off">
            <span className="material-symbols-outlined text-white">group</span>
          </div>
        </label>

        <div
          className={`self-center w-full ${openMembers ? "block" : "hidden"}`}
        >
          <div className="my-2 text-md">
            <div className="absolute top-0 left-0 m-2">
              <h1 className="font-semibold mb-5">5 Members</h1>
            </div>
            <div className="w-full absolute bottom-0 flex gap-5 justify-center">
              <DesktopAddMember />
              <DesktopDeleteMember />
            </div>
            <div className="w-full flex flex-row justify-center overflow-y-scroll">
              <div className="text-sm h-30vh  w-auto flex flex-col gap-2 ">
                <div className="gap-2 flex flex-row justify-between items-center">
                  <div className="avatar">
                    <div className="w-14 rounded-full">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <h2 className="w-full">Tanisha Combs</h2>
                  <span className="text-accent">admin</span>
                </div>

                <div className="gap-2 flex flex-row justify-between items-center">
                  <div className="avatar">
                    <div className="w-14 rounded-full">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <h2 className="w-full">Tanisha Combs</h2>
                  <span></span>
                </div>

                <div className="gap-2 flex flex-row justify-between items-center">
                  <div className="avatar">
                    <div className="w-14 rounded-full">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <h2 className="w-full">Tanisha Combs</h2>
                  <span className="text-accent">admin</span>
                </div>

                <div className="gap-2 flex flex-row justify-between items-center">
                  <div className="avatar">
                    <div className="w-14 rounded-full">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <h2 className="w-full">Tanisha Combs</h2>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { MobileMembers, DesktopMembers };
