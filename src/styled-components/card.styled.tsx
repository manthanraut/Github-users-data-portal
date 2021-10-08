import styled from 'styled-components'
import React from 'react';

export const Stylecard=styled.div`
display: flex;
background-color: white;
padding:10px;
border-radius: 16px;
box-shadow: 0 4px 8px 0rgba(0, 0, 0, 0.2);
margin: auto;
flex-direction: row;
text-align: left;
font-family:'Times New Roman', Times, serif;


.div1{
    flex:1;
}
.div1>img{
    margin:20px;
    width: 100%;
    border-radius: 20px;
}


.div2{
    flex:1;
    padding-top: 30px;
    width:100%;
    padding-left: 40px;
    .username{
    text-align: left;
  }
h1{
    font-size: 40px;
    text-align: left;
  }
}
p.username{
    color: gray;
}
h1{
font-weight: bold;
}
p {
  color: black;
  font-size: 18px;
  
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
  margin:10px;
}
.socialicons{
    float: left;
}

@media (max-width: 540px) {
    flex-direction: column;
    align-content: center;
  }

  .div1{
    flex:1;
}
.div2{
    flex:1;
    padding-left: 10px;
}
  .div1>img{
margin:0px;  
    width: 100%;
}
.div2{
    width:100%;
    padding-left: 0 px;
}
`