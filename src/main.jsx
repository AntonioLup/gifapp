import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import ProtectedRouter from "./pages/Auth/ProtectedRouter";
import { useAuth } from "./pages/Auth/Firebase";
const ProtectedRoute = () => {
  const user = useAuth();
  if (!user) {
    return <Navigate to={"/"} />;
  }
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LoginPage />} />
        <Route path="/home" element={<App />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
