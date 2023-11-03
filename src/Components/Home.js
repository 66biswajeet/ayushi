import React from 'react'
import Typing from './Typing'
import styled from "styled-components";
import img from "./images/dummygirl.jpg";

function Home() {

    const Div = styled.div`
    
        height:65vh;
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;

        @media only screen and (max-width : 1200px) {
        &{
            flex-direction:column;
            margin:50px 0 0 0 ;
        }
}
        
    `;

    const Div2 = styled.div`
        display:grid;
        grid-template-row:;
        row-gap:30px;
       width:50vw;

       text-align:center;

       @media only screen and (max-width : 700px) {
        &{
            width:100%;
        }
}
    
    `;

    const I = styled.div`
        
    `;

    const Button = styled.div`
    
        
        background-color:#9f5c81;
        width:150px;
        height:50px;
        text-align:center;
        color:white;
        border-radius:5px;
        cursor:pointer;
        font-weight:500;
        transition:0.5s ;
        align-items:center;
        display:flex;
        justify-content:center;
        box-shadow: rgba(159, 92, 129, 0.5) 10px 5px 15px;
        margin:auto;

        &:hover{
            background-color:white;
            color:#9f5c81;
            border:1px solid #9f5c81;
        }
    `;

    const Model = styled.div`
        
        width:400px;
        height:400px;
        overflow:hidden;
        border-radius :50%;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        img{
            width:100%;
        }
        
        @media only screen and (max-width : 1200px) {
        &{
            width:200px;
            height:200px;
        }
}
    `;


    return (
        <Div>


            <Div2>
                <I>HI I am AYUSHI SAHU</I>
                <Typing />
                <Button>RESUME</Button>
            </Div2>

            <Model>
                <img src={img} alt="" />
            </Model>

        </Div>
    )
}

export default Home
