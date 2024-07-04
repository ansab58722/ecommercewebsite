import React from 'react'
//import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbardesktop from '../Components/Navbar-desktop'
import Heroarea from '../Components/Heroarea'
import Productcard from '../Components/productcard'
import Shoppingcart from '../Components/Shoppingcart'
import Categories from '../Components/Categories'
import Cloths from '../Components/Cloths'
import Bestsellers from '../Components/Bestsellers'
import { Link } from 'react-router-dom'
{/*import Navbar from '../Components/Navbar'*/}
const Landingpage = () => {
 
  return (
    <div>


<Navbardesktop/>
<br/>

<Heroarea/>
<br/><br/>
<Categories/>

<Bestsellers/>
<br/>
<br/>

<Productcard/>

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/>
<Cloths/>
<br/>


<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


<button> <Link to="/shoppingcart">Shopping cart</Link> </button>
<button> <Link to="/product">product detailspaget</Link> </button>
<button> <Link to="/allproducts">All product page</Link> </button>
    </div>
  )
}

export default Landingpage