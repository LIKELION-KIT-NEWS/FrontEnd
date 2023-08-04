import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <img
        id="headerLogo"
        src={process.env.PUBLIC_URL + "/assets/logo.png"}
        alt="logo"
        onClick={() => navigate("/")}
      />
      <input
        type="text"
        id="headerInput"
        name="headerInput"
        placeholder="제목을 입력하세요"
      />
      <button id="submit" type="submit">
        <img
          id="search"
          src={process.env.PUBLIC_URL + "/assets/search.png"}
          alt="submitBtn"
        />
      </button>
      <img
        id="menu"
        src={process.env.PUBLIC_URL + "/assets/menu.png"}
        alt="menu"
      />
    </div>
  );
};

export default Header;
