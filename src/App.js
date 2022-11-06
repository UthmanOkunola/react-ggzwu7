import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Contact from './Components/Contact/Contact.js';
import Home from './Components/Home/Home.js';
import Repo from './Components/About/About.js';
import Page404 from './Components/Page404/Page404.js';
import ErrorBoundary from './Components/ErrorBoundary/Error.js'
import './style.css';
import { myToken } from './constants.js';
import { HelmetProvider } from 'react-helmet-async';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [myData, setMyData] = useState({})
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const getGithubUser = async () => {
    try {
      const { data } = await axios.get("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${myToken}`
        }
      })
      setMyData(data)
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getGithubUser()
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://randomuser.me/api');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  // console.log(posts)
  return (
    <div>
      <ErrorBoundary>
        <HelmetProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home data={myData} authed={true} />} /> 
              <Route path='/repo' element = {<Repo />}></Route>
              
              <Route path="/Contact" element={<Contact authed={true} />} />
              {/* <Route path="/AboutUs" element={<AboutUs authed={true} />} /> */}
              <Route path="/*" element={<Page404 />} />
            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </ErrorBoundary>
    </div>
  );
}
