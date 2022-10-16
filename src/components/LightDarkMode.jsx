import React from "react";
import "./lightdarkmode.css";
function LightDarkMode({ props, setProps }) {
  const handleChange = () => {
    setProps(!props);
    if (!props) {
      localStorage.setItem("Theme", "dark");
      document.body.classList.add("dark");
    } else {
      localStorage.setItem("Theme", "light");
      document.body.classList.remove("dark");
    }
  };
  // useEffect(() => {
  //   const getTheme = localStorage.getItem("Theme");
  //   if (getTheme === "dark") return document.body.classList.add("dark-mode");
  // });
  return (
    <div className="lightdarkmode">
      <button onClick={() => handleChange()}>
        Switch {props ? "dark" : "light"}
      </button>
    </div>
  );
}

export default LightDarkMode;
