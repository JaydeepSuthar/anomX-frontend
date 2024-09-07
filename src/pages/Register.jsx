import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import HttpClient, { setAuthToken } from "../lib/client";
import { AxiosError } from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");


  const resetForm = () => {
    setUsername("");
    setName("");
    setPassword("");
  };

  /** @param {React.ChangeEvent<HTMLInputElement>} evt */
  const onChangeHandler = (evt) => {
    const { name, value } = evt.target || {};

    if (name === "username") setUsername(value);
    else if (name === "password") setPassword(value);
    else if (name === "name") setName(value);
  };

  /**
   * Handle Login
   * @param {React.FormEvent<HTMLFormElement>} evt
   */
  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const response = await HttpClient.post("/register", {
        name,
        username,
        password,
      });

      if (response.status !== 200) {
        resetForm();
        setError("Please Provide Valid Credentails");
        return;
      }

      console.log("response =>", response.data);
      const token = response.data?.token;
      setAuthToken(token);
      localStorage.setItem("token", token);
      navigate("/", {state: response.data?.data});

      resetForm();
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err?.response?.data?.message);
      }
      resetForm();
    }
  };

  // if (token) null;

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div
          id="login_form"
          className="border rounded-md border-gray-100 py-10 px-8 shadow-2xl bg-white"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-6 flex flex-col">
              <span className="font-bold text-4xl">Welcome to AnomX</span>
              <span className="text-gray-400 text-center text-lg mt-2">
                Freedom of Speech
              </span>
            </div>

            <div className="m-4 flex flex-col gap-4">
              <div className="max-w-full">
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your anonymous name"
                  id="name"
                  className="w-full border rounded-md p-2 px-4"
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="max-w-full">
                <input
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  id="username"
                  className="w-full border rounded-md p-2 px-4"
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="max-w-full">
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  id="password"
                  className="w-full border rounded-md p-2 px-4"
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="max-w-full flex justify-between items-center">
                <button
                  className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                  type="submit"
                >
                  Register
                </button>
              </div>

              <span className="text-sm">
                Already have an account{" "}
                <Link className="text-blue-600" to="/login">
                  login
                </Link>
              </span>

              <span className="text-sm text-red-500">
                {error.length > 0 ? error : ""}
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
