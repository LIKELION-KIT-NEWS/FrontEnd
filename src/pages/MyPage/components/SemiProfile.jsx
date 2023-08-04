import React from "react";
import "./styles/SemiProfile.css";

const SemiProfile = () => {
    return (
        <div className="SemiProfile">
            {/* 추후 통신 이후 통신 데이터로 변경 */}
            <img src={process.env.PUBLIC_URL + '/assets/dummyProfile.png'} alt="dummyProfile" />
            <div id="nameEmail">
                <h2>이태헌</h2>
                <p>forever296@naver.com</p>
            </div>
            {/* 추후 통신 이후 통신 데이터로 변경 */}
        </div>
    );
};

export default SemiProfile;