import React, { useEffect, useState } from "react";
import "./styles/ExpertApplicationContainer.css";
import ExpertApplication from "./components/ExpertApplication";
import axios from "axios";

const ExpertApplicationContainer = () => {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("accessToken")}`;
  const [requested, setRequsted] = useState([]);
  const headers = {
    "Content-Type": "application/json",
  };

  useEffect(() => {
    axios
      .get(`http://49.50.163.215/api/admin/requested`, null, headers)
      .then((res) => {
        console.log(res.data);
        setRequsted(res.data);
        console.log(requested);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="ExpertApplicationContainer">
      <ExpertApplication
        userName={requested[0].userName}
        job={requested[0].job}
        company={requested[0].company}
        education={requested[0].education}
        uid={requested[0].uid}
      />
      <ExpertApplication />
      <ExpertApplication />
      <ExpertApplication />
      {/* 페이지네이션 구현 하기 */}
    </div>
  );
};

export default ExpertApplicationContainer;
