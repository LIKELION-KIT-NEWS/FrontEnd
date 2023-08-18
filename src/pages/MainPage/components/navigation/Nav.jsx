import React, { useEffect, useState } from "react";
import "./styles/Nav.css";
import axios from "axios";
import ArticleContainer from "../../../../common/article-container/ArticleContainer";
import { SyncLoader } from "react-spinners";

const localhost = "http://49.50.163.215";

const headers = {
  "Content-Type": "application/json",
};
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "accessToken"
)}`;

const Nav = () => {
  const [click, setClick] = useState({ value: "정치", valueEng: "POLITICS" });
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${localhost}/api/news/list/${click.valueEng}`, headers)
      .then((res) => {
        console.log(res.data.data);
        setArticle(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [click]);

  const menu = [
    { value: "정치", valueEng: "POLITICS" },
    { value: "경제", valueEng: "ECONOMY" },
    { value: "사회", valueEng: "SOCIETY" },
    { value: "생활문화", valueEng: "LIVING_CULTURE" },
    { value: "IT과학", valueEng: "IT_SCIENCE" },
    { value: "세계", valueEng: "WORLD" },
    { value: "오피니언", valueEng: "OPINION" },
  ];

  return (
    <>
      <div className="navbar">
        {menu.map((item) => {
          return (
            <span
              onClick={() => {
                setClick({
                  value: item.value,
                  valueEng: item.valueEng,
                });
              }}
              style={
                item.value === click.value
                  ? {
                      fontWeight: "bold",
                      color: "#325F95",
                      borderBottom: "3px solid #325F95",
                      paddingBottom: "0.4em",
                    }
                  : {}
              }
            >
              {item.value}
            </span>
          );
        })}
      </div>
      {loading ? (
        <div className="loading">
          <SyncLoader
            color="#325F95"
            loading
            margin={5}
            size={10}
            speedMultiplier={1}
          />
        </div>
      ) : (
        <ArticleContainer article={article} deleteView="none" />
      )}
    </>
  );
};

export default Nav;
