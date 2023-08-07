import React from 'react';
import "./styles/ExpertApplicationContainer.css";
import ExpertApplication from './components/ExpertApplication';

const ExpertApplicationContainer = () => {
    return (
        <div className="ExpertApplicationContainer">
            <ExpertApplication />
            <ExpertApplication />
            <ExpertApplication />
            <ExpertApplication />
            {/* 페이지네이션 구현 하기 */}

        </div>
    );
};

export default ExpertApplicationContainer;