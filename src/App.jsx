import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import MyPage from "./pages/MyPage/MyPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Callback from "./pages/LoginPage/components/KakaoCallback";

function App() {  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </div>
  );
}

export default App;
