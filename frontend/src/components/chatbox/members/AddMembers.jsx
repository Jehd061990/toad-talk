import React from "react";

const AddMembers = () => {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button onClick={() => document.getElementById("addMember").showModal()}>
        <span className="material-symbols-outlined me-2">add</span>
      </button>
      <dialog id="addMember" className="modal">
        <div className="modal-box">
          <div className="flex flex-row justify-between">
            <h3 className="font-bold text-lg">Add Members</h3>
            <div>
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button>
                  <span className="material-symbols-outlined">close</span>
                </button>
              </form>
            </div>
          </div>
          <label className="input input-bordered flex md:hidden lg:flex items-center gap-2">
            <img
              className="md:-translate-x-10 lg:-translate-x-0"
              src="./img/search-icon.svg"
              alt=""
            />

            <input type="text" className="grow" placeholder="Search" />
          </label>
          <div className="w-full flex flex-row justify-center overflow-y-scroll">
            <div className="text-lg h-60vh  w-auto flex flex-col gap-2 ">
              <div className="form-control">
                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>

                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>

                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>

                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>
                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>
                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>
                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>
                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>
                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>
                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>
                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>
                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>
                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>

                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-row justify-end">
            <button className="btn btn-accent">Add</button>
          </div>
        </div>
      </dialog>
    </>
  );
};

const DesktopAddMember = () => {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        onClick={() => document.getElementById("addDesktopMember").showModal()}
      >
        <span className="material-symbols-outlined me-2">add</span>
      </button>
      <dialog id="addDesktopMember" className="modal">
        <div className="modal-box">
          <div className="flex flex-row justify-between">
            <h3 className="font-bold text-lg">Add Members</h3>
            <div>
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button>
                  <span className="material-symbols-outlined">close</span>
                </button>
              </form>
            </div>
          </div>
          <label className="input input-bordered flex lg:flex items-center gap-2">
            <img
              className="lg:-translate-x-0"
              src="./img/search-icon.svg"
              alt=""
            />

            <input type="text" className="grow" placeholder="Search" />
          </label>
          <div className="w-full flex flex-row justify-center overflow-y-scroll">
            <div className="text-lg h-60vh  w-auto flex flex-col gap-2 ">
              <div className="form-control">
                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>

                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>

                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>

                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>
                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>
                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>
                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>
                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>
                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>
                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>
                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>
                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>
                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>

                <label className="cursor-pointer label">
                  <div className="gap-2 flex flex-row justify-between items-center">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h2 className="w-full">Tanisha Combs</h2>
                  </div>
                  <input
                    type="checkbox"
                    className="ms-2 checkbox checkbox-accent"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-row justify-end">
            <button className="btn btn-accent">Add</button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export { DesktopAddMember, AddMembers };
