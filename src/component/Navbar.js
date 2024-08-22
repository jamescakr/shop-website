import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <div>
        <div className="nav-login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>Sign in</div>
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
