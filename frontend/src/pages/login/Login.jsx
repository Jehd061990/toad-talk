import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [seenPw, setSeenPw] = useState(false);
  const pwVisibilityBtn = () => {
    setSeenPw(!seenPw);
  };
  return (
    <div className="container grid items-center mx-auto h-100vh secondary-font">
      <div className="mx-auto card text-neutral-content w-96 h-fit bg-green-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-none">
        <div className="card-body items-center text-center">
          <h2 className="primary-font card-title text-accent text-2xl">
            ToadTalk
          </h2>
          <p className="secondary-font">Log-In</p>

          <div className="grid grid-cols-1 gap-8 py-5 relative w-80 text-success">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type={seenPw ? "text" : "password"} />
            </label>
            <span className="see-pw -translate-y-5">
              {console.log(seenPw)}
              <label className="swap" onChange={pwVisibilityBtn}>
                <input type="checkbox" />
                <div className="swap-on">
                  <span className="material-symbols-outlined text-accent">
                    visibility
                  </span>
                </div>
                <div className="swap-off">
                  <span className="material-symbols-outlined text-success">
                    visibility_off
                  </span>
                </div>
              </label>
            </span>
          </div>

          <div className="w-80 grid justify-start py-2">
            <Link to={"/signup"} className="link link-hover -translate-y-4">
              Don't have an account?
            </Link>
            <button className="btn btn-primary">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;