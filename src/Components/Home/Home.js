import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { myToken } from '../../constants';
import SEO from '../../Components/SEO/SEO';
import Card from '../Card';
import '../Card/Card.css'
import { Link, Outlet } from 'react-router-dom';
import AboutUs from '../About/About'

export default function Home(props) {
  const [repos, setRepos] = useState([])
  const getRepos = async () => {
    try {
      const { data } = await axios.get("https://api.github.com/user/repos", {
        headers: {
          Authorization: `Bearer ${myToken}`
        }
      })
      setRepos(data)
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getRepos()
  }, [])
  const data = props.data || {}
  console.log('repos:', repos)
  return (
    <>
      <h1>This is the Home page</h1>
      <h2>My data</h2>
      <SEO
        title="Home"
        description="This is the home page"
        name="Home"
        type="Home"
      />
      {/* <h1>{data.bio}</h1> */}
      <h3>---------------My Repos------------------</h3>
      <ul>
        {repos.map(repo => (
        <Link to={`/repo`} state = {repo}>
          <li key={repo.id}>
              <Card title={repo.name} language={repo.language} imageUrl='https://www.wikihow.com/images/thumb/a/a4/Code-Step-1-Version-4.jpg/v4-460px-Code-Step-1-Version-4.jpg' />
          </li>
        </Link>

        ))}
      </ul>

      {/* <Outlet /> */}
    </>
  );
}
