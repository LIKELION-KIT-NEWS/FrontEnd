import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className="Header">
            <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="logo" />
            헤더
        </div>
    );
};

export default Header;