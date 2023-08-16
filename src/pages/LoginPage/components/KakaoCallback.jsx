import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainPage from "../../MainPage/MainPage";

const KakaoCallback = () => {
  const location = useLocation();
  //const navigate = useNavigate;

  useEffect(() => {
    const CODE = location.search.split("=")[1];
    // console.log(CODE);
    localStorage.setItem("accessToken", CODE);
  });

  return (
    <>
      <div>
        <MainPage />
      </div>
    </>
  );
};

export default KakaoCallback;
