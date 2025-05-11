import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { HiOutlineReceiptPercent } from 'react-icons/hi2';
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart , AiOutlineClose } from 'react-icons/ai';
import Homeproduct from './homeproduct';
import './home.css';
const Home = ({detail,view,close,setClose,addtocart}) => {
  
  return (
    <>
    { 
     close ?
     <div className='product_detail'>
     <div className='container'>
       <button onClick={()=>setClose(false)} className='closeBtn'><AiOutlineClose/></button>
       {
         detail.map((curElm) => {
           return(
             <div className='product_box'>
               <div className='img_box'>
                 <img src={curElm.Img} alt={curElm.Title}></img>
               </div>
               <div className='detail'>
                 <h4>{curElm.Cat}</h4>
                 <h2>{curElm.Title}</h2>
                 <p>Don’t wait for someone to bring you flowers. Plant your own garden and decorate your own soul ...</p>
                 <h3>{curElm.Price}</h3>
                 <button>Add To Cart</button>
               </div>
             </div>
           )
         })
       }
       <div className='product_box'> </div>
     </div>
   </div> : null
    }
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>The Best Bouquet Collection</h2>
                <Link to='/product' className='link'>Shop Now  <BsArrowRight/></Link>
            </div>
            <div className='img_box'>
                <img src='./img/2.png' alt='slider_img'></img>
            </div>
        </div>
    </div>
    <div className='product_type'>
      <div className='container'>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/red-peanut flower.png' alt='single flower'></img>
          </div>
          <div className='detail'>
            <p>23 Products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/yellow-vase.png' alt='vase flower'></img>
          </div>
          <div className='detail'>
            <p>18 Products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/decoration-piece-golden.png' alt='decoration piece'></img>
          </div>
          <div className='detail'>
            <p>52 Products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/multicolor-painting.jpg' alt='painting'></img>
          </div>
          <div className='detail'>
            <p>63 Products</p>
          </div>
        </div>
      </div>
    </div>
    <div className='about'>
      <div className='container'>
        <div className='box'>
         <div className='icon'><FiTruck/></div> 
         <div className='detail'>
          <h3>Free Shipping</h3>
          <p>Order Above $1000</p>
         </div>
        </div>
        <div className='box'>
         <div className='icon'><BsCurrencyDollar/></div> 
         <div className='detail'>
          <h3>Return & Refund</h3>
          <p>Money Back Guarantee</p>
         </div>
        </div>
        <div className='box'>
         <div className='icon'><HiOutlineReceiptPercent/></div> 
         <div className='detail'>
          <h3>Member Discount</h3>
          <p>On Every Order</p>
          </div>
        </div>
        <div className='box'>
         <div className='icon'><BiHeadphone/></div> 
         <div className='detail'>
          <h3>Customer Support</h3>
          <p>Every Time Call Support</p>
       </div>
        </div>
      </div>
    </div>
    <div className='product'>
      <h2>Top Products</h2>
      <div className='container'>
         {
          Homeproduct.map((curElm)=>
          {
            return(
              <div className='box' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.Title}></img>
                  <div className='icon'>
                  <li onClick={()=>addtocart(curElm)}><AiOutlineShoppingCart/></li>  
                  <li onClick={()=> view(curElm)}><BsEye/></li> 
                  <li><AiOutlineHeart/></li>  
                 </div>
                </div>
                <div className='detail'>
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4>${curElm.Price}</h4>
                </div>
              </div>
            )
          }
          )
         }
      </div>
    </div>
    <div className='banner'>
      <div className='container'>
      <div className='detail'>
        <h4>Latest Paintings Added</h4>
        <h3>Secret Fairytale Garden With Flower</h3>
        <p>$ 949</p>
        <Link to='/product' className='link'>Shop Now   <BsArrowRight/></Link>
      </div>
      <div className='banner_box'>
        <img src='./img/b-secret-fairytale-garden-with-flower.jpg' alt='Painting-Slider'></img>
      </div>
      </div>
    </div>
   </>
  )
}

export default Home
