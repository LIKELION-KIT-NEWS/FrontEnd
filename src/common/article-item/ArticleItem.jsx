import React, { useState } from "react";
import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
  RiThumbDownLine,
  RiThumbUpLine,
  RiThumbUpFill,
  RiThumbDownFill,
} from "react-icons/ri";
import "./styles/ArticleItem.css";
import ArticleComment from "./components/article-comment/ArticleComment";
import ArticleEmoji from "./components/article-emoji/ArticleEmoji";

const ArticleItem = ({ content, deleteView, expert }) => {
  const [view, setView] = useState(false);

  const handleOpen = () => {
    setView((prev) => !prev);
  };

  return (
    <>
      {view ? (
        <div className="article-item">
          <div className="article-title">
            <span>{content.title}</span>
          </div>
          <div className="article-link">
            <span>원문보기</span>
            <span onClick={() => window.open(`${content.link}`)}>
              {content.link}
            </span>
          </div>
          <div className="article-contents">
            <p>{content.text}</p>
          </div>
          <div className="article-emoji">
            <div className="emotion">
              <ArticleEmoji
                emotion="excited"
                emotionNum={content.emotion.excited}
              />
              <ArticleEmoji
                emotion="angry"
                emotionNum={content.emotion.angry}
              />
              <ArticleEmoji
                emotion="dizzy"
                emotionNum={content.emotion.dizzy}
              />
              <ArticleEmoji
                emotion="smile"
                emotionNum={content.emotion.smile}
              />
            </div>
            <div className="trust">
              <ArticleTrust reliable="no" trustNum={content.trust.no} />
              <ArticleTrust reliable="yes" trustNum={content.trust.yes} />
            </div>
          </div>
          {/* 전문가 여부가 true 면 댓글창 보임 */}
          {expert && (
            <div className="comment-write">
              <input placeholder="댓글을 작성하세요"></input>
              <button>등록</button>
            </div>
          )}
          <div className="article-comment">
            {content.comment.map((item) => {
              return <ArticleComment item={item} />;
            })}
          </div>
          <div className="dropdown-container" onClick={handleOpen}>
            <span className="dropdown">
              <RiArrowDropUpLine size="2.5em" color="#325F95" />
            </span>
          </div>
          <div className="deleteBtn" style={{ display: `${deleteView}` }}>
            <span>삭제</span>
          </div>
        </div>
      ) : (
        <div className="article-list" onClick={handleOpen}>
          <span>{content.title}</span>
          <span className="dropdown">
            <RiArrowDropDownLine size="2.5em" color="#325F95" />
          </span>
        </div>
      )}
    </>
  );
};

const ArticleTrust = ({ reliable, trustNum }) => {
  const [trust, setTrust] = useState({
    trustClicked: false,
    trustNum: trustNum,
  });

  return (
    <div>
      <div className="trust-emoji">
        <span>{trust.trustNum}</span>
        {trust.trustClicked ? (
          <span
            onClick={() =>
              setTrust({
                trustClicked: false,
                trustNum: trust.trustNum - 1,
              })
            }
          >
            {reliable === "yes" ? (
              <RiThumbUpFill size="1.8rem" color="#325F95" />
            ) : (
              <RiThumbDownFill size="1.8rem" color="#325F95" />
            )}
          </span>
        ) : (
          <span
            onClick={() =>
              setTrust({
                trustClicked: true,
                trustNum: trust.trustNum + 1,
              })
            }
          >
            {reliable === "yes" ? (
              <RiThumbUpLine size="1.8rem" color="#325F95" />
            ) : (
              <RiThumbDownLine size="1.8rem" color="#325F95" />
            )}
          </span>
        )}
      </div>
      <span>
        {reliable === "yes" ? "신뢰할 수 없어요" : "신뢰할 수 없어요"}
      </span>
    </div>
  );
};

export default ArticleItem;
