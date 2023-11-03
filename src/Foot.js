import React from 'react'
import styled from "styled-components";
import img from "./Components/images/Screenshot 2023-10-23 223435.png"

function Foot() {
    const Div = styled.div`
        
        height:20vh;
        width:100%;
        display:flex;
        flex-direction:row;
        margin:40px  0 0 0;
        background:#280f1d;
        justify-content:center;
        align-content:center;
        text-align:center;
    
    `;

    const Left = styled.div`
    
        
    `;

    const Right = styled.div`
    
        
    `;

    const Footer = styled.div`
    
        display: grid;
      grid-template-columns: repeat(3, minmax(0px, 350px));
      column-gap:20px;
      margin:auto;
     color:white;
      text-align:center;
      padding:0 0  0 120px;
      font-size:20px;
      eight:20vh;
        width:95%;
        
        margin:40px  0 0 0;
        background:#6c294e;


        h4{
            font-size:30px;
            color:#b785a0;
        }

        h6{
            font-size:21px;
        }
        
        @media only screen and (max-width: 900px){
     &{
        padding:0 0  0 50px;
    }


      @media only screen and (max-width: 900px){
     &{
        grid-template-columns: repeat(1, minmax(0px, 80%));
    }
  }
    
    `;


    const Maindiv = styled.div`
        width:100%;
        background:#6c294e;

    `;

    const Cont = styled.div`
    
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;

    img{
        width:50px;
        height:50px;
        
        bottom:10px;
        right:0;
    }
    `;

    const Links = styled.div`
       
    
    `;

    const Ul = styled.div`
        margin: -65px 0 0 0;
    
    `;

    const Ul2 = styled.div`

    li a{

       color:white;
       text-decoration:none;
       
    }
    
    `;


    return (
        <Maindiv>
            <Footer>
                <div class='sec-about'>
                    <h4>About Us</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis iste laboriosam vel iure eius, sint ex dolorum eveniet culpa perferendis, repellendus expedita odit temporibus? </p>

                    {/* <ul class='smi'>
                    <li><a href=''><i class='fa-brands fa-facebook-f' /></a></li>
                    <li><a href=''><i class='fa-brands fa-instagram' /></a></li>
                    <li><a href=''><i class='fa-brands fa-twitter' /></a></li>
                    <li><a href=''><i class='fa-brands fa-youtube' /></a></li>
                </ul> */}
                </div>

                <Links class='sec-links'>
                    <h4 class='ql'>Quick Links</h4>

                    <Ul2>
                        <li><a href=''>about</a></li>
                        <li><a href=''>home</a></li>
                        <li><a href=''>skills</a></li>
                        <li><a href=''>blogs</a></li>
                        <li><a href=''>Achivements</a></li>

                    </Ul2>
                </Links>

                <Cont class='contact-us'>
                    <h4>Contact Us</h4>
                    <Ul>
                        {/* <li><a href=''><i class='fa-solid fa-location-dot' /></a></li> */}
                        <h6> Rourkela</h6>
                        {/* <li><a href=''><i class='fa-solid fa-phone' /></a></li> */}
                        <h6> +91 123467891 </h6>
                        {/* <li><a href=''><i class='fa-solid fa-envelope' /></a></li> */}
                        <h6> e-mail - sahuayushi@gmail.com </h6>
                        <img src={img} alt="" />
                    </Ul>
                </Cont>
            </Footer>
        </Maindiv>
    )
}

export default Foot;


