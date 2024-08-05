import React from "react";

const MobileGroupInfo = () => {
  return (
    <>
      <div className="w-full  mt-2 ms-2 me-2 text-xl">
        <div>
          <h1 className="font-semibold">Group Info</h1>
        </div>
        <div className="flex flex-col justify-center h-full ">
          <div>
            <div className="join join-vertical w-full">
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title">
                  <img src="./img/gallery-icon.svg" alt="gallery" />
                </div>
                <div className="collapse-content">
                  <div className="h-20 flex flex-row gap-2 overflow-x-scroll">
                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                    >
                      <img
                        src="https://media.istockphoto.com/id/1182533976/photo/new-york-in-the-winter.jpg?s=612x612&w=0&k=20&c=YYQMPvgJI8dKI8DeSpw55x0ZAIb1Pc49UMQf34BujYo="
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_2" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://media.istockphoto.com/id/1182533976/photo/new-york-in-the-winter.jpg?s=612x612&w=0&k=20&c=YYQMPvgJI8dKI8DeSpw55x0ZAIb1Pc49UMQf34BujYo="
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90IgenpgobB0LJ_jxSMlOoxRGNWFxQvdsDA&usqp=CAU"
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90IgenpgobB0LJ_jxSMlOoxRGNWFxQvdsDA&usqp=CAU"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_4").showModal()
                      }
                    >
                      <img
                        src="https://mediaim.expedia.com/destination/1/f427509b06c39bf757f3365381c685b7.jpg"
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_4" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://mediaim.expedia.com/destination/1/f427509b06c39bf757f3365381c685b7.jpg"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                    >
                      <img
                        src="https://lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj/2021/03_19/aventador_svj_s1_m.jpg"
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_5" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj/2021/03_19/aventador_svj_s1_m.jpg"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_6").showModal()
                      }
                    >
                      <img
                        src="https://prod.rockmedialibrary.com/api/public/content/c75dce0bc2714ce8b23c20fb49628bfa?v=5fdae3b6"
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_6" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://prod.rockmedialibrary.com/api/public/content/c75dce0bc2714ce8b23c20fb49628bfa?v=5fdae3b6"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_7").showModal()
                      }
                    >
                      <img
                        src="https://t4.ftcdn.net/jpg/05/75/66/45/360_F_575664510_p3VZPFfdqZtzCAjfJ4kJuU5OUYR4NsSx.jpg"
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_7" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://t4.ftcdn.net/jpg/05/75/66/45/360_F_575664510_p3VZPFfdqZtzCAjfJ4kJuU5OUYR4NsSx.jpg"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title">
                  <img src="./img/video-icon.svg" alt="videos" />
                </div>
                <div className="collapse-content">
                  <div className="h-20 flex flex-row gap-2 overflow-x-scroll">
                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                    >
                      <img
                        src="https://media.istockphoto.com/id/1182533976/photo/new-york-in-the-winter.jpg?s=612x612&w=0&k=20&c=YYQMPvgJI8dKI8DeSpw55x0ZAIb1Pc49UMQf34BujYo="
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_2" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://media.istockphoto.com/id/1182533976/photo/new-york-in-the-winter.jpg?s=612x612&w=0&k=20&c=YYQMPvgJI8dKI8DeSpw55x0ZAIb1Pc49UMQf34BujYo="
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90IgenpgobB0LJ_jxSMlOoxRGNWFxQvdsDA&usqp=CAU"
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90IgenpgobB0LJ_jxSMlOoxRGNWFxQvdsDA&usqp=CAU"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_4").showModal()
                      }
                    >
                      <img
                        src="https://mediaim.expedia.com/destination/1/f427509b06c39bf757f3365381c685b7.jpg"
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_4" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://mediaim.expedia.com/destination/1/f427509b06c39bf757f3365381c685b7.jpg"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                    >
                      <img
                        src="https://lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj/2021/03_19/aventador_svj_s1_m.jpg"
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_5" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj/2021/03_19/aventador_svj_s1_m.jpg"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_6").showModal()
                      }
                    >
                      <img
                        src="https://prod.rockmedialibrary.com/api/public/content/c75dce0bc2714ce8b23c20fb49628bfa?v=5fdae3b6"
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_6" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://prod.rockmedialibrary.com/api/public/content/c75dce0bc2714ce8b23c20fb49628bfa?v=5fdae3b6"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_7").showModal()
                      }
                    >
                      <img
                        src="https://t4.ftcdn.net/jpg/05/75/66/45/360_F_575664510_p3VZPFfdqZtzCAjfJ4kJuU5OUYR4NsSx.jpg"
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_7" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://t4.ftcdn.net/jpg/05/75/66/45/360_F_575664510_p3VZPFfdqZtzCAjfJ4kJuU5OUYR4NsSx.jpg"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title">
                  <img src="./img/audio-icon.svg" alt="audio icon" />
                </div>
                <div className="collapse-content">
                  <div className="h-20 flex flex-row gap-2 overflow-x-scroll">
                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                    >
                      <img
                        src="https://media.istockphoto.com/id/1182533976/photo/new-york-in-the-winter.jpg?s=612x612&w=0&k=20&c=YYQMPvgJI8dKI8DeSpw55x0ZAIb1Pc49UMQf34BujYo="
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_2" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://media.istockphoto.com/id/1182533976/photo/new-york-in-the-winter.jpg?s=612x612&w=0&k=20&c=YYQMPvgJI8dKI8DeSpw55x0ZAIb1Pc49UMQf34BujYo="
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90IgenpgobB0LJ_jxSMlOoxRGNWFxQvdsDA&usqp=CAU"
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90IgenpgobB0LJ_jxSMlOoxRGNWFxQvdsDA&usqp=CAU"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_4").showModal()
                      }
                    >
                      <img
                        src="https://mediaim.expedia.com/destination/1/f427509b06c39bf757f3365381c685b7.jpg"
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_4" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://mediaim.expedia.com/destination/1/f427509b06c39bf757f3365381c685b7.jpg"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                    >
                      <img
                        src="https://lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj/2021/03_19/aventador_svj_s1_m.jpg"
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_5" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj/2021/03_19/aventador_svj_s1_m.jpg"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_6").showModal()
                      }
                    >
                      <img
                        src="https://prod.rockmedialibrary.com/api/public/content/c75dce0bc2714ce8b23c20fb49628bfa?v=5fdae3b6"
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_6" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://prod.rockmedialibrary.com/api/public/content/c75dce0bc2714ce8b23c20fb49628bfa?v=5fdae3b6"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_7").showModal()
                      }
                    >
                      <img
                        src="https://t4.ftcdn.net/jpg/05/75/66/45/360_F_575664510_p3VZPFfdqZtzCAjfJ4kJuU5OUYR4NsSx.jpg"
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_7" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://t4.ftcdn.net/jpg/05/75/66/45/360_F_575664510_p3VZPFfdqZtzCAjfJ4kJuU5OUYR4NsSx.jpg"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title">
                  <img src="./img/file-icon.svg" alt="file icon" />
                </div>
                <div className="collapse-content">
                  <div className="h-20 flex flex-row gap-2 overflow-x-scroll">
                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                    >
                      <img
                        src="https://media.istockphoto.com/id/1182533976/photo/new-york-in-the-winter.jpg?s=612x612&w=0&k=20&c=YYQMPvgJI8dKI8DeSpw55x0ZAIb1Pc49UMQf34BujYo="
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_2" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://media.istockphoto.com/id/1182533976/photo/new-york-in-the-winter.jpg?s=612x612&w=0&k=20&c=YYQMPvgJI8dKI8DeSpw55x0ZAIb1Pc49UMQf34BujYo="
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90IgenpgobB0LJ_jxSMlOoxRGNWFxQvdsDA&usqp=CAU"
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90IgenpgobB0LJ_jxSMlOoxRGNWFxQvdsDA&usqp=CAU"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_4").showModal()
                      }
                    >
                      <img
                        src="https://mediaim.expedia.com/destination/1/f427509b06c39bf757f3365381c685b7.jpg"
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_4" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://mediaim.expedia.com/destination/1/f427509b06c39bf757f3365381c685b7.jpg"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                    >
                      <img
                        src="https://lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj/2021/03_19/aventador_svj_s1_m.jpg"
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_5" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj/2021/03_19/aventador_svj_s1_m.jpg"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_6").showModal()
                      }
                    >
                      <img
                        src="https://prod.rockmedialibrary.com/api/public/content/c75dce0bc2714ce8b23c20fb49628bfa?v=5fdae3b6"
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_6" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://prod.rockmedialibrary.com/api/public/content/c75dce0bc2714ce8b23c20fb49628bfa?v=5fdae3b6"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_7").showModal()
                      }
                    >
                      <img
                        src="https://t4.ftcdn.net/jpg/05/75/66/45/360_F_575664510_p3VZPFfdqZtzCAjfJ4kJuU5OUYR4NsSx.jpg"
                        alt="view 1"
                        className="w-36 h-20 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_7" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://t4.ftcdn.net/jpg/05/75/66/45/360_F_575664510_p3VZPFfdqZtzCAjfJ4kJuU5OUYR4NsSx.jpg"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DesktopGroupInfo = ({ openFiles, setOpenFiles }) => {
  return (
    <>
      <div
        className={
          openFiles
            ? " chat-files-container flex flex-col items-end open"
            : " chat-files-container flex items-center close"
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
            <span className="material-symbols-outlined text-base-content">
              close
            </span>
          </div>
          <div className="swap-off">
            <span className="material-symbols-outlined text-white">folder</span>
          </div>
        </label>

        <div className="w-full h-56 overflow-y-scroll">
          <div className={`${openFiles ? "flex" : "hidden"} h-40vh`}>
            <h1 className="absolute top-0 m-2 font-semibold">Group Info</h1>
            <div className="join join-vertical w-full">
              <div className="collapse collapse-arrow join-item ">
                <input
                  type="radio"
                  name="my-accordion-desktop"
                  defaultChecked
                />
                <div className="collapse-title">
                  <img src="./img/gallery-icon.svg" alt="gallery" />
                </div>
                <div className="collapse-content">
                  <div className="h-24 flex flex-row gap-2 overflow-x-scroll">
                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_2desktop").showModal()
                      }
                    >
                      <img
                        src="https://media.istockphoto.com/id/1182533976/photo/new-york-in-the-winter.jpg?s=612x612&w=0&k=20&c=YYQMPvgJI8dKI8DeSpw55x0ZAIb1Pc49UMQf34BujYo="
                        alt="view 1"
                        className="w-28 h-16 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_2desktop" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://media.istockphoto.com/id/1182533976/photo/new-york-in-the-winter.jpg?s=612x612&w=0&k=20&c=YYQMPvgJI8dKI8DeSpw55x0ZAIb1Pc49UMQf34BujYo="
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_3desktop").showModal()
                      }
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90IgenpgobB0LJ_jxSMlOoxRGNWFxQvdsDA&usqp=CAU"
                        alt="view 1"
                        className="w-28 h-16 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_3desktop" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90IgenpgobB0LJ_jxSMlOoxRGNWFxQvdsDA&usqp=CAU"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_4desktop").showModal()
                      }
                    >
                      <img
                        src="https://mediaim.expedia.com/destination/1/f427509b06c39bf757f3365381c685b7.jpg"
                        alt="view 1"
                        className="w-28 h-16 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_4desktop" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://mediaim.expedia.com/destination/1/f427509b06c39bf757f3365381c685b7.jpg"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_5desktop").showModal()
                      }
                    >
                      <img
                        src="https://lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj/2021/03_19/aventador_svj_s1_m.jpg"
                        alt="view 1"
                        className="w-28 h-16 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_5desktop" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj/2021/03_19/aventador_svj_s1_m.jpg"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_6desktop").showModal()
                      }
                    >
                      <img
                        src="https://prod.rockmedialibrary.com/api/public/content/c75dce0bc2714ce8b23c20fb49628bfa?v=5fdae3b6"
                        alt="view 1"
                        className="w-28 h-16 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_6desktop" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://prod.rockmedialibrary.com/api/public/content/c75dce0bc2714ce8b23c20fb49628bfa?v=5fdae3b6"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_7desktop").showModal()
                      }
                    >
                      <img
                        src="https://t4.ftcdn.net/jpg/05/75/66/45/360_F_575664510_p3VZPFfdqZtzCAjfJ4kJuU5OUYR4NsSx.jpg"
                        alt="view 1"
                        className="w-28 h-16 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_7desktop" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://t4.ftcdn.net/jpg/05/75/66/45/360_F_575664510_p3VZPFfdqZtzCAjfJ4kJuU5OUYR4NsSx.jpg"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item ">
                <input type="radio" name="my-accordion-desktop" />
                <div className="collapse-title">
                  <img src="./img/video-icon.svg" alt="videos" />
                </div>
                <div className="collapse-content">
                  <div className="h-24 flex flex-row gap-2 overflow-x-scroll">
                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_2desktop").showModal()
                      }
                    >
                      <img
                        src="https://media.istockphoto.com/id/1182533976/photo/new-york-in-the-winter.jpg?s=612x612&w=0&k=20&c=YYQMPvgJI8dKI8DeSpw55x0ZAIb1Pc49UMQf34BujYo="
                        alt="view 1"
                        className="w-28 h-16 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_2desktop" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://media.istockphoto.com/id/1182533976/photo/new-york-in-the-winter.jpg?s=612x612&w=0&k=20&c=YYQMPvgJI8dKI8DeSpw55x0ZAIb1Pc49UMQf34BujYo="
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_3desktop").showModal()
                      }
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90IgenpgobB0LJ_jxSMlOoxRGNWFxQvdsDA&usqp=CAU"
                        alt="view 1"
                        className="w-28 h-16 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_3desktop" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90IgenpgobB0LJ_jxSMlOoxRGNWFxQvdsDA&usqp=CAU"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_4desktop").showModal()
                      }
                    >
                      <img
                        src="https://mediaim.expedia.com/destination/1/f427509b06c39bf757f3365381c685b7.jpg"
                        alt="view 1"
                        className="w-28 h-16 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_4desktop" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://mediaim.expedia.com/destination/1/f427509b06c39bf757f3365381c685b7.jpg"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_5desktop").showModal()
                      }
                    >
                      <img
                        src="https://lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj/2021/03_19/aventador_svj_s1_m.jpg"
                        alt="view 1"
                        className="w-28 h-16 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_5desktop" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj/2021/03_19/aventador_svj_s1_m.jpg"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_6desktop").showModal()
                      }
                    >
                      <img
                        src="https://prod.rockmedialibrary.com/api/public/content/c75dce0bc2714ce8b23c20fb49628bfa?v=5fdae3b6"
                        alt="view 1"
                        className="w-28 h-16 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_6desktop" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://prod.rockmedialibrary.com/api/public/content/c75dce0bc2714ce8b23c20fb49628bfa?v=5fdae3b6"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_7desktop").showModal()
                      }
                    >
                      <img
                        src="https://t4.ftcdn.net/jpg/05/75/66/45/360_F_575664510_p3VZPFfdqZtzCAjfJ4kJuU5OUYR4NsSx.jpg"
                        alt="view 1"
                        className="w-28 h-16 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_7desktop" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://t4.ftcdn.net/jpg/05/75/66/45/360_F_575664510_p3VZPFfdqZtzCAjfJ4kJuU5OUYR4NsSx.jpg"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item ">
                <input type="radio" name="my-accordion-desktop" />
                <div className="collapse-title">
                  <img src="./img/file-icon.svg" alt="videos" />
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item ">
                <input type="radio" name="my-accordion-desktop" />
                <div className="collapse-title">
                  <img src="./img/audio-icon.svg" alt="videos" />
                </div>
                <div className="collapse-content">
                  <div className="h-24 flex flex-row gap-2 overflow-x-scroll">
                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_2desktop").showModal()
                      }
                    >
                      <img
                        src="https://media.istockphoto.com/id/1182533976/photo/new-york-in-the-winter.jpg?s=612x612&w=0&k=20&c=YYQMPvgJI8dKI8DeSpw55x0ZAIb1Pc49UMQf34BujYo="
                        alt="view 1"
                        className="w-28 h-16 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_2desktop" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://media.istockphoto.com/id/1182533976/photo/new-york-in-the-winter.jpg?s=612x612&w=0&k=20&c=YYQMPvgJI8dKI8DeSpw55x0ZAIb1Pc49UMQf34BujYo="
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_3desktop").showModal()
                      }
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90IgenpgobB0LJ_jxSMlOoxRGNWFxQvdsDA&usqp=CAU"
                        alt="view 1"
                        className="w-28 h-16 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_3desktop" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90IgenpgobB0LJ_jxSMlOoxRGNWFxQvdsDA&usqp=CAU"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_4desktop").showModal()
                      }
                    >
                      <img
                        src="https://mediaim.expedia.com/destination/1/f427509b06c39bf757f3365381c685b7.jpg"
                        alt="view 1"
                        className="w-28 h-16 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_4desktop" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://mediaim.expedia.com/destination/1/f427509b06c39bf757f3365381c685b7.jpg"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_5desktop").showModal()
                      }
                    >
                      <img
                        src="https://lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj/2021/03_19/aventador_svj_s1_m.jpg"
                        alt="view 1"
                        className="w-28 h-16 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_5desktop" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj/2021/03_19/aventador_svj_s1_m.jpg"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_6desktop").showModal()
                      }
                    >
                      <img
                        src="https://prod.rockmedialibrary.com/api/public/content/c75dce0bc2714ce8b23c20fb49628bfa?v=5fdae3b6"
                        alt="view 1"
                        className="w-28 h-16 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_6desktop" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://prod.rockmedialibrary.com/api/public/content/c75dce0bc2714ce8b23c20fb49628bfa?v=5fdae3b6"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>

                    <button
                      className="btn border-none bg-transparent p-0"
                      onClick={() =>
                        document.getElementById("my_modal_7desktop").showModal()
                      }
                    >
                      <img
                        src="https://t4.ftcdn.net/jpg/05/75/66/45/360_F_575664510_p3VZPFfdqZtzCAjfJ4kJuU5OUYR4NsSx.jpg"
                        alt="view 1"
                        className="w-28 h-16 object-cover"
                      />
                    </button>
                    <dialog id="my_modal_7desktop" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <img
                          src="https://t4.ftcdn.net/jpg/05/75/66/45/360_F_575664510_p3VZPFfdqZtzCAjfJ4kJuU5OUYR4NsSx.jpg"
                          alt="view 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { MobileGroupInfo, DesktopGroupInfo };
