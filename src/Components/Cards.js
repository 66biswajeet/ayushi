import React from 'react'
import { Link } from "react-router-dom";

import styled from "styled-components";
import Api from "./Api";

import "../App.css";


let Recof = (val) => {
    return (
        <Card>
            <img src={val.img} alt="" />
            <div className='cardiv'>

                <h2>{val.name}</h2>
                
               <button >SHOW PROJECT</button>

              
            </div>

        </Card>
    )
}

let Card = styled.div`
    width:200px;
    height:250px;
    background-size:cover;
    position:relative;
    overflow:hidden;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius:20px;
    img{
        width:100%;
        height:100%;
        
        &:hover{
            div{
                bottom:50%;
            }
        }
    }

    div{
        position:absolute;
        background-color:white;
        text-align:center;
        
        width:100%;
        bottom:0;
        
        height:50%;
        font-size:10px;
        opacity:0;
        z-index:5;
        font-family:'Manrope', sans-serif;
        font-weight:100;
        transition:0.5s ;
        &:hover{
           
          
            

        }
           
           

        h2{
            font-size:15px;
            text-transform:uppercase;
            color:#502e41;
        }

        button{
            border-radius:6px;
            width:85%;
            height:30px;
            border:none;
            cursor:pointer;

            &:hover{
                color:#9f5c81;
            }
        }
    }
    transition:all .2s;

    &:hover{
        transform : scale(1);
        
        cursor:pointer;
        

        div{
            opacity:1;
        }


    }


`;





let Cards = ({ Apidata }) => {


    let Container = styled.div`
        display:flex;
        flex-direction:column;
        justify-content : center;
        align-items:center;

        h2{
            font-size : 30px;
            color:#7a2e57;
        }
       
    `;
    let Content = styled.div`
        display:grid;
        grid-template-columns:repeat(4, minmax(0px , 250px));
        grid-column-gap:30px;
        grid-row-gap:35px;
        justify-content: center;
        overflow:hidden;


        @media only screen and (max-width: 998px){
     &{
      display: grid;
      grid-template-columns: repeat(3, minmax(0px, 350px));
      grid-column-gap: 1px;
      grid-row-gap:10px;
      justify-content:center;
      align-items:center;
      overflow:hidden;
      position:relative;
      left:5%;
      right:5%;
    }
  }
        

        @media (max-width: 599px) {
     &{
      display: grid;
      grid-template-columns: repeat(2, minmax(0px, 350px));
      grid-column-gap: 1px;
      grid-row-gap:10px;
      justify-content:center;
      align-items:center;
      overflow:hidden;
      position:relative;
      left:5%;
      right:5%;
    }
  }


  @media (max-width: 500px) {
     &{
      display: grid;
      grid-template-columns: repeat(1, minmax(0px, 400px));
      width:400px;
      grid-column-gap: 1px;
      grid-row-gap:20px;
      justify-content:center;
      align-items:center;
      overflow:hidden;
      position:relative;
      left:25%;
      right:5%;
      text-align:center;
    }
  }
    `;

    let Card = styled.div`
        width:200px;
        height:215px;
        background-size:cover;
        position:relative;
        overflow:hidden;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius:5px;
        img{
            width:100%;
            height:100%;
        }
    `;
    return (
        <Container>

            <h2>MY RECENT PROJECTS</h2>
            <Content>
                {Apidata.map(Recof)}
            </Content>
        </Container>
    )
}

export default Cards
