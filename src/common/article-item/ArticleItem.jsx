import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import "./styles/ArticleItem.css";
import ArticleComment from "./components/article-comment/ArticleComment";
import ArticleEmoji from "./components/article-emoji/ArticleEmoji";
import axios from "axios";
import ArticleTrust from "./components/article-trust/ArticleTrust";
import ConfirmModal from "../confirmModal/ConfirmModal";

const localhost = "http://49.50.163.215";

const ArticleItem = ({ content, deleteView }) => {
  const [view, setView] = useState(false);
  const [modal, setModal] = useState(false);
  const [emotion, setEmotion] = useState({
    newsId: 0,
    emotionCounts: {
      LIKE: 0,
      DISLIKE: 0,
    },
    trustEmotionCounts: {
      SUSPICIOUS: 0,
      TRUSTWORTHY: 0,
    },
    userNewsEmotionInfo: {
      userClickEmotionType: null,
      userClicked: false,
    },
    userNewsTrustEmotionInfo: {
      userClickEmotionType: null,
      userClicked: false,
    },
  });
  const [comment, setComment] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    nickname: "",
  });
  const [commentWrite, setCommentWrite] = useState("");

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
    };
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("accessToken")}`;

    axios
      .get(`${localhost}/api/news/${content.newsId}/emotions`, headers)
      .then((res) => {
        setEmotion(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${localhost}/api/news/${content.newsId}/comment`, headers)
      .then((res) => {
        console.log(res.data.data);
        setComment(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${localhost}/api/user-info`, headers)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (view) {
      setView(true);
    } else {
      setTimeout(() => {
        setView(false);
      }, 600);
    }
  }, [view]);

  const handleOpen = () => {
    setView((prev) => !prev);
  };

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  const handleScrap = () => {
    const headers = {
      "Content-Type": "application/json",
    };
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("accessToken")}`;

    axios
      .post(`${localhost}/api/news/clip/${content.newsId}`, null, headers)
      .then((res) => {
        console.log(res);
        setModal(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCommentWrite = () => {
    const headers = {
      "Content-Type": "multipart/form-data",
    };

    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("accessToken")}`;

    const formData = new FormData();
    formData.append("content", commentWrite);

    if (commentWrite !== null) {
      axios
        .post(
          `${localhost}/api/news/${content.newsId}/comment`,
          formData,
          headers
        )
        .then((res) => {
          console.log(res);
          axios
            .get(`${localhost}/api/news/${content.newsId}/comment`, headers)
            .then((res) => {
              setCommentWrite("");
              setComment(res.data.data);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("content null");
    }
  };

  return (
    <>
      {view ? (
        <div
          className={`${
            view ? "article-item-fade-in" : "article-item-fade-out"
          }`}
        >
          <div className="article-title">
            <span>{content.title}</span>
          </div>
          <div className="article-info">
            <div className="article-scrap">
              <span onClick={handleScrap}>스크랩</span>
              {modal && (
                <ConfirmModal
                  handleModal={handleModal}
                  content="스크랩 되었습니다."
                />
              )}
            </div>
            <div className="article-link">
              <span>원문보기</span>
              <span onClick={() => window.open(`${content.link}`)}>
                {content.link}
              </span>
            </div>
          </div>

          <div className="article-contents">
            <p>{content.summary}</p>
          </div>
          <div className="article-emoji">
            <div className="emotion">
              <ArticleEmoji emotion={emotion} />
            </div>
            <div>
              <ArticleTrust emotion={emotion} />
            </div>
          </div>
          {/* 전문가 여부가 true 면 댓글창 보임 */}
          <div className="comment-write">
            <input
              value={commentWrite}
              placeholder="댓글을 작성하세요"
              onChange={(e) => {
                setCommentWrite(e.target.value);
              }}
            ></input>
            <button onClick={handleCommentWrite}>등록</button>
          </div>
          <div className="article-comment">
            {comment.map((item) => {
              return (
                <ArticleComment
                  newsId={content.newsId}
                  item={item}
                  setComment={setComment}
                  user={user}
                />
              );
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

export default ArticleItem;
