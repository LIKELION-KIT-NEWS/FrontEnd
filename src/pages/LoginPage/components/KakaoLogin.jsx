import React from "react";
import "../components/styles/KakaoLogin.css";
//import { REST_API_KEY, REDIRECT_URL } from "./KakaoData";

const KakaoLogin = () => {
  const KakaoAuothUrl = "http://49.50.163.215/api/login/kakao";

  const handleLogin = async () => {
    window.location.href = KakaoAuothUrl;
    console.log("로그인 완료");
    try {
      const token = await extractTokenFromURL();
      if (token) {
        console.log("오류1");
        localStorage.setItem("accessToken", token);
      }
    } catch (error) {
      console.log("오류2");
      console.error("오류발생:", error);
    }
  };

  const extractTokenFromURL = async () => {
    return new Promise((resolve, reject) => {
      const token = window.location.search.split("=")[1];
      console.log(token);
      if (token) {
        resolve(token);
        console.log("오류4");
      } else {
        console.log("오류5");
        reject(new Error("Token not found in URL"));
      }
    });
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
