import React from "react";
import ArticleItem from "../article-item/ArticleItem";

const ArticleContainer = ({ article, deleteView, scrapView }) => {
  return article.map((item) => {
    return (
      <div style={{ marginBottom: "1em" }}>
        <ArticleItem
          content={item}
          deleteView={deleteView}
          scrapView={scrapView}
        />
      </div>
    );
  });
};

export default ArticleContainer;
