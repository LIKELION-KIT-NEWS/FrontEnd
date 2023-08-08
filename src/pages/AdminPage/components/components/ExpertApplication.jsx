import React,{useState} from 'react';
import "./styles/ExpertApplication.css";
import ProfessorCertification from './ProfessorCertification';

//props로 데이터 받아서 map으로 뿌릴 예정
const ExpertApplication = ({profileImg,name,division,position}) => {
    const [modalShow,setModalShow] = useState(false);
    
    const confirmExpert = ()=>{
        alert("전문가 승인");
    };
    const cancelExpert = ()=>{
        alert("전문가 거부");
    };

    const openModal = ()=>{
        setModalShow(true);
    }
    const handleClose = ()=> setModalShow(false);

    return (
        <div className="ExpertApplication">
            <div id="expertImg" onClick={openModal}>
                <img src={process.env.PUBLIC_URL + '/assets/dummyProfile.png'} alt="dummyProfile" />
            </div>
            <div id="expertProfile">
                <h3>이금오</h3>
                <p>금오공과대학교</p>
                <p>화학공학과 교수</p>
                    <div id="expertBtnDiv">
                        <button type="button" className="expertBtn" onClick={confirmExpert}>수락</button>
                        <button type="button" className="expertBtn" onClick={cancelExpert}>거부</button>
                    </div>
                </div>
            <ProfessorCertification show={modalShow} hide={handleClose}/>
        </div>
    );
};

export default ExpertApplication;