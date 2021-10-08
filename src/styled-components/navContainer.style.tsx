import styled from 'styled-components'

export const Form=styled.form`
margin-bottom: 20px;
&.example input[type=text] {
    padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
    float: center;
    margin-right: 5%;
    margin-top: 30px;
    border-radius: 10px;
    width: 70%;
    background: #f1f1f1;
  }
  
&.example button {
    float: center;
    border-radius: 10px;
    width: 20%;
    padding: 10px;
    background: #7C4DFF;
    color: white;
    margin-top: 30px;
    font-size: 17px;
    border: 1px solid grey;
    border-left: none;
    cursor: pointer;
  }
  
  &.example button:hover {
    opacity: 0.8;
  }
  `