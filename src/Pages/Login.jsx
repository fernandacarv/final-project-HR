import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/auth.context";

const API_URL = "https://finalproject-hr-server.onrender.com";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/user");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleLoginSubmit}
          className="grid grid-cols-1 gap-4 overflow-y-auto mt-12 px-4">
          <label
            htmlFor="email"
            className="text-gray-200 text-left ml-1 -mb-2 text-l font-bold">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={handleEmail}
            className="border rounded p-2 w-full mb-6 bg-gray-200 text-black"
          />

          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-gray-200 text-left ml-1 -mb-2 text-l font-bold">
              Password
            </label>
            {/* <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-blue-600 hover:text-blue-500"
              >
                Forgot password?
              </a>
            </div> */}
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={handlePassword}
            className="border rounded p-2 w-full mb-6 bg-gray-200 text-black"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 transition duration-150 ease-in-out">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
