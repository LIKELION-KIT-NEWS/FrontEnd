import React, { useEffect } from "react";
import Header from "../../../common/Header";
import { REST_API_KEY, REDIRECT_URL } from "./KakaoData";
import axios from "axios";

const KakaoCallback = () => {
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams; // code를 받기 위해 URL에서 code 부분만 짤라오기
    const code = params.get("code");
    const grant_type = "authorization_code";

    axios // Access token / Refresh Token 받는 과정
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&code=${code}`,
        {},
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default KakaoCallback;
