import React from "react";
import HomeNoticeItem from "../components/HomeNoticeItem";
import "../css/page/Home.scss";

const Home = () => {
  return (
    <div className="HomeWrap">
      <div className="notice--box__wrap">
        <div className="notice--box">
          <h2>공지사항</h2>
          <ul className="notice--item__box">
            <HomeNoticeItem />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
