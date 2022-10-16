import React from "react";
import "../components/moregift.css";
function GoBack({ setPage }) {
  return (
    <div onClick={() => setPage("gifs")} className="back">
      <span>Go Back</span>
    </div>
  );
}

export default GoBack;
