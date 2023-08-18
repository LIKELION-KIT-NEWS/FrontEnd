import React, { useEffect, useState } from "react";
import "./Menu.css";
import { MdAccountCircle, MdOutlineClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Menu = ({ handleOpen }) => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState([]);

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("accessToken")}`;

  const headers = {
    "Content-Type": "application/json",
  };

  axios
    .get("http://49.50.163.215/api/user-info", {
      headers: headers,
    })
    .then((res) => {
      setUserInfo(res.data);
      //console.log(userInfo);
    });

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

  const handleLogout = () => {
    window.localStorage.removeItem("accessToken");
    navigate("/");
  };

  const Mypage = () => {
    navigate("/My");
  };

  return (
    <div className="container">
      <div className="menu-bar">
        <div>
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
              <span>{userInfo.name}</span>
              <span>{userInfo.email}</span>
            </div>
          </div>
          <div className="category">
            <span onClick={Mypage}>내 정보</span>
            <span>전문가 신청</span>
            <span>개발자 정보</span>
          </div>
        </div>
        <div className="logout">
          <span onClick={handleLogout}>로그아웃</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
