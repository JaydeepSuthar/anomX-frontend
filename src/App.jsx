import { useEffect } from "react";
import { Route, Routes, useNavigate,useLocation } from "react-router-dom";

import { setAuthToken } from "./lib/client";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import NotFound from "./pages/NotFound";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token && !location.pathname.includes('register')) {
      navigate("/login");
    }

    setAuthToken(token);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
