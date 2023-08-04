import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <img
        src={process.env.PUBLIC_URL + "/assets/logo.png"}
        style={{ width: "30%", cursor: "pointer" }}
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
          src={process.env.PUBLIC_URL + "/assets/search.png"}
          style={{ width: "90%", cursor: "pointer" }}
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
