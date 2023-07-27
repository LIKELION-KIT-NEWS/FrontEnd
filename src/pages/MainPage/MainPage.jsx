import React from 'react';
import "./MainPage.css";
import Main1 from './components/Main1';
import Header from './../../common/Header';

const MainPage = () => {
    return (
        <div>
            <Header />
                메인 페이지
                깃모지 테스트
            <Main1/>
        </div>
    );
};

export default MainPage;