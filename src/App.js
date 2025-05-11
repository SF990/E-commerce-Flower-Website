import React, {useState} from 'react';
import Nav from './nav';
import { BrowserRouter } from 'react-router-dom';
import Rout from './rout';
import Footer from './footer'
import Product_detail from './productdetail';

const App = () => {
  //add to cart
  const [cart,setCart] = useState([]);
  //product Detail
  const [close , setClose] = useState(false);
  const [detail , setDetail] = useState([])
  //filter product
  const [product , setProduct] = useState(Product_detail);
  const searchBtn = (product) => 
  {
    const change = Product_detail.filter((x)=>{
      return x.Cat === product;
    })
    setProduct(change);
  }
  // product detail
  const view = (product)=>
  {
    setDetail([{...product}]);
    setClose(true);
  }
  //add to cart
 
  const addtocart = (product) => {
    const exsit = cart.find((x)=>
    {
      return  x.id ===  product.id
    })
     if(exsit)
     {
      alert("This Product is already in the Cart.")
     }
     else 
     {
      setCart([...cart , {...product , qty:1}])
      alert("Product is added to Cart.")
     }
  }
  console.log(cart)
  return (
    <>
    <BrowserRouter>
    <Nav searchBtn={searchBtn}/>
    <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
