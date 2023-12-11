
import React from 'react' // 
import {createRoot} from 'react-dom/client'//
import './style.css'
// import image from './images/'
const root = document.getElementById("root")



createRoot(root).render(
<div>
  <div className='header'>
    <h1>Nooty</h1>
    <ul>
      <li>Home</li>
      <li>Menu</li>
      <li>About us</li>
      <li>Content us</li>
    </ul>
  </div>
  <div className='main'>
    <div className='title'>
    <h2>Suad Sald</h2>
    <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> Provident quam tempora temporibus eum ipsum adipisci ut iste sequi amet est?</p>
    <button className='btn'>Download MY CV</button>
    </div>
    <img src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?size=626&ext=jpg&ga=GA1.1.2144588574.1686954102&semt=ais" alt="" />
  </div>
 

 <div className='footer'> Built in React</div>
</div>


)
