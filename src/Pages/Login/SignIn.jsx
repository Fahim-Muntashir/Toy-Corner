import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SignIn = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const handleSignIn = (event) => {
    event.preventDefault();
    signIn(email, password);
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/5560035/pexels-photo-5560035.jpeg')",
            }}
          ></div>
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center text-yellow-300">
              Welcome Back!
            </h3>
            <form
              onSubmit={handleSignIn}
              className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
            >
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="email"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  id="checkbox_id"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className="text-sm" htmlFor="checkbox_id">
                  Remember Me
                </label>
              </div>
              <div className="mb-6 text-center">
                <input
                  type="submit"
                  className="w-full px-4 py-2 font-bold text-white bg-yellow-500 rounded-full hover:bg-yellow-400 focus:outline-none focus:shadow-outline"
                  value="Sign In"
                />
              </div>
              <button
                onClick={signInWithGoogle}
                type="button"
                class="w-full px-4 py-2 font-bold text-white dark:bg-gray-900 rounded-full hover:bg-yellow-400 focus:outline-none focus:shadow-outline"
              >
                Sign in with <span className="text-orange-400">Google</span>
              </button>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <Link
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  to="/signup"
                >
                  Create an Account!
                </Link>
              </div>
              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
