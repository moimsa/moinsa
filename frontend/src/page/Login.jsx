import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/page/Login.scss"; // 스타일 파일 경로는 필요에 맞게 설정

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 간단한 로그인 로직 (추후 실제 인증 로직으로 교체)
    if (username === "user" && password === "password") {
      onLogin({ id: 1, username });
      navigate("/"); // 로그인 성공 시 홈으로 이동
    } else {
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <div className="LoginWrap">
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div className="input_box">
          <label>아이디</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="아이디를 입력해주세요."
            required
          />
        </div>
        <div className="input_box">
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요."
            required
          />
        </div>
        <button className="login_submit_btn" type="submit">
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
