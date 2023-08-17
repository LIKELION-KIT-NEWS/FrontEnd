import React,{useState} from 'react';
import "./styles/DetailProfile.css";
import axios from 'axios';

const DetailProfile = () => {
    const [fixNick,setFixNick] = useState(false);
    const [nickname,setNickname] = useState("");
    const headers = {
        'Content-Type' : 'application/json',
        'Authorization' : "Bearer "+ localStorage.getItem("accessToken")
    };
    
    const fixNickName = ()=>{
        setFixNick(true);
    };
    const ConfirmNickName = ()=>{
        alert("닉네임 변경 통신");
        setFixNick(false);
        axios.patch(`http://49.50.163.215/api/nickname`,{
            nickname:nickname
        },headers)
        .then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
    const handleNick = (e)=>{
        setNickname(e.target.value);
    };

    return (
        <div className="DetailProfile">
            <section id="detailTitle">
                내 프로필
            </section>
            <section className="detailInfor">
                <div className="detailLabel">
                    이름
                </div>
                <div className="detailData">
                    이태헌
                </div>
                <button className="hiddenBtn">수정</button>
            </section>
            <section className="detailInfor detailCenter">
                <div className="detailLabel">
                    닉네임
                </div>
                {
                    (fixNick) ?
                    <>
                        <input type="text" id="nickName" name="nickName" onChange={handleNick} placeholder='닉네임 입력'/>
                        <button type="button" onClick={ConfirmNickName}>확인</button>
                    </>
                    : 
                    <>
                        <div className="detailData">
                            태헌e
                        </div>
                        <button type="button" onClick={fixNickName}>수정</button>
                    </>
                }
                
                
            </section>
            <section className="detailInfor">
                <div className="detailLabel">
                    메일
                </div>
                <div className="detailData">
                    forever296@naver.com
                </div>
                <button type="button" className="hiddenBtn">수정</button>
            </section>
        </div>
    );
};

export default DetailProfile;