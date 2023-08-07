import React,{useState} from 'react';
import "./styles/CertificateForm.css";

const CertificateForm = () => {
    const [showImages, setShowImages] = useState([]);
    const [data,setData] = useState({
        name:"",
        position:"",
        division:""
    });
   

    // 이미지 업로드 input의 onChange
    const handleAddImages = (e) => {
        const imageLists = e.target.files;
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

    const clickSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name);
        formData.append("position",data.position);
        formData.append("division",data.division);

        //axios통신
    };
    const handleChange = (e) => {
        setData(e.target.value);
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
                <input type="text" className="formData" name="name" onChange={handleChange} />
            </section>
            <section className="formInfor formUnberLine">
                <div className="formLabel">
                    소속
                </div>
                <input type="text" className="formData" name="divison" onChange={handleChange} />
            </section>
            <section className="formInfor formUnberLine">
                <div className="formLabel">
                    직급
                </div>
                <input type="text" className="formData" name="position" onChange={handleChange} />
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