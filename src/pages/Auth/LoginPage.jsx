import React, { useState, useRef, useCallback } from "react";
import "./loginpage.css";
import { singup, login, logout, useAuth } from "./Firebase.jsx";
import { useNavigate } from "react-router-dom";
import LightDarkMode from "../../components/LightDarkMode";
import ProtectedRouter from "./ProtectedRouter";
import { UserContext } from "../../components/contexts/Redirect";
function LoginPage() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const navigate = useNavigate();
  async function handleSignup(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await singup(emailRef.current.value, passRef.current.value);
      navigate("/home");
    } catch (e) {
      alert(e, "NO signup");
      navigate("/");
    }
  }
  async function handleLogIn(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await login(emailRef.current.value, passRef.current.value);
      loading ? navigate("/home") : navigate("/");
    } catch (e) {
      alert(e, "NO signup");
      navigate("/");
    }
  }
  async function handleLogout(e) {
    e.preventDefault();
    setLoading(false);
    try {
      await logout();
      navigate("/");
    } catch (e) {
      alert(e, "NO logout");
    }
    setLoading({ logging: false });
  }

  return (
    <div>
      <h1>{currentUser ? "Login" : "Register"} Form</h1>
      <p>Currently logged in as: {currentUser?.email}</p>
      <form className="formfield">
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passRef} type="password" placeholder="Password" />
        {!currentUser && <button onClick={handleSignup}>Sign Up</button>}
        <button onClick={handleLogIn}>Log In</button>
        <button onClick={handleLogout}>Log Out</button>
      </form>
    </div>
  );
}

export default LoginPage;
