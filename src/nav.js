import React, { useState } from 'react';
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart , AiOutlineUser } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { CiLogin , CiLogout } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './nav.css';
const Nav = ({searchBtn}) => {
  const [search,setSearch] = useState();
  const { user, isAuthenticated , loginWithRedirect , logout } = useAuth0();
  return (
    <>
    <div className='free'>
        <div className='icon'><FaTruckMoving/></div>
        <p> FREE Shipping when shopping upto $1000</p>
    </div>
    <div className='main_header'>
        <div className='container'>
            <div className='logo'>
            <img src='./img/1.png' alt='logo' height={45}></img>
            </div>
            <div className='search_box'>
              <input type='text' value={search} placeholder='Search Your Product ...'
               autoComplete='off' onChange={(e)=> setSearch(e.target.value)}></input> 
              <button onClick={()=> searchBtn(search)}>Search</button>
            </div>
            <div className='icon'>
              {
                isAuthenticated &&
                (
                  <div className='account'>
                    <div className='user_icon'>
                    <AiOutlineUser/>
                    </div>
                    <p>Hello, {user.name}</p></div>
                )
              }
                
                    <div className='second_icon'>
                      <Link to='/' className='Link'><AiOutlineHeart/></Link>
                      <Link to='/cart' className='Link'><BsBagCheck/></Link>  
               </div>
                
               </div>
        </div>
    </div>
    <div className='header'>
      <div className='container'>
        <div className='nav'>
        <ul>
          <li>
            <Link to='/' className='Link'>Home</Link>
          </li>
          <li>
            <Link to='/product' className='Link'>Product</Link>
          </li>
          <li>
            <Link to='/about' className='Link'>About</Link>
          </li>
          <li>
            <Link to='/contact' className='Link'>Contact</Link>
          </li>
        </ul>
        </div>
        <div className='auth'>
        {
          isAuthenticated ?
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout/></button>
          :
          <button onClick={()=> loginWithRedirect()}><CiLogin/></button> 
        }
         
         
        </div>
      </div>
    </div>
    </>
  )
}

export default Nav
