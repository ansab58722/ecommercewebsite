import React from 'react'
import Product from '../all_product'
import {  useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../css/cloths.css";
import "swiper/css/pagination";
import Availablecolors from '../Components/Availablecolors'
// import required modules
import { Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import {addTocart,colorandsize } from "../features/CartSlice";
import { Route } from 'react-router-dom';


const Cloths = () => {

    const dispatch = useDispatch()
    let dcolorandsize={color:"",size:0}

    const[allitems,setallitems]=useState(Product)

    const[filtereditems,setfilteritems]=useState(0)

    



      const filteritems=(value,filter)=>{
        const updateitems=Product.filter((item)=>{

                return item.gender===value
        })
        setallitems(updateitems)
        setfilteritems(updateitems)
          }
        


      const filtercategory=(value,filter)=>{

        if(filtereditems===0){
            const updateitems=Product.filter((item)=>{

                return item.category.toLowerCase()===value.toLowerCase()
        })
        setallitems(updateitems)
        }else{
            const updateitems=filtereditems.filter((item)=>{

                return item.category.toLowerCase()===value.toLowerCase()
        })
        setallitems(updateitems)



        }
       
    
 
    }
   

      

    
   
   return (
<>

<h1 className="producttitle" style={{color:"black"}}>Best Sellers in Cloths</h1>
      <h1 style={{marginLeft:"20px"}}>Filter</h1>
      <select className="selectbox"
        value={""}
        onChange={(e) => {filteritems(e.target.value.toLowerCase(),"gender") }}
>
        <option value="s">Select Gender</option>
        <option value="MEN">Men</option>
        <option value="WOMEN">WOMEN</option>
        <option value="KID">KIDS</option>
      </select>
      <select className="selectbox"
        value={""}
        onChange={(e) => {filtercategory(e.target.value.toLowerCase(),"category") }}
>
        <option value="s">Select Category</option>
        <option value="Blouse">Blouse</option>
        <option value="Jacket">Jackets</option>
        <option value="Sweatshirt">Sweatshirts</option>
        <option value="Full Outfit">Full Outfits</option>
      </select>

    <Swiper
    slidesPerView={"auto"}
    spaceBetween={30}
    breakpoints={{
      645: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      750: {
        slidesPerView: "2",
        spaceBetween: "0",
      },

      1000: {
        slidesPerView: 3,
        spaceBetween: "5vw",
      },
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    {allitems.map((Product) => {
      if (Product !== undefined) {
        return (
          <SwiperSlide key={Product.id}>
            <div className="product-card">
              
              <div className="main-images">



                <img
 


                  id="blue"
                  className=" mainimage clothimg active"
                  src={Product.imageURL}
                  alt="Image Not Available"
                />
              </div>
              <div className="shoe-details">
                <span className="shoe_name">{Product.name}</span>
                <p> Category : {Product.category}</p>
                <p> Main Category : {Product.maincategory}</p>
                <p> Gender : {Product.gender}</p>
                <div className="stars">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bx-star"></i>
                </div>
              </div>
              <div className="color-price">
                <div className="color-option">
                  <span className="color">Images:</span>
                  <div className="circles colour" value="Pink" style={{padding:"2%"}}>
                  <Availablecolors  url={Product.imageURL} color="pink"  />
                    
                    <Availablecolors  url={Product.imageURL2} color="blue"  />
                   




                   
                    <Availablecolors  url={Product.imageURL3} color="green" />
                  </div>
                </div>
                

                <div className="price">
                  <span className="price_num"> {Product.new_price +"$"}</span>
                  <span className="price_letter"  style={{color:"red",}}>
                    {"Was   "+Product. old_price +"$"}
                  </span>
                </div>
              </div>
             


              <div className="color-price">
                <div className="color-option">
                  <span className="color"style={{paddingLeft:"10px"}}>Size:</span>

                  <div className="circles size" value="" style={{marginLeft:"9%",padding:"2%"}}>
                  <span id="yellow" >
                      <label
                      style={{backgroundColor:"white", }}
                        className="circle bactive "
                        alt=""
                        value="6"
                        onClick={(i) =>{ 
                        const als=  document.querySelectorAll(".bactive")//

                          als.forEach((e)=>{e.classList.remove("bactive") })

                          i.target.classList.add("bactive")
//Product.color=i.target.value
document.querySelector(".size").attributes.value.value=i.target.attributes.value.value

//console.log("pr",document.querySelector(".size").attributes.value.value)//,i.target.parentElement.parentElement.attributes.value.value)
//
                        }}
                      >6</label>
                    </span>
                
                    
                    <span id="yellow" >
                      <label
                      style={{backgroundColor:"white"}}
                        className="circle   "
                        alt=""
                        value="9"
                        onClick={(i) =>{ 
                        const als= document.querySelectorAll(".bactive")//

                          als.forEach((e)=>{e.classList.remove("bactive") })

                          i.target.classList.add("bactive")
//Product.color=i.target.value
document.querySelector(".size").attributes.value.value=i.target.attributes.value.value

//console.log("pr",document.querySelector(".size").attributes.value.value)//,i.target.parentElement.parentElement.attributes.value.value)
//
                        }}
                      >9</label>
                    </span>
                    <span id="yellow" >
                      <label
                      style={{backgroundColor:"white"}}
                        className="circle   "
                        alt=""
                        value="12"
                        onClick={(i) =>{ 
                        const als=  document.querySelectorAll(".bactive")//

                          als.forEach((e)=>{e.classList.remove("bactive") })

                          i.target.classList.add("bactive")
//Product.color=i.target.value
document.querySelector(".size").attributes.value.value=i.target.attributes.value.value

//console.log("pr",document.querySelector(".size").attributes.value.value)//,i.target.parentElement.parentElement.attributes.value.value)
//
                        }}
                      >12</label>
                    </span>
                   
                    
                  </div>
                </div>
                

                
              </div>
             

              <div className="button">
                
                <button onClick={() => {

              dcolorandsize.size=document.querySelector(".size").attributes.value.value;
              dcolorandsize.color=document.querySelector(".colour").attributes.value.value;
              const selectedproduct = {
                id:
                  Product.id +
                  dcolorandsize.color +
                  dcolorandsize.size,
                name: Product.name,

                brand: Product.brand,

                category: Product.category,

                color: "",
                gender: Product.gender,

                imageURL: Product.imageURL,
                imageURL2: Product.imageURL2,
                is_in_inventory: Product.is_in_inventory,

                items_left: Product.items_left,

                maincategory: Product.maincategory,

                new_price: Product.new_price,

                old_price: Product.old_price,

                quantity: Product.quantity,
                size: Product.size,
                selectedcolor: dcolorandsize.color,
                selectedsize: dcolorandsize.size,
              };




      

                  dispatch(addTocart(selectedproduct))

                }}>
                  Add To Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        );
      } else {
      }
    })}
    <h1 className="allproducttitle">View All</h1>
  </Swiper>




  </>    
  

        





        
  )
}

export default Cloths