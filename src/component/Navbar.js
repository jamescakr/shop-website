import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, InputGroup, Button } from "react-bootstrap";

const Navbar = () => {
  const menuList = [
    "WOMEN",
    "MEN",
    "ACCESSORIES",
    "SHOES",
    "BACK TO SCHOOL",
    "H&M Home",
    "ON SALE",
  ];

  return (
    <div>
      <div>
        <div className="nav-login-button">
          <FontAwesomeIcon icon={faUser} />
          <div>Login</div>
        </div>
      </div>
      <div className="nav-logo">
        <img width={220} src="images/logo2.webp" />
      </div>
      <div className="nav-menu-area">
        <ul className="nav-menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <InputGroup className="nav-search-bar">
          <FormControl placeholder="Search Items" />
          <Button variant="outline-secondary">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default Navbar;
