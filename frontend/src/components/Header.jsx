import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/component/Header.scss";

const Header = () => {
  const [isAction, setIsAction] = useState(false);
  const location = useLocation(); // 현재 경로를 가져오기 위해 useLocation 훅 사용

  const onClickEvtAction = () => {
    setIsAction(!isAction);
  };

  // URL이 변경될 때마다 isAction을 false로 설정
  useEffect(() => {
    setIsAction(false);
  }, [location]);

  return (
    <div className="header_wrap">
      <div className="header_inner">
        <div className="menuBox">
          <div
            className={isAction ? "menuBtn on" : "menuBtn"}
            onClick={onClickEvtAction}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={isAction ? "menuList on" : "menuList"}>
            <div className="nav_inner">
              <ul>
                <li>
                  <Link to={"/signup"}>회원가입</Link>
                </li>
                <li>
                  <Link to={"/login"}>로그인</Link>
                </li>
                <li>
                  <Link to={"/notice"}>공지사항</Link>
                </li>
                <li>
                  <Link to={"/mypage"}>마이페이지</Link>
                </li>
              </ul>
              <div
                className={isAction ? "menuBtn on" : "menuBtn"}
                onClick={onClickEvtAction}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </nav>
        </div>
        <h1>
          <Link to={"/"}>로고</Link>
        </h1>
      </div>
    </div>
  );
};

export default Header;
