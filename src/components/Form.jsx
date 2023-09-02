import React from 'react'
import styled from 'styled-components';

const FormSection=styled.section
`
padding:2rem;
width:300px;
height:400px;
border-radius:20%;
border:2px solid royalblue;
`;
const FormComponents=styled.div
`
box-shadow:0 1px 1px rgba(0,0,0,0.1);

`
const Form = () => {
  return (
    <>
    <FormSection>
    <h1>CONTACT NOW</h1>

         <FormComponents>
         <input type="text" name="name" placeholder="enter your name"/>
                           <input type="email" name="email" placeholder="enter your email"/>
                           <input type="text" name="message" placeholder="type your message"/>
                           <button type="submit" >send message</button>
         </FormComponents>
    </FormSection>
    
    </>
  )
}

export default Form