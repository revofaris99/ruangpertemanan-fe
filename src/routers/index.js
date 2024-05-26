import { useEffect, useState } from "react";
import Loader from "../components/loader";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AuthChecker from "../components/authChecker";
import Home from "../pages/home-page";
import LoginPage from "../pages/auth-page/login";
import RegisterPage from "../pages/auth-page/register";
import SendForgotPassword from "../pages/auth-page/sendForgotPassword";
import SendResetPassword from "../pages/auth-page/sendResetPassword";
import PortofolioPage from "../pages/portofolio-page";
import HomeAbout from "../pages/home-about-page";
import PuisiPage from "../pages/puisi-page";
import StoryPage from "../pages/story-page";
import ArticlePage from "../pages/article-page";
import NotFound from "../components/notFound";
import DescribeArticle from "../pages/article-page/describe-article";
import DescribePuisi from "../pages/puisi-page/describ-puisi";
import DescribeStory from "../pages/story-page/describe-story";
import ProfilePage from "../pages/profile-page/user-profile";
import WritePuisi from "../pages/profile-page/show-puisi";
import WriteArticle from "../pages/profile-page/show-article";
import WriteStory from "../pages/profile-page/show-story";
import AddPuisi from "../pages/profile-page/input-puisi";
import Test from "../App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="mt-20 rounded-lg"
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="ruang/v1/home" replace="true" />}
          />
          <Route path="/ruang/v1/home" element={<Home />} />
          <Route path="/ruang/v1/auth/login" element={<LoginPage />} />
          <Route path="/ruang/v1/auth/register" element={<RegisterPage />} />
          <Route
            path="/ruang/v1/auth/sendVerif"
            element={<SendForgotPassword />}
          />
          <Route
            path="/ruang/v1/auth/resetPass"
            element={<SendResetPassword />}
          />

          <Route path="/ruang/v1/portofolio" element={<PortofolioPage />} />
          <Route path="/ruang/v1/home-about" element={<HomeAbout />} />
          <Route path="/ruang/v1/home-puisi" element={<PuisiPage />} />
          <Route path="/ruang/v1/home-story" element={<StoryPage />} />
          <Route path="/ruang/v1/home-article" element={<ArticlePage />} />

          <Route
            path="/ruang/v1/describe-article"
            element={<DescribeArticle />}
          />
          <Route
            path="/ruang/v1/describe-puisi/:id"
            element={<DescribePuisi />}
          />
          <Route path="/ruang/v1/describe-story" element={<DescribeStory />} />

          <Route
            path="/ruang/v1/profile-user"
            element={
              <AuthChecker>
                <ProfilePage />
              </AuthChecker>
            }
          />
          <Route
            path="/ruang/v1/profile-user/update-photo/:id"
            element={
              <AuthChecker>
                <ProfilePage />
              </AuthChecker>
            }
          />
          <Route
            path="/ruang/v1/profile-user/puisi"
            element={
              <AuthChecker>
                <WritePuisi />
              </AuthChecker>
            }
          />
          <Route
            path="/ruang/v1/profile-user/Mypuisi/:id"
            element={
              <AuthChecker>
                <WritePuisi />
              </AuthChecker>
            }
          />
          <Route
            path="/ruang/v1/profile-user/story"
            element={
              <AuthChecker>
                <WriteStory />
              </AuthChecker>
            }
          />
          <Route
            path="/ruang/v1/profile-user/article"
            element={
              <AuthChecker>
                <WriteArticle />
              </AuthChecker>
            }
          />

          <Route
            path="/ruang/v1/profile-user/add/puisi"
            element={
              <AuthChecker>
                <AddPuisi />
              </AuthChecker>
            }
          />
          <Route path="test" elemet={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
