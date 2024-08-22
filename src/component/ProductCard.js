import React from "react";
import { useState } from "react";

const ProductCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img width={320} src={isHovered ? item?.imgHover : item?.img} />
      <div>{item?.title}</div>
      <div>${item?.price}</div>
      <div
        className="card-tag"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          {item?.new === true ? <img src="./images/new-tag.png" width={50} /> : ""}
        </div>
        <div>
          {item?.bestseller === true ? (
            <img
              src="./images/bestseller-tag2.png"
              width={90}
              style={{ marginTop: 7, marginLeft: 180 }}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
