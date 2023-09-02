// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./styles/Navigatebar.scss"
import Carousel from './components/Carousel'
import adidas from "./assets/adidas.png"
import wildcraft from "./assets/wildcraft.png"
import nike from "./assets/nike.png"
import teamspirit from "./assets/teamspirit.png"
import roadster from "./assets/roasdster.png"
import "../src/styles/slidedesign.css"
const images=[
  
  {
    src:adidas,alt:'adidas'
  },
  {
    src:wildcraft,alt:'wildcraft'
  },
  {
    src:nike,alt:'nike'
  },
  {
    src:teamspirit,alt:'teamspirit'
  },
  {
    src:roadster,alt:'roadster'
  },
   ]
  
function App() {
  return (
  
  <div className='App'>
  <Carousel images={images}/>
  </div>

 
  )
}

export default App
