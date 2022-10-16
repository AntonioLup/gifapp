import React from "react";
import { useNavigate } from "react-router-dom";
import "./logout.css";
function LogOut() {
  const navigate = useNavigate();
  return (
    <div className="logout">
      <button onClick={() => navigate("/")}>Log Out</button>
    </div>
  );
}

export default LogOut;
