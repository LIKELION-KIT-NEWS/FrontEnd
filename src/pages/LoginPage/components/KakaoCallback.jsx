import React, { useEffect } from "react";
import Header from "../../../common/Header";
import { useLocation, useNavigate } from "react-router-dom";

import axios from "axios";

const KakaoCallback = () => {
  const location = useLocation();
  const navigate = useNavigate;

  useEffect(() => {
    const CODE = location.search.split("=")[1];

    axios
      .get(`http://localhost:3000/?token=${CODE}`)
      .then((res) => {
        window.location.href = `http://localhost:3000/?token=${CODE}`;
        const ACCESS_TOKEN = location.search.split("=")[1];
        localStorage.setItem("access_token", ACCESS_TOKEN);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <Header />
    </div>
  );
};

export default KakaoCallback;
