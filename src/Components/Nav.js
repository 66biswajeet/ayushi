import React from 'react';
import styled from "styled-components";
import Home from './Home';
import "../index.css"
import Ham from './Ham';

const Nav = () => {

    const Navbar = styled.div`
    
        display :flex;
        flex-direction : row;
        justify-content:space-between;
        align-items:center;
        width:80vw;
        margin:20px 0 0 99px ;

        @media only screen and (max-width : 700px) {
        &{
            
            justify-content:space-around;
        }
}
    `;

    const Logo = styled.div`
    
        color:#7a2e57;
        font-weight:1000;
        font-size:40px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius:20px;
        width:180px;
        text-align:center;

        @media only screen and (max-width : 700px) {
        &{
            margin:10px 0 0 0px;;
        }
        
    `;

    const Menu = styled.div`
    
        display :flex;
        flex-direction : row;
        justify-content:center;
        align-items:center;

        h2{
            margin:0 10px 0 10px;
            font-size:20px;
            cursor:pointer;
            transition:0.2s ease-in;
            color:#873361;
        }

        h2:hover{
            color:#c399b0;
            
        }

        `;

    const Cont = styled.div`
    
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
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        &:hover{
            background-color:white;
            color:#9f5c81;
            border:1px solid #9f5c81;
        }

        @media only screen and (max-width : 1200px) {
        &{
            display:none;
        }
}
    
    `;






    return (
        <Navbar>


            <Ham></Ham>
            <Logo>AYURI</Logo>
            <Cont>CONNECT</Cont>



        </Navbar>
    )
}

export default Nav;


