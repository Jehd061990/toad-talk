import "./convo.css";

const Convo = ({ chatId, closeConvo }) => {
  // console.log(chatId);
  return (
    <>
      <div
        className={`convo flex-col items-center w-full h-full ${
          chatId !== null ? "flex" : "hidden"
        } md:flex`}
      >
        <div className="user-convo flex flex-col items-start justify-start">
          <h1 className="font-semibold">Design Chat</h1>
          <p className="text-slate-400">
            23 members, <span>10 online</span>
          </p>
          <button
            className="absolute right-0 block md:hidden"
            onClick={(e) => {
              closeConvo(null);
            }}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="convo-wrapper overflow-y-scroll">
          <div className="mx-2">
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                Anakin
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble">I hate you!</div>
              <div className="chat-footer opacity-50">Seen at 12:46</div>
            </div>

            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                molestiae! Repellat earum officia accusantium eligendi nemo
                cupiditate maiores ducimus in quaerat! Voluptate eos magni iusto
                expedita aliquam quos soluta aut consequatur libero tempore
                corporis nostrum eum praesentium ipsam porro quibusdam
                laboriosam, maxime iure est excepturi sapiente cum. Dolores,
                pariatur unde!
              </div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>

            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                Anakin
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                excepturi. Repudiandae soluta qui vero dolor, unde dolorem quo
                quasi, libero tenetur deleniti minima delectus excepturi dolorum
                hic exercitationem error reprehenderit obcaecati voluptas
                perspiciatis. Illo tempora recusandae, dolorem vero aspernatur
                error possimus praesentium sapiente esse deserunt eveniet ipsum
                sit voluptate sed rerum commodi vitae id exercitationem expedita
                iste ratione maiores vel suscipit sequi. Dolorum quo libero
                aliquam architecto reprehenderit pariatur a cupiditate itaque
                excepturi! Tempora porro id nemo ipsum illo consequuntur enim?
                Suscipit obcaecati exercitationem ullam voluptate possimus
                beatae assumenda, et animi doloribus molestias ipsa, explicabo
                nesciunt totam necessitatibus. Aspernatur, modi.
              </div>
              <div className="chat-footer opacity-50">Seen at 12:46</div>
            </div>

            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                molestiae! Repellat earum officia accusantium eligendi nemo
                cupiditate maiores ducimus in quaerat! Voluptate eos magni iusto
                expedita aliquam quos soluta aut consequatur libero tempore
                corporis nostrum eum praesentium ipsam porro quibusdam
                laboriosam, maxime iure est excepturi sapiente cum. Dolores,
                pariatur unde!
              </div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Convo;
