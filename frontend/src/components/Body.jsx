import { Navigate, Route, Routes } from "react-router-dom";
import { useMockData } from "../context/MockDataContext"; // Context에서 데이터 불러오기
import "../css/component/Body.scss";
import Home from "../page/Home.jsx";
import Login from "../page/Login.jsx";
import Mypage from "../page/Mypage.jsx";
import NotFound from "../page/NotFound.jsx";
import Notice from "../page/Notice.jsx";
import Signup from "../page/Signup.jsx";

const Body = () => {
  const { mockData } = useMockData(); // mockData와 setMockData를 사용 가능

  return (
    <div className="BodyWrap">
      <div className="Body_inner">
        <Routes>
          {/* 로그인 여부에 따른 홈 페이지 또는 로그인 페이지 이동 */}
          <Route
            path="/"
            element={mockData?.id ? <Home /> : <Navigate to="/login" />}
          />
          {/* 로그인 페이지 */}
          <Route path="/login" element={<Login />} />
          {/* 회원가입 페이지 */}
          <Route path="/signup" element={<Signup />} />
          {/* 공지사항 페이지 */}
          <Route path="/notice" element={<Notice />} />
          {/* 로그인된 상태에서만 접근 가능한 마이페이지 */}
          <Route
            path="/mypage"
            element={mockData?.id ? <Mypage /> : <Navigate to="/login" />}
          />
          {/* 존재하지 않는 경로 처리 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default Body;
