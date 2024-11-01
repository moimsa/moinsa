import React, { useState } from "react";
import "../css/page/Signup.scss"; // 스타일 파일 경로

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    email: "",
    phoneNumber: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("회원가입 데이터:", formData);
    setSubmitted(true);
  };

  return (
    <div className="signup-container">
      <h2>회원가입</h2>
      {submitted ? (
        <div className="success-message">회원가입이 완료되었습니다!</div>
      ) : (
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="이름을 입력하세요"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="studentId">학번</label>
            <input
              type="text"
              name="studentId"
              id="studentId"
              value={formData.studentId}
              onChange={handleChange}
              placeholder="학번을 입력하세요"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="이메일을 입력하세요"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">휴대폰 번호</label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="휴대폰 번호를 입력하세요"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            회원가입
          </button>
        </form>
      )}
    </div>
  );
};

export default Signup;
