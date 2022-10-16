import React from "react";
import "../card.css";

const RenderGif = ({ info, addWish, props }) => (
  <div>
    <h2>Gifs List</h2>
    {info &&
      info.data.map((user) => {
        return (
          <div key={user.id} className="card-container">
            <picture>
              <span className="h3-background">
                <h3 key={user.id}>{user.title}</h3>
                <p className="texto">Texto de relleno porq no hay desc</p>
                <span className="span-rating">{user.rating}</span>
              </span>
              <img loading="lazy" src={user.images.original.url} />
              <button onClick={() => addWish(user)} className="heart">
                <span>{true ? "🤍" : "💖"}</span>
              </button>
            </picture>
          </div>
        );
      })}
  </div>
);
export default RenderGif;
