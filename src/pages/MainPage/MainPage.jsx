import React from "react";
import "./MainPage.css";
import Nav from "./navigation/Nav";
import Header from "./../../common/Header";
import ArticleContainer from "./article-container/ArticleContainer";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Nav />
      <ArticleContainer />
    </div>
  );
};

export default MainPage;
