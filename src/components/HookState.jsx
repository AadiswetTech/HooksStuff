import {useState} from 'react'
import Services from './Services'
import Form from './Form'
const HookState = () => {
         
const[initial,updated]=useState(null)
const updation=(value)=>
{
  switch (value){
    case "home":{
      return updated(<h1 >HII! I am Akshat Raj,a tech enthusiasit.stacks for my work 
        is mainly MERN stack. i have a good foundation of evergree language javascript.
      </h1>);}
    case "about":{
       return  updated(
          <>
          <h2><i>About Me</i></h2>
          <p>I am Akshat Raj.Recently i have complete my graduation from catalyst college (Patna)
             majoring in computer science and software development.i am a technology enthusiast, 
             my Tech stack is MERN(mongo db,Express,REACT,Node).
          </p>
          </>
          );}
      default:
      null;
  }
 

}
const[about,clickabout]=useState("about")
const aboutMe=()=>
{
  clickabout(
  <>
  <h2><i>About Me</i></h2>
  <p>I am Akshat Raj.Recently i have complete my graduation from catalyst college (Patna)
     majoring in computer science and software development.i am a technology enthusiast, 
     my Tech stack is MERN(mongo db,Express,REACT,Node).
  </p>
  </>
  )
}
const [contact,usecontact]=useState("contact")
const query=()=>
{
  usecontact(<Form/>)
}
const [service,services]=useState("Services")
const serve=()=>
{
  services (<Services/>)
}
  return (
    <>
    <h1>Akshat Information</h1>
    <button onClick={()=>updation('home')}>Home</button>
    <button onClick={()=>updation('about')}>About</button>
    {initial} 
     {/* <button onClick={aboutMe}>{about}</button>
    <button onClick={query}>{contact}</button>
    <button onClick={serve}>{service}</button>  */}
    </>
  )
    

}

export default HookState