import React from 'react';
import "./styles/ScrapData.css";
import ArticleContainer from "../../../../common/article-container/ArticleContainer";

const ScrapData = () => {
    return (
        <div className="ScrapData">
            {/* 메인 게시글에서 사용한 템플릿 그대로 사용하기 */}
            <ArticleContainer/>
        </div>
    );
};

export default ScrapData;