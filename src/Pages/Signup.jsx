import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://localhost:5005";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Object representing the request body
    const requestBody = { email, password, name };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        /* setErrorMessage(errorDescription); */
      });
  };

  return (
    <div className="signup p-8 pb-16 mb-10 mt-10 rounded-lg shadow-md flex flex-col h-full relative max-w-2xl">
      {" "}
      {/* Increased max-width to max-w-2xl */}
      <form
        onSubmit={handleSignupSubmit}
        className="grid grid-cols-1 gap-4 overflow-y-auto mt-12 px-4">
        <h3 className="text-2xl font-semibold text-white mb-6 sticky left-0">
          Sign Up
        </h3>
        <label
          htmlFor="name"
          className="text-gray-200 text-left ml-1 -mb-2 text-l font-bold">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleName}
          className="border rounded p-2 w-full mb-6 bg-gray-200 text-black"
          autoComplete="off"
        />
        <label
          htmlFor="email"
          className="text-gray-200 text-left ml-1 -mb-2 text-l font-bold">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
          className="border rounded p-2 w-full mb-6 bg-gray-200 text-black"
          autoComplete="off"
        />

        <label
          htmlFor="password"
          className="text-gray-200 text-left ml-1 -mb-2 text-l font-bold">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
          className="border rounded p-2 w-full mb-6 bg-gray-200 text-black"
          autoComplete="off"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 transition duration-150 ease-in-out">
          Create Account
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p className="mt-10 mb-2">Already have an account?</p>
      <Link
        to={"/login"}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4 transition duration-150 ease-in-out w-1/4 flex justify-center">
        Log in
      </Link>
    </div>
  );
}

export default Signup;
