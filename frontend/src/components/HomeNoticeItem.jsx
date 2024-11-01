import React from "react";
import { Link } from "react-router-dom";

const HomeNoticeItem = () => {
  return (
    <>
      <li className="notice__item">
        <Link to="/notice">
          <h6 className="notice--item__title">
            첫 게시물첫 게시물첫 게시물첫 게시물첫 게시물첫 게시물
          </h6>
          <div className="notice--item__postInfo">
            <p className="poster">관리자</p>
            <p className="postDate">2024-09-10</p>
          </div>
        </Link>
      </li>
      <li className="notice__item">
        <Link to="/notice">
          <h6 className="notice--item__title">첫 게시물</h6>
          <div className="notice--item__postInfo">
            <p className="poster">관리자</p>
            <p className="postDate">2024-09-10</p>
          </div>
        </Link>
      </li>
      <li className="notice__item">
        <Link to="/notice">
          <h6 className="notice--item__title">첫 게시물</h6>
          <div className="notice--item__postInfo">
            <p className="poster">관리자</p>
            <p className="postDate">2024-09-10</p>
          </div>
        </Link>
      </li>
    </>
  );
};

export default HomeNoticeItem;
