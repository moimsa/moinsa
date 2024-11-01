import React from "react";
import "../css/component/AttendCheckTable.scss";
import NoticeItem from "./NoticeItem.jsx";

const AttendCheckTable = () => {
  return (
    <div className="AttendCheckTable">
      <table>
        <thead>
          <tr>
            <td>이름</td>
            <td>참석</td>
            <td>불참석</td>
          </tr>
        </thead>
        <tbody>
          <NoticeItem />
        </tbody>
      </table>
    </div>
  );
};

export default AttendCheckTable;
