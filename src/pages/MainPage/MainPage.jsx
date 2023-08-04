import React from "react";
import Header from "./../../common/Header";
import Nav from "./components/navigation/Nav";
import ArticleContainer from "./../../common/article-container/ArticleContainer";

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
