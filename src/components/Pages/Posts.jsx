import { useState } from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  return (
    <div>
      <div className="PostsHeader">
        <h4>Sightseeing in the World</h4>
        <p>
          Let us discuss some of the things you can see in some of these places
        </p>
      </div>
      <div>
        <Link to="/SightJp">
          <img
            className="Vending"
            alt=""
            src="https://int.japanesetaste.com/cdn/shop/articles/japanese-vending-machines-101-the-ultimate-guide-japanese-taste.jpg?v=1707915314&width=5760"
          />
        </Link>
        <div className="Posts-text">
          <p>A unusual amount of Vending machines in Japan .</p>
          <p>Let´s talk about it. Click the Picture.</p>
        </div>
      </div>
    </div>
  );
}
