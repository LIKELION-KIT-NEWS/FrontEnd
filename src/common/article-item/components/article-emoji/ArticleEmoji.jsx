import React, { useState } from "react";
import { BsEmojiAngryFill, BsFillEmojiSmileFill } from "react-icons/bs";
import "./styles/ArticleEmoji.css";
import ConfirmModal from "../../../confirmModal/ConfirmModal";

const ArticleEmoji = ({ emotion }) => {
  const [emoji, setEmoji] = useState({
    emojiType: emotion.userNewsEmotionInfo.userClickEmotionType,
    emojiClicked: emotion.userNewsEmotionInfo.userClicked,
    emojiLikeNum: emotion.emotionCounts.LIKE,
    emojiDisLikeNum: emotion.emotionCounts.DISLIKE,
  });

  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal((prev) => !prev);
  };

  const handleEmotion = (emotion) => {
    if (emotion === emoji.emojiType) {
      emotion === "LIKE"
        ? setEmoji({
            ...emoji,
            emojiType: null,
            emojiClicked: false,
            emojiLikeNum: emoji.emojiLikeNum - 1,
          })
        : setEmoji({
            ...emoji,
            emojiType: null,
            emojiClicked: false,
            emojiDisLikeNum: emoji.emojiDisLikeNum - 1,
          });
    } else if (emoji.emojiType !== null) {
      setModal(true);
    } else {
      emotion === "LIKE"
        ? setEmoji({
            ...emoji,
            emojiType: "LIKE",
            emojiClicked: true,
            emojiLikeNum: emoji.emojiLikeNum + 1,
          })
        : setEmoji({
            ...emoji,
            emojiType: "DISLIKE",
            emojiClicked: true,
            emojiDisLikeNum: emoji.emojiDisLikeNum + 1,
          });
    }
  };

  return (
    <div className="article-emoji-item">
      <div className="emoji-smile">
        <span onClick={() => handleEmotion("LIKE")}>
          <BsFillEmojiSmileFill size="1.8rem" color="#F9BF29" />
        </span>
        <span>{emoji.emojiLikeNum}</span>
      </div>
      <div className="emoji-angry">
        <span onClick={() => handleEmotion("DISLIKE")}>
          <BsEmojiAngryFill size="1.8rem" color="#FD4949" />
        </span>
        <span>{emoji.emojiDisLikeNum}</span>
      </div>
      {modal && <ConfirmModal handleModal={handleModal} />}
    </div>
  );
};

export default ArticleEmoji;
