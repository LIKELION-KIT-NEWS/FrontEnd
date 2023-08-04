import React, { useState } from "react";
import { RiThumbUpLine, RiThumbUpFill } from "react-icons/ri";
import "./styles/ArticleComment.css";

const ArticleComment = ({ item }) => {
  const [thumbs, setThumbs] = useState({
    thumbs: false,
    thumbsNum: item.thumbs,
  });
  return (
    <div className="comment-item">
      <span>{item.name}</span>
      <span>{item.text}</span>
      <div className="comment-thumbs">
        <span>{thumbs.thumbsNum}</span>
        {thumbs.thumbs ? (
          <span
            onClick={() => {
              setThumbs({
                thumbs: false,
                thumbsNum: thumbs.thumbsNum - 1,
              });
            }}
          >
            <RiThumbUpFill size="1.2rem" color="#325F95" />
          </span>
        ) : (
          <span
            onClick={() => {
              setThumbs({
                thumbs: true,
                thumbsNum: thumbs.thumbsNum + 1,
              });
            }}
          >
            <RiThumbUpLine size="1.2rem" color="#325F95" />
          </span>
        )}
      </div>
    </div>
  );
};

export default ArticleComment;
