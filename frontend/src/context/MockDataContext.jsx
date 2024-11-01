import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

// Context 생성
const MockDataContext = createContext();

// Context Provider 생성
export const MockDataProvider = ({ children }) => {
  const [mockData, setMockData] = useState(() => {
    const storedData = localStorage.getItem("mockData");
    return storedData ? JSON.parse(storedData) : null; // 초기값 설정
  });

  // mockData가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    if (mockData) {
      localStorage.setItem("mockData", JSON.stringify(mockData));
    }
  }, [mockData]);

  // API로 데이터 가져오기 예시
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:5001/api");
    console.log(response.data.message);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <MockDataContext.Provider value={{ mockData, setMockData }}>
      {children}
    </MockDataContext.Provider>
  );
};

// useContext 훅을 편하게 사용하기 위한 함수
export const useMockData = () => {
  return useContext(MockDataContext);
};
