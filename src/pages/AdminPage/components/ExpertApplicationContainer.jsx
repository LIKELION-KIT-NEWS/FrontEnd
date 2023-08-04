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
        </div>
    );
};

export default ExpertApplicationContainer;