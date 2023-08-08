import React,{useState} from "react";
import "./styles/SemiProfile.css";
import { useNavigate } from 'react-router-dom';

const SemiProfile = () => {
    const navigate = useNavigate();
    const [proState,setProState] = useState(3);

    const goCertification = ()=>{
        navigate("/certificate");
    };
    return (
        <div className="SemiProfile">
            
            {/* 추후 통신 이후 통신 데이터로 변경 */}
            <img src={process.env.PUBLIC_URL + '/assets/dummyProfile.png'} alt="dummyProfile" />
            <div id="nameEmail">
                <h2>이태헌</h2>
                <p>forever296@naver.com</p>
            </div>

            {
                (proState) === 0 ?
                <div className="professorState4">
                    일반 사용자
                </div>: (proState) === 1 ?
                <div className="professorState1">
                    전문가 승인 대기
                </div> : (proState) === 2 ?
                <div className="professorState2">
                    전문가 인증
                </div> :
                <div className="professorState3" onClick={goCertification}>
                    전문가 승인 거부
                </div>
            }
            {/* 추후 통신 이후 통신 데이터로 변경 */}
            
        </div>
    );
};

export default SemiProfile;