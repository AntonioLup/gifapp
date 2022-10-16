import React from "react";
import "../card.css";
const RenderWishGif = ({ removeGif, props, cleargifs, setProps }) => (
  <>
    <h2>Wish List</h2>
    <button onClick={cleargifs}>Clear Gifs</button>
    {props &&
      props?.map((user, idx) => (
        <div key={idx} className="card-container">
          <picture>
            <span className="h3-background">
              <h3 key={user.id}>{user.title}</h3>
              <p className="texto">Texto de relleno porq no hay desc</p>
              <span className="span-rating">{user.rating}</span>
            </span>
            <img loading="lazy" src={user.images.original.url} />
            <button onClick={() => removeGif(user)} className="heart">
              <span>{"❌"}</span>
            </button>
          </picture>
        </div>
      ))}
  </>
);
export default RenderWishGif;
