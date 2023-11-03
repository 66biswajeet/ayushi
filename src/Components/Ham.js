import React from 'react';
import { GhostNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";
import styled from "styled-components";




function Ham() {

    const Div = styled.div`
        margin:0px 40px 0 0;


    `;

    return (
        <Div>
            <GhostNavbar
                styles={{
                    floatButtonSize: 0.5,
                    floatButtonX: 0,
                    floatButtonY: 5,
                    
                    
                            
                }}

                
            >
                <ul>
                    <li>SKILLS</li>
                    <li>PROJECTS</li>
                    <li>RESUME</li>
                    <li>CONTACT</li>
                </ul>
            </GhostNavbar> 
        </Div>
    )
}

export default Ham
