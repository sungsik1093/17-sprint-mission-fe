import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import MarketPage from "./pages/MarketPage/MarketPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import CommunityFeedPage from "./pages/CommunityFeedPage/CommunityFeedPage";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import Header from "./components/Layout/Header";

// 헤더가 있는 페이지 공통 레이아웃
function WithHeader() {
  return (
    <>
      {/* Global Navigation Bar */}
      <Header />
      <div className="withHeader">
        <Outlet />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithHeader />}>
          {/* React Router v6부터는 path="/" 대신 간단하게 `index`라고 표기하면 돼요 */}
          <Route index element={<HomePage />} />
          <Route path="items" element={<MarketPage />} />
          <Route path="registration" element={<AddItemPage />} />
          <Route path="community" element={<CommunityFeedPage />} />
          <Route path="items/:id" element={<ItemDetailPage />} />
        </Route>
        {/* 로그인/회원가입은 헤더 없이 */}
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
