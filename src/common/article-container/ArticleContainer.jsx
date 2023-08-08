import React from "react";
import ArticleItem from "../article-item/ArticleItem";

const ArticleContainer = ({ article, deleteView, expert }) => {
  return article.map((item) => {
    return (
      <div style={{ marginBottom: "1em" }}>
        <ArticleItem content={item} deleteView={deleteView} expert={expert} />
      </div>
    );
  });
};

export default ArticleContainer;
