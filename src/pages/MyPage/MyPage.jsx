import React from 'react';
import Header from './../../common/Header';
import SemiProfile from './components/SemiProfile';
import DetailProfile from './components/DetailProfile';
import MyScrap from './components/MyScrap';

const MyPage = () => {
    return (
        <div>
            <Header/>
            <SemiProfile/>
            <DetailProfile/>
            <MyScrap/>
        </div>
    );
};

export default MyPage;