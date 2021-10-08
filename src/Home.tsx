import React from 'react';
import { Form } from './styled-components/navContainer.style';
import { useState} from 'react';
import axios from 'axios'
import styled from 'styled-components';

const Cards=styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    margin:15px; 
.card {
padding:10px;
padding-bottom: 2px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 280px;
  margin: 5px;
  text-align: center;
  font-family: arial;
  border-radius: 16px;
}
h5{
    margin-top: 10px;
    font-family:Georgia, 'Times New Roman', Times, serif;
}
img{
    border-radius: 16px;
}
button {
  border: 2px solid black;
  padding: 8px;
  color: black;
  text-align: center;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  font-size: 18px;
}
button:hover {
  color:white;
  background-color: black;

}
`
function Home(){
    const [name,setName]=useState('')
    const [users,setUser]=useState([])

    let handleSubmit=(e:any)=>{
        e.preventDefault()
        console.log("hello")
        axios.get(`https://api.github.com/search/users?q=${name}+in:user`).then(resp => {
        setUser(resp.data['items'])
    });
    } 

return (
    <div>
    <Form className="example" onSubmit={(e) =>handleSubmit(e)}>
      <input type="text" 
      placeholder="GitHub username"
      name="search"
      value={name}
      onChange={event => setName(event.target.value)}
      required/>
      <button type="submit"><i className="fa fa-search"></i></button>
    </Form>
    <Cards>
        {
        users.map(user => {
            return (
        <div className="card" key={user["id"]}>
  <a href={"/details/"+user["login"]}><img src={user["avatar_url"]} style={{"width":"100%"}}/></a>
  <h5>{user["login"]}</h5>
  <p><button><i className="fa fa-github"></i>&nbsp;Github</button></p>
</div>  

              );
            })
        }
        
        </Cards>
    
    </div>
)
} 

export default Home;