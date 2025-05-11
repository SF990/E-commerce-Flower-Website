import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart , AiOutlineClose } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";
import Product_detail from './productdetail';
import './product.css';

const Product = ({product,setProduct,detail,view,close , setClose ,addtocart}) => {
    
  const {  isAuthenticated , loginWithRedirect  } = useAuth0();
  const filter_product = (product) =>
  {
    const update = Product_detail.filter((x)=>
    {
      return x.Cat === product;
    })
    setProduct(update);
  }
  const All_products = () =>
  {
    setProduct(Product_detail)
  }
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
   
      <div className='products'>
      <h2> # Products</h2>
      <p> Home . Product</p>
          <div className='container'>
            <div className='filter'>
              <div className='categories'>
                <h3>Categories</h3>
                <ul>
                  <li onClick={()=> All_products() }>All Products</li>
                  <li onClick={()=> filter_product("Flowers")}>Flowers</li>
                  <li onClick={()=> filter_product("Decoration Pieces")}>Decoration Pieces</li>
                  <li onClick={()=> filter_product("Vase Flowers")}>Vase Flowers</li>
                  <li onClick={()=> filter_product("Paintings")}>Paintings</li>
                  <li onClick={()=> filter_product("Lovely Bouquet")}>Lovely Bouquet</li>
                </ul>
              </div>
            </div>
            <div className='product_box'>
              <div className='content'>
              {
                product.map((curElm)=>
                {
                  return(
                    <div className='box' key={curElm.id}>
                      <div className='img_box'>
                        <img src={curElm.Img} alt={curElm.Title}></img>
                        <div className='icon'>
                          {
                            isAuthenticated ?
                            <li onClick={()=>addtocart(curElm)}><AiOutlineShoppingCart/></li> 
                            :
                            <li onClick={()=>loginWithRedirect() }><AiOutlineShoppingCart/></li> 
                          }
                         
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
            </div></div>
          </div>
      </div>
    </>
  )
}

export default Product

