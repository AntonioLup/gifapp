import React from "react";
import Loading from "./Loading";
import "./moregift.css";
function MoreGift({ setProps, props }) {
  return (
    <>
      {props < 5 ? (
        <div
          onClick={() => {
            setTimeout(() => {
              setProps(props + 1);
            }, 500);
          }}
          className="moregift"
        >
          <p>More Gif</p>
        </div>
      ) : null}
      {props > 1 ? (
        <div
          onClick={() => {
            setTimeout(() => {
              setProps(props - 1);
            }, 500);
          }}
          className="moregift"
        >
          <p>Less Gif</p>
        </div>
      ) : null}
    </>
  );
}

export default MoreGift;
