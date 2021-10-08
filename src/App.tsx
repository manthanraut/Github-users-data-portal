import React from 'react';
import { useState } from 'react';
import { isPropertySignature, reduceEachLeadingCommentRange } from 'typescript';
import './style.css';
import image from './user.png';
import { Form } from './styled-components/navContainer.style';
import { Stylecard } from './styled-components/card.styled';
import axios from 'axios'

const theme = {
  mobile: '768px',
}

type CardProps = {
  uname:string // your props validation
}

const App=({uname}:CardProps)=>{
  const url=window.location.href
  const username=url.slice(30,)
  const [username1, setUsername1] = useState('')
  const [avatar_url, setAvatar_url] = useState('https://github.githubassets.com/images/modules/logos_page/Octocat.png')
  const [name, setName] = useState('')
  const [repos, setRepos] = useState('')
  const [blog, setBlog] = useState('')
  const [followers, setFollowers] = useState('')
  const [following, setFollowing] = useState('')
  const [location, setLocation] = useState('')
  const [bio, setBio] = useState('')
  const [company, setCompany] = useState('')
  const [githuburl, setGithub_url] = useState('')
  const [email, setEmail] = useState('')
  const [twitter_username, setTwitter_username] = useState('')
    console.log("hello")
    axios.get(`https://api.github.com/users/${username}`).then(resp => {
      setUsername1(resp.data['login'])
      setAvatar_url(resp.data['avatar_url'])
      setBio(resp.data['bio'])
      setBlog(resp.data['blog'])
      setEmail(resp.data['email'])
      setCompany(resp.data['company'])
      setFollowers(resp.data['followers'])
      setFollowing(resp.data['following'])
      setGithub_url(resp.data['html_url'])
      setLocation(resp.data['location'])
      setName(resp.data['name'])
      setRepos(resp.data['public_repos'])
      setTwitter_username(resp.data['twitter_username'])
    })
  return (
  <div className="App">
  
    <Stylecard>
      {/*avatar url below*/} 
  <div className="div1">
  <img src={avatar_url} alt="User" />
  </div>
  <div className="div2">
  <h1>{name}</h1>
  <p className="username">{username1 || ''}</p>
  <p className="title">{bio}</p>
  <p><i className="fa fa-server"></i>&nbsp;&nbsp; Repositories: {repos}</p>
  <p><i className="fa fa-users"></i>&nbsp;&nbsp; Followers: {followers}</p>
  <p><i className="fa fa-user-plus"/>&nbsp;&nbsp; Following: {following} </p>
  <p><i className="fa fa-building"></i>&nbsp;&nbsp; Address: {location}</p>
  <p><i className="fa fa-briefcase"></i>&nbsp;&nbsp; Company: {company}</p>
  <div className="socialicons" style={{"margin":"24px 0;"}}>
    <a href={githuburl}><i className="fa fa-github"></i></a>  
    <a href={blog}><i className="fa fa-globe"></i></a>  
    <a href={email || '#'}><i className="fa fa-google"></i></a> 
    <a href={`https://twitter.com/${twitter_username}`}><i className="fa fa-twitter"></i></a> 
  </div>
</div>
</Stylecard>
</div>
  
  );
}

export default App;
