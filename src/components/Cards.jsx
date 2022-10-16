import React from "react";
import { useState } from "react";
import "./card.css";
import RenderGif from "./childrens/RenderGifs";
import RenderWishGif from "./childrens/RendreWishGifs";
const PAGE_GIF = "gifs";
const PAGE_WISH = "gifwish";
const Cards = ({ info, props, setProps, page, setPage }) => {
  function addWish(user) {
    setProps([...props, { ...user }]);
  }
  function cleargifs() {
    setProps([]);
  }
  function navigateTo(nextPage) {
    setPage(nextPage);
  }
  function removeGif(userToRemove) {
    setProps(props.filter((user) => user != userToRemove));
  }

  return (
    <div className="card">
      {page === PAGE_GIF && <RenderGif info={info} addWish={addWish} />}
      {page === PAGE_WISH && (
        <RenderWishGif
          cleargifs={cleargifs}
          removeGif={removeGif}
          props={props}
        />
      )}
    </div>
  );
};

export default Cards;
