import React from 'react'
import Nav from './Components/Nav'
import Ham from './Components/Ham'
import Typing from './Components/Typing'
import Home from './Components/Home'
// import ImageSlider from './Components/Cards'
import Cards from './Components/Cards'
import Api from './Components/Api'
import Pb from './Components/Pb'
import Foot from './Foot'
import styled from "styled-components";

const Div = styled.div`

 
`;

function App() {
  return (
    <Div>
      <Nav/>
      <Home></Home>
      <Pb/>
      <Cards   Apidata ={Api} Head="Recomend for you"/>
      <Foot/>
      
    </Div>
  )
}

export default App
