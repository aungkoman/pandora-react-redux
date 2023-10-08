import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './presentation/Layout';
import NoPage from './presentation/pages/NoPage';
import LoginPage from './presentation/pages/auth/LoginPage';
import RegisterPage from './presentation/pages/auth/RegisterPage';
import ArticleListPage from './presentation/pages/article/ArticleListPage';
import ArticleLoadingPage from './presentation/pages/article/ArticleLoadingPage';
import ChatConversationPage from './presentation/pages/chat/ChatConversationPage';
import ArticleDetailPage from './presentation/pages/article/ArticleDetailPage';
import ForgotPasswordPage from './presentation/pages/auth/ForgotPasswordPage';
import ConfirmOtpPage from './presentation/pages/auth/ConfirmOtpPage';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ArticleListPage   />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/confirm-otp" element={<ConfirmOtpPage />} />
            <Route path="/app" element={<App />} />
            <Route path="/article-loading" element={<ArticleLoadingPage />} />
            <Route path="/chat-conversation" element={<ChatConversationPage />} />
            <Route path="/articles/:id" element={<ArticleDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
