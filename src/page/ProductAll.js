import "../App.css";
import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log("qqqq", searchQuery);

    let url = `https://my-json-server.typicode.com/jamescakr/shop-website/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Carousel interval={2500}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/interval2.webp"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Wellbeing made easier.</h3>
              <p>
                Discover lululemon Membership, and enjoy benefits like exchanges or
                credit on sale items, early access to product drops, and partner
                perks.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/interval3.webp"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Succulent accessories, on the way.</h3>
              <p>
                New Cactus Material, in the bag. Members can shop first starting
                August 27, only on the lululemon App.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Row>
          {productList.map((item) => (
            <Col lg={3}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
