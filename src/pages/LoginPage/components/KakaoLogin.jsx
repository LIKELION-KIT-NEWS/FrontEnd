import React from "react";
import "../components/styles/KakaoLogin.css";
import { REST_API_KEY, REDIRECT_URL } from "./KakaoData";

const KakaoLogin = () => {
  const KakaoAuothUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&prompt=select_account`;

  const handleLogin = () => {
    window.location.href = KakaoAuothUrl;
  };

  return (
    <div className="KakaoLogin">
      <emoji id="emoji">📰</emoji>
      <header>
        <strong>뉴스재판</strong>
      </header>
      <article>대한민국의 뉴스를 요약해서 보세요!</article>
      <button id="kakaoBtn" onClick={handleLogin}>
        <img src={process.env.PUBLIC_URL + "/assets/kakao.png"} alt="kakao" />
      </button>
    </div>
  );
};

export default KakaoLogin;