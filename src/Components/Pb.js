import React from 'react'
import Progressbar from './Progress_bar'
import styled from "styled-components";

function Pb() {

    const Div = styled.div`
        text-align :center;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;

        h3{
            
            font-size : 30px;
            color:#7a2e57;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            border-radius:20px;
            width:300px;
            text-align:center;
            padding:10px  0 10px 0;
        }
        
    
    `;
    return (

        <Div className="App">
            <h3 className="heading">MY SKILL PROGRSS</h3>
            <Progressbar bgcolor="orange" progress='30' placeholder='html' height={30} />
            <Progressbar bgcolor="red" progress='60' height={30} />
            <Progressbar bgcolor="#99ff66" progress='50' height={30} />
            <Progressbar bgcolor="#ff00ff" progress='85' height={30} />
            <Progressbar bgcolor="#99ccff" progress='95' height={30} />
        </Div>

    )
}

export default Pb;
