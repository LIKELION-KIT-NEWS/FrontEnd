import React from 'react';
import Header from './../../common/Header';
import ExpertApplicationContainer from './components/ExpertApplicationContainer';
import ArticleContainer from "../../common/article-container/ArticleContainer";

const AdminPage = () => {
    return (
        <div className="AdminPage">
            <Header/>
            <ExpertApplicationContainer/>
            <ArticleContainer />
        </div>
    );
};

export default AdminPage;