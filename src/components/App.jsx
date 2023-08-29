import React from 'react';
import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import PostPage from './Pages/PostPage';
import AppNavBar from './UI/AppNavBar';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import AccountPage from './Pages/AccountPage';
import SearchPostPage from './Pages/SearchPostPage';

function App({ posts, user }) {
  return (
    <Container>
      <AppNavBar user={user} />
      <Routes>
        <Route path="/" element={<PostPage user={user} posts={posts} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/search" element={<SearchPostPage />} />
      </Routes>
    </Container>
  );
}

export default App;
