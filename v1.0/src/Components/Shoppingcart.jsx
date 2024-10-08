
import { useDispatch, useSelector } from "react-redux"
import  "../css/Shoppingcart.css"

import { incrementdecrement,removefromcart } from "../features/CartSlice"
const Shoppingcart = () => {
   const items =useSelector((state)=>state.cart)
const dispatch=useDispatch()

   const{cart,totalPrice,size,color}=items
   //const cart=items.cart
   //console.log(...cart)
   //console.log(items)


  return (


    <div>


<div className="card">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <div className='col shopingcartmaintitle'><h4><b>Shopping Cart</b></h4></div>
                            <div className="col align-self-center text-right text-muted pro ">{cart.length} items</div>
                        </div>
                    </div>    
                    {
                    cart.map((item,index)=>{

return(

    <div className="row border-top border-bottom" key={item.id}>
    <div className="row main align-items-center">
        <div className="col-2"><img className="img-fluid" src={item.imageURL}/></div>
        <div className="col">
            <div className="row text-muted">{item.maincategory}</div>
            <div className="row">{item.name}</div>
        </div>
        <div className="col">
            <button onClick={()=>{
                if(item.quantity>1){
                    dispatch(incrementdecrement({value:-1,id:item.id,price:item.price}))

                }

//console.log("iamclicked")

                    }}>-</button><a href="#" className="border">{item.quantity}</a>
            
            <button  onClick={()=>{
            
 dispatch(incrementdecrement({value:+1,id:item.id,price:item.price}))

 }
                    }>+</button>
        </div>
        <div className="col">&euro; {item.price*item.quantity} <span className="close" onClick={()=>{

dispatch(removefromcart(item))



        }}>&#10005;</span></div>
    </div>
    <h6>size={size[index]}</h6>
    <h6>color={color[index]}</h6>
</div>
    
)


                        })
                   
}
                    
                  
                    <div className="back-to-shop"><a href="#">&leftarrow;</a><span className="text-muted">Back to shop</span></div>
                </div>
                <div className="col-md-4 summary">
                    <div><h5  className='shopingcartmaintitle'><b>Summary</b></h5></div>
                    
                    <div className="row">
                        <div className="col" style={{paddingLeft:"0"}}>ITEMS-{cart.length}</div>
                        <div className="col text-right">&euro; {totalPrice}</div>
                    </div>
                    <form>
                        <p>SHIPPING</p>
                        <select className='sselect'><option className="text-muted">Standard-Delivery- &euro;5.00</option></select>
                        <p>GIVE CODE</p>
                        <input className='sinput' id="code" placeholder="Enter your code"/>
                    </form>
                    <div className="row" style={{borderTop: "1px solid rgba(0,0,0,.1)",padding: "2vh 0"}}>
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">&euro; {totalPrice}</div>
                    </div>
                    <button className="sbtn">CHECKOUT</button>
                </div>
            </div>
            
        </div>


    </div>
  )
}

export default Shoppingcart
