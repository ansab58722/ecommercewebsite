import React from 'react'
import Navbardesktop from '../Components/Navbar-desktop'
import  "../css/Allproducts.css"
import { useSelector } from 'react-redux'

const Allproducts = () => {
    
    const datawithoutkey=useSelector((state=>state.cart.datawithoutkey[0]))
console.log(datawithoutkey)
  return (

    <div>
        <Navbardesktop></Navbardesktop>
        

<div className="producscontainer">



<div className="filterarea">

<h1>Select filters</h1>

<h1>Gender</h1>
<div className="filterrow">
   
    
<label>MEN</label><input className='checkbox' type="checkbox" value="MEN" />
<label>WOmen</label><input className='checkbox' type="checkbox" value="Women" />
    
</div>

<h1>Category</h1>
<div className="filterrow">
<label>Running</label><input className='checkbox' type="checkbox" value="Running" />
<label>Casual</label><input className='checkbox' type="checkbox" value="Casual" />
<label>SPORTS</label><input className='checkbox' type="checkbox" value="Sports" />
</div>
<h1>Price range</h1>

<div className="filterrow">

<label>High to low</label><input className='checkbox' type="checkbox" value="Sports" />
<label>Low to High</label><input className='checkbox' type="checkbox" value="Classical" />
</div>

</div>

<div className="productsarea">


{

datawithoutkey.map(

    (product=>{

return(
    
<div className="productcard">
    <img className='mainproductimage' src={product.imageURL} alt="" />
<h1>{product.name}</h1>
</div>

)


    })


)


}




</div>





</div>






        Allproducts</div>
  )
}

export default Allproducts