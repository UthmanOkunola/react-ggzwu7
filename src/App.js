import React from 'react';
import Header from './Components/Header/Header.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import axios from 'axios';
import Contact from './Components/Contact/Contact.js';
import Home from './Components/Home/Home.js';
import AboutUs from './Components/About/About.js';
import Page404 from './Components/Page404/Page404.js';
// import ErrorBoundary from './Components/ErrorBoundary/Error.js'
import './style.css';

export default function App() {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(10);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true);
  //     const res = await axios.get('https://randomuser.me/api');
  //     setPosts(res.data);
  //     setLoading(false);
  //   }

  //   fetchPosts();
  // }, []);

  // console.log(posts)
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home authed={true} />} />
          <Route path="/Contact" element={<Contact authed={true} />} />
          <Route path="/AboutUs" element={<AboutUs authed={true} />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
