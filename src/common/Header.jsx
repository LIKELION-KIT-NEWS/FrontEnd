import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="logo" />
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
