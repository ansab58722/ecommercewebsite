import { createSlice } from "@reduxjs/toolkit";



    const initialState = { 
        cart:[],
        filtershoesdata:[],
        color:[],
        size:[],
        totalPrice:0,
        datawithoutkey:[],
        
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
//state.cart[find].size=state.size

state.totalPrice=state.totalPrice+state.cart[find].price;
}else{
  
    state.cart.push(action.payload)
    state.totalPrice=state.totalPrice+action.payload.price;
}},
colorandsize:(state,action)=>{
  state.size.push(action.payload.size)
  state.color.push(action.payload.color)

},incrementdecrement:(state,action)=>{
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
  state.totalPrice=state.totalPrice-action.payload.price*action.payload.quantity;
  

}
},


filtershoes:(state,action)=>{

//prevents dublicate items from being pushed e.g if user clicked Men filter twice

 let find=state.filtershoesdata.findIndex((item)=>item.id===action.payload.id)
  if (find>=0){
 //if dublicate item find nothing will be pushed
  }else{
//  checks if data is not empty
    if (state.filtershoesdata.length>0){

      let gendermatch=state.filtershoesdata.findIndex((item)=>item.gender===action.payload.gender)//matchs the gender

      if (gendermatch>=0){state.filtershoesdata.push(...action.payload)}else{state.filtershoesdata=(action.payload)
      //replaces the data if gender is changed

      }

    }
    else{
      state.filtershoesdata.push(...action.payload)
        
      }

  }  

  }



  
},





});


export default cartSlice.reducer;
export const{addTocart,colorandsize,incrementdecrement,removefromcart}=cartSlice.actions
export const{rawdata}=cartSlice.actions
export const{filtershoes}=cartSlice.actions
