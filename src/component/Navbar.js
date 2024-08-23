import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faBagShopping,
  faSearch,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, InputGroup, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const menuList = ["WOMEN", "MEN", "ACCESSORIES", "New Arrival"];

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    setAuthenticate(false);
    navigate("/");
  };

  const goToMain = () => {
    navigate("/");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="nav-logo">
          <img
            width={150}
            src="images/logo2.webp"
            alt="main logo"
            onClick={goToMain}
          />
        </div>
        <div className="nav-menu-area">
          <ul className="nav-menu-list">
            {menuList.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>
          <InputGroup className="nav-search-bar">
            <InputGroup.Text>
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
            <FormControl placeholder="Search" onKeyDown={(event) => search(event)} />
          </InputGroup>
        </div>
        <div className="nav-account-area">
          <div
            className="nav-login-button"
            onClick={authenticate ? handleLogout : goToLogin}
          >
            <FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "30px" }} />
            <div>{authenticate ? "Sign Out" : "Sign In"}</div>
          </div>
          <div className="nav-heart-button">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className="nav-bag-button">
            <FontAwesomeIcon icon={faBagShopping} />
          </div>
        </div>
        <div
          className="nav-hamburger"
          onClick={() => setShowSideMenu(!showSideMenu)}
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ fontSize: "30px", color: "rgb(101, 203, 46)", marginLeft: 30 }}
          />
        </div>
      </Container>

      {showSideMenu && (
        <div className="nav-side-menu">
          <div className="nav-side-menu-header">
            <FontAwesomeIcon icon={faTimes} onClick={() => setShowSideMenu(false)} />
          </div>
          <ul className="nav-side-menu-list">
            {menuList.map((menu) => (
              <li key={menu}>{menu}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
