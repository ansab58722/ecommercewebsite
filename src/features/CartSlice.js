import { createSlice } from "@reduxjs/toolkit";



    const initialState = { 
        cart:[],
        totalPrice:0,
        datawithoutkey:[],
        selectedproduct:[]
        };







export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    rawdata:(state,action)=>{

      let find=state.datawithoutkey.findIndex((item)=>item.id===action.payload.id)
      if (find>=0){ }
    else{
      state.datawithoutkey.push(action.payload)
    }

      }  ,
    

    addTocart:(state,action)=>{

let find=state.cart.findIndex((item)=>item.id===action.payload.id)

if (find>=0){

  state.cart[find].quantity=state.cart[find].quantity+1
   state.totalPrice=state.totalPrice+state.cart[find].new_price;
     
}else{
  
    state.cart.push(action.payload)
    state.totalPrice=state.totalPrice+action.payload.new_price;
}
}
,

colorandsize:(state,action)=>{

}

,incrementdecrement:(state,action)=>{
  let find=state.cart.findIndex((item)=>item.id===action.payload.id)
if (find>=0){

 if( action.payload.value===-1){
  state.cart[find].quantity=state.cart[find].quantity-1
  state.totalPrice=state.totalPrice-action.payload.price;
}
  
  else{
    state.cart[find].quantity=state.cart[find].quantity+1
    state.totalPrice=state.totalPrice+action.payload.price;
  
  }


}
},
removefromcart:(state,action)=>{
  let find=state.cart.findIndex((item)=>item.id===action.payload.id)
if (find>=0){

  state.cart.splice([find],1)
  state.totalPrice=state.totalPrice-action.payload.new_price*action.payload.quantity;
  

}
},

productselectedfeature:(state,action)=>{
  state.selectedproduct=action.payload;
},


  
},





});


export default cartSlice.reducer;
export const{addTocart,colorandsize,incrementdecrement,removefromcart,productselectedfeature}=cartSlice.actions
export const{rawdata}=cartSlice.actions

