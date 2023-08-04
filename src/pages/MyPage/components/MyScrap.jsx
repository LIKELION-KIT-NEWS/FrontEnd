import React from 'react';
import "./styles/MyScrap.css";
import ScrapData from './ScrapData';

const MyScrap = () => {
    return (
        <div className="MyScrap">
            <section id="MyScarpTitle">
                저장한 기사
            </section>
            <ScrapData/>
            <ScrapData/>
        </div>
    );
};

export default MyScrap;