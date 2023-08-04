import React,{useState} from 'react';
import "./styles/CertificateForm.css";

const CertificateForm = () => {
    const [showImages, setShowImages] = useState([]);
    const [data,setData] = useState({
        name:"",
        position:"",
        division:""
    });
    const formData = new FormData();

    // 이미지 업로드 input의 onChange
    const handleAddImages = (event) => {
        const imageLists = event.target.files;
        let imageUrlLists = [...showImages];
    
        for (let i = 0; i < imageLists.length; i++) {
          const currentImageUrl = URL.createObjectURL(imageLists[i]);
          imageUrlLists.push(currentImageUrl);
        }
    
        if (imageUrlLists.length > 10) {
          imageUrlLists = imageUrlLists.slice(0, 10);
        }
    
        setShowImages(imageUrlLists);
      };

    const clickSubmit = ()=>{
        formData.append("name",)
    };

    return (
        <div className="CertificateForm">
            <section id="formTitle">
                전문가 신청
            </section>
            <section className="formInfor formUnberLine">
                <div className="formLabel">
                    이름
                </div>
                <input type="text" className="formData" />
            </section>
            <section className="formInfor formUnberLine">
                <div className="formLabel">
                    소속
                </div>
                <input type="text" className="formData" />
            </section>
            <section className="formInfor formUnberLine">
                <div className="formLabel">
                    직급
                </div>
                <input type="text" className="formData" />
            </section>
            <section className="formInfor formUnberLine">
                <div className="formLabel">
                    증빙서류
                </div>
                <section type="text" className="formMsg" >최대한 많이 첨부해주세요 !</section>
            </section>
            <section className="formInfor">
                <input type="file" onChange={handleAddImages} />
                <div id="imgFileDiv">
                    {showImages.map((image, id) => (
                    <div className="imgMapDiv" key={id}>
                        <img className="imgFile" src={image} alt={`${image}-${id}`} />
                    </div>
                    ))}
                </div>
            </section>

            <button type="button" id="certificateSubmit" onClick={clickSubmit}>제출</button>
        </div>
    );
};

export default CertificateForm;