import React from "react";
import AttendCheckTable from "../components/AttendCheckTable";
import "../css/page/Notice.scss";

const Notice = () => {
  return (
    <div className="NoticeWrap">
      <section>
        <h2>공지사항</h2>
        <p className="notice_txt">모임 장소 및 설명</p>
        <ul className="notice_info_box">
          <li>
            <b>모임장소</b>: <span>강남구</span>
          </li>
          <li>
            <b>시간</b>: <span>19시</span>
          </li>
          <li>
            <b>기타</b>: <span>주의사항</span>
          </li>
        </ul>
      </section>
      <AttendCheckTable />
    </div>
  );
};

export default Notice;
