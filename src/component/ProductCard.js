import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={showDetail}
    >
      <img width={320} src={isHovered ? item?.imgHover : item?.img} />
      <div>{item?.title}</div>
      <div>${item?.price}</div>
      <div
        className="card-tag"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>{item?.new && <img src="./images/new-tag.png" width={50} />}</div>
        <div>
          {item?.bestseller && <img src="./images/bestseller-tag2.png" width={90} />}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
