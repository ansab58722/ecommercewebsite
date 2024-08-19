import React, { useState } from 'react'
import  "../css/Productdetail.css"


import Shoppingcart from"../Components/Shoppingcart"
import { useDispatch, useSelector } from "react-redux";
import { addTocart} from "../features/CartSlice";
import Navbardesktop from './Navbar-desktop';

const Productdetail = () => {
  
const dispatch=useDispatch()
  const [size,setsize] = useState(0)
  const [color,setcolor] = useState()

    const product=useSelector((state) => state.cart.selectedproduct)

    const [mainimg,setmainimg] = useState(product.imageURL)
    
  return (
    

<div className="mainproductdetail">
<Navbardesktop/>
<div className="mainproductdetailwrapper">

<div className="productimag">

<img className='productmainimage' src={mainimg} alt="noimage" />

</div>
<div className="productspecsdiv">
<h1 className='productdetailname'>  {product.name}</h1>
<h1 className="productdetailprice">RS {product.new_price}</h1>

<p className='colorlabel'>Color:{color}</p>

<img src={product.imageURL} alt="1stimage" className="productimgs"onClick={(e)=>{

  document.querySelectorAll(".productimgs").forEach(i=>{
    i.classList.remove("aactive")
  })
  e.target.classList.add("aactive")
  setcolor("black")
  setmainimg(e.target.src)
}}  />
<img src={product.imageURL2} alt="image2" className="productimgs"  onClick={(e)=>{

  document.querySelectorAll(".productimgs").forEach(i=>{
    i.classList.remove("aactive")
  })
  e.target.classList.add("aactive")
  setcolor("red")
  setmainimg(e.target.src)
}}  />

<p className='colorlabel'>Size:{size}</p>
<div className="sizediv">

<div className="sizebox"onClick={(e)=>{

document.querySelectorAll(".sizebox").forEach(element => {
  element.classList.remove("aactive")
});
e.target.classList.add("aactive")
setsize(9)
}}>9</div>
<div className="sizebox"onClick={(e)=>{
  document.querySelectorAll(".sizebox").forEach(element => {
    element.classList.remove("aactive")
  });
e.target.classList.add("aactive")
setsize(7)
}}>7</div>
<div className="sizebox"onClick={(e)=>{
  document.querySelectorAll(".sizebox").forEach(element => {
    element.classList.remove("aactive")
  })
e.target.classList.add("aactive")
setsize(5)
}}>5</div>

</div>
<button className='addtocartbutn'


onClick={() => {

  //dispatch(colorandsize({"color":color,"size":size,id:product.id}))
  const selectedproduct={
    id: product.id+color+size,
     name:product.name,
  
    brand: product.brand,
   
    category: product.category,
   
    color: "",
    gender: product.gender,

    imageURL: product.imageURL,
    imageURL2: product.imageURL2,
    is_in_inventory: product.is_in_inventory,

    items_left: product.items_left,
  
    maincategory: product.maincategory,
  
    new_price:product.new_price,
  
    old_price: product.old_price,
  
    quantity: product.quantity,
    size: product.size,
  selectedcolor:color,
  selectedsize:size,
  }
     dispatch(addTocart(selectedproduct))

    }}


>Add to Cart</button>
</div>

</div>
<Shoppingcart></Shoppingcart>

    </div>
    
  )
}

export default Productdetail