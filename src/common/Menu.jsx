import React, { useEffect } from "react";
import "./Menu.css";
import { MdAccountCircle, MdOutlineClose } from "react-icons/md";

const Menu = ({ handleOpen }) => {
  useEffect(() => {
    document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <div className="container">
      <div className="menu-bar">
        <div className="close">
          <span onClick={handleOpen}>
            <MdOutlineClose color="rgb(182, 182, 182)" size="20px" />
          </span>
        </div>
        <div className="profile">
          <span>
            <MdAccountCircle color="#B1B1B1" size="100px" />
          </span>
          <div className="profile-info">
            <span>홍길동</span>
            <span>hgd@naver.com</span>
          </div>
        </div>
        <div className="category">
          <span>내 정보</span>
          <span>전문가 신청</span>
          <span>개발자 정보</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
