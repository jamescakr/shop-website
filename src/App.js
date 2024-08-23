import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import { useState, useEffect } from "react";
import PrivateRoute from "./route/PrivateRoute";

//추가할 사항
//1. 메뉴바 버튼 설정
//2. 디테일 >> new tag 삽입, carousel 사진회전, pick up in store >> 버튼다운
//3. 메인화면 carousel

//4. navbar + footer 삽입
//5. Sign in 버튼 색상 라임으로 바꾸기

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log("aaa", authenticate);
  }, [authenticate]);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
