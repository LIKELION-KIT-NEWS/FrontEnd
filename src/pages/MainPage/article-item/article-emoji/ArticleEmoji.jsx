import React, { useState } from "react";
import {
  BsFillEmojiLaughingFill,
  BsEmojiAngryFill,
  BsFillEmojiDizzyFill,
  BsFillEmojiSmileFill,
} from "react-icons/bs";
import "./styles/ArticleEmoji.css";

const ArticleEmoji = ({ emotion, emotionNum }) => {
  const [emoji, setEmoji] = useState({
    emojiClicked: false,
    emojiNum: emotionNum,
  });

  return (
    <div className="article-emoji-item">
      <span
        onClick={() => {
          emoji.emojiClicked
            ? setEmoji({
                emojiClicked: false,
                emojiNum: emoji.emojiNum - 1,
              })
            : setEmoji({
                emojiClicked: true,
                emojiNum: emoji.emojiNum + 1,
              });
        }}
      >
        {emotion === "excited" ? (
          <BsFillEmojiLaughingFill size="1.8rem" color="#4760BC" />
        ) : emotion === "angry" ? (
          <BsEmojiAngryFill size="1.8rem" color="#FD4949" />
        ) : emotion === "dizzy" ? (
          <BsFillEmojiDizzyFill size="1.8rem" color="#14903F" />
        ) : (
          <BsFillEmojiSmileFill size="1.8rem" color="#F9BF29" />
        )}
      </span>
      <span>{emoji.emojiNum}</span>
    </div>
  );
};

export default ArticleEmoji;
