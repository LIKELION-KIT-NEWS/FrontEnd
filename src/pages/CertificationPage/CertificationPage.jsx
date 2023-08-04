import React from 'react';
import Header from '../../common/Header';
import "./CertificationPage.css";
import CertificateForm from './components/CertificateForm';

const CertificationPage = () => {
    return (
        <div className="CertificationPage">
            <Header/>
            <CertificateForm/>
        </div>
    );
};

export default CertificationPage;