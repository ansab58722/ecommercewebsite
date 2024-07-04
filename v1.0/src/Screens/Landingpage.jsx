import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbardesktop from '../Components/Navbar-desktop'
import Heroarea from '../Components/Heroarea'
import Productcard from '../Components/productcard'
import Shoppingcart from '../Components/Shoppingcart'

{/*import Navbar from '../Components/Navbar'*/}
const Landingpage = () => {
  return (
    <div>


<Navbardesktop/>

<Heroarea/>
<br/><br/>


<Productcard/>

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<Shoppingcart/>
    </div>
  )
}

export default Landingpage