import React, { useState } from "react";
import "./styles/Nav.css";

const Nav = () => {
  const menu = [
    "정치",
    "경제",
    "사회",
    "생활문화",
    "IT과학",
    "세계",
    "오피니언",
  ];
  const [click, setClick] = useState("정치");

  return (
    <div className="navbar">
      {menu.map((item) => {
        return (
          <span
            onClick={() => setClick(`${item}`)}
            style={
              item === click
                ? {
                    fontWeight: "bold",
                    color: "#325F95",
                    borderBottom: "3px solid #325F95",
                  }
                : {}
            }
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default Nav;
