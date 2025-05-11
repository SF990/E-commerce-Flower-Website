import React from 'react'
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import './footer.css';
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='container'>
            <div className='about'>
              <div className='logo'>
                <img src='./img/1.png' alt='logo' height={45}></img>
                </div>
              <div className='detail'>
                <p>We are the team of Developers and Designers that create high quality websites</p>
                <div className='icon'>
                    <li><RiFacebookFill/></li>
                    <li><AiOutlineInstagram/></li>
                    <li><AiOutlineTwitter/></li>
                    <li><BsYoutube/></li>
                </div>
              </div>
                </div>
                <div className='account'>
                    <h3>My Account</h3>
                       <ul>
                        <li>Account</li>
                        <li>Order</li>
                        <li>Cart</li>
                        <li>Shipping</li>
                        <li>Return</li>
                       </ul>
                </div>
                <div className='page'>
                    <h3>Pages</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Term & Conditions</li>
                    </ul>
                </div>
            </div>
       </div>
    </>
  )
}

export default Footer
