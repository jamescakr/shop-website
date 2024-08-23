import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState();
  const [hoveredColor, setHoveredColor] = useState();
  const [hoveredSize, setHoveredSize] = useState();

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/jamescakr/shop-website/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <img src={product?.img} className="detail-main-image" />
        </Col>
        <Col>
          <div className="detail-bestseller-tag">
            {product?.bestseller && <img src="../images/bestseller-tag2.png" />}
          </div>
          <h2>
            <strong>{product?.title}</strong>
          </h2>
          <div style={{ marginBottom: 30 }}>${product?.price}</div>
          <div style={{ marginBottom: 30 }}>
            <div className="detail-color-area">
              <h5>Color</h5>
              <div style={{ marginLeft: 10 }}>{hoveredColor}</div>
            </div>

            <div>
              <button
                className="detail-color-button detail-color-button1"
                onMouseEnter={() => setHoveredColor("legacy green")} //when mouse hover in
                onMouseLeave={() => setHoveredColor("")} //when mouse hover out
              ></button>
              <button
                className="detail-color-button detail-color-button2"
                onMouseEnter={() => setHoveredColor("black")}
                onMouseLeave={() => setHoveredColor("")}
              ></button>
              <button
                className="detail-color-button detail-color-button3"
                onMouseEnter={() => setHoveredColor("white")}
                onMouseLeave={() => setHoveredColor("")}
              ></button>
            </div>
          </div>
          <div>
            <h5>Select Size</h5>
            <div>
              <button className="detail-size-button detail-size-button1">2</button>
              <button className="detail-size-button detail-size-button2">4</button>
              <button className="detail-size-button detail-size-button3">6</button>
              <button className="detail-size-button detail-size-button4">8</button>
              <button className="detail-size-button detail-size-button5">10</button>
              <button className="detail-size-button detail-size-button6">12</button>
            </div>
            <div>Size sold out? Select size to get notified</div>
          </div>
          <button className="detail-add-to-bag">ADD TO BAG</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
