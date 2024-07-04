import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../css/Productcard.css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { filtershoes, rawdata, addTocart,colorandsize } from "../features/CartSlice";
const Productcards = ({ Product }) => {
  //Data received from product card after removing it keys
  const dispatch = useDispatch();
  const [state, setstate] = useState();
  dispatch(rawdata(Product)); //sent all shoes data after keys removed to redux as global data
  //data coming from api
  const Shoesdata = useSelector((state) => state.cart.datawithoutkey[0]);


  const[allitems,setallitems]=useState(Shoesdata)
  

 
  let dcolorandsize={color:"",size:0}
  const filteritems=(catitem)=>{
const updateitems=Shoesdata.filter((curtItem)=>{

return curtItem.gender===catitem

})
setallitems(updateitems)
  }

  const addremoveclass = (e) => {
    document.querySelector(".colour").attributes.value.value=e.target.attributes.value.value
    let active = document.querySelectorAll(".vactive");
    for (let index = 0; index < active.length; index++) {
      active[index].classList.remove("vactive");
    }
    e.target.classList.add("vactive");
    var parent =
      e.target.parentElement.parentElement.parentElement.parentElement
        .parentElement;
    parent.querySelector(".mainimage").src = e.target.src;
  };

  return (
    <div className="aa">
      <h1 className="producttitle">Footwears</h1>
      <h1>Filter</h1>
      <select
        value={""}
        onChange={(e) => {

          filteritems(e.target.value)
          //
         /* if (e.target.value) {
            console.log("shoedata", Shoesdata);

            for (let index = 0; index < Shoesdata.length; index++) {
              let find = Shoesdata.findIndex(
                (item) => Shoesdata[index].gender === e.target.value
              );

              if (find >= 0) {
                finaldata.push(Shoesdata[index]);
              }
            }
          }
          dispatch(filtershoes(finaldata));

          // setdata()
        */ }}
      >
        <option value="s">Select Gender</option>
        <option value="MEN">Men</option>
        <option value="WOMEN">WOMEN</option>
        <option value="KIDS">KIDS</option>
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
                  <div className="logo-cart">
                    <img src="images/nlogo.jpg" alt="logo" />
                    <i className="bx bx-shopping-bag"></i>
                  </div>
                  <div className="main-images">
                    <img
                      id="blue"
                      className="mainimage active"
                      src={Product.imageURL}
                      alt="blue"
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
                      <span className="color">Colour:</span>
                      <div className="circles colour" value="Pink" >
                        <span id="blue">
                          <img
                            className="circle  "
                            src={Product.imageURL}
                            alt=""
                            value="Blue"
                            onClick={(e) => addremoveclass(e)}
                          />{" "}
                        </span>
                        <span id="pink">
                          <img
                            className="circle  vactive"
                            src={Product.imageURL2}
                            value="Pink"
                            alt=""
                            onClick={(e) => addremoveclass(e)}
                          />
                        </span>
                        <span id="yellow">
                          <img
                            className="circle  "
                            src={Product.imageURL2}
                            alt=""
                            value="Yellow"
                            onClick={(e) => addremoveclass(e)}
                          />
                        </span>
                      </div>
                    </div>
                    

                    <div className="price">
                      <span className="price_num">{Product.price}</span>
                      <span className="price_letter">
                        {Product.price + "$ Only"}
                      </span>
                    </div>
                  </div>
                 


                  <div className="color-price">
                    <div className="color-option">
                      <span className="color"style={{paddingLeft:"10px"}}>Size:</span>

                      <div className="circles size" value="">
                      <span id="yellow" >
                          <label
                          style={{backgroundColor:"white"}}
                            className="circle   "
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
                            const als=  document.querySelectorAll(".bactive")//

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
                    <div className="button-layer"></div>
                    <button onClick={() => {

                  dcolorandsize.size=document.querySelector(".size").attributes.value.value;
                  dcolorandsize.color=document.querySelector(".colour").attributes.value.value;
                     
                      dispatch(colorandsize(dcolorandsize))

                      dispatch(addTocart(Product))

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
      </Swiper>

      <title> Responsive Animated Product Card | CodingLab </title>

      <link
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        rel="stylesheet"
      />
    </div>
  );
};

export default Productcards;
