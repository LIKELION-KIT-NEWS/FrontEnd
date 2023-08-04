import React from "react";
import Header from "./../../common/Header";
import KakaoLogin from "./components/KakaoLogin";
import Advertisement from "./components/Advertisement";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <KakaoLogin />
      <Advertisement />
    </div>
  );
};

export default LoginPage;
