import React, { useState } from "react";
import Navbardesktop from "../Components/Navbar-desktop";
import "../css/Allproducts.css";

import { useDispatch, useSelector } from "react-redux";
import { addTocart, productselectedfeature } from "../features/CartSlice";
import Availablecolors from "../Components/Availablecolors";

const Allproducts = () => {
  const dispatch = useDispatch();
  const datawithoutkey = useSelector((state) => state.cart.datawithoutkey[0]);
  let dcolorandsize = { color: "", size: 0 };

  const [allitems, setallitems] = useState(datawithoutkey);
  const [filtereditems, setfiltereditems] = useState(0);
  const [filteredcategoryitems, setfilteredcategoryitems] = useState(0)

  const filteritems = (genderFilter) => {
    const updateitems = datawithoutkey.filter((item) => {
      return item.gender.toLowerCase() === genderFilter.toLowerCase();
    });
    setallitems(updateitems);
    setfiltereditems(updateitems);
  };

  const filtercategory = (value, filter) => {

    if (filtereditems === 0) {
      const updateitems = datawithoutkey.filter((item) => {
        return item.category.toLowerCase() === value.toLowerCase();
      });
      setallitems(updateitems);
    } else {
      const updateitems = filtereditems.filter((item) => {
        return item.category.toLowerCase() === value.toLowerCase();
      });
      setfilteredcategoryitems(updateitems)
      setallitems(updateitems);
      
    }
  };

  const filterprice = (e) => {

    if (e === "high-to-low") {
      if (filteredcategoryitems === 0) {
        let tempdata = [...datawithoutkey];
        const sorteditems = tempdata.sort((a, b) => b.new_price - a.new_price);

        setallitems(sorteditems);
      } else {
        let tempdata = [...filteredcategoryitems];
        const sorteditems = tempdata.sort((a, b) => b.new_price - a.new_price);
        setallitems(sorteditems);
      }
    }

    if (e === "low-to-high") {
    
        if (filteredcategoryitems === 0) {
          let tempdata = [...datawithoutkey];
          const sorteditems = tempdata.sort((a, b) => a.new_price - b.new_price);
    
          setallitems(sorteditems);
        } else {
          let tempdata = [...filteredcategoryitems];
          const sorteditems = tempdata.sort((a, b) => a.new_price - b.new_price);
          setallitems(sorteditems);
        }
      }

  }
  
  const removecheck=(e)=>{
    
    document.querySelectorAll(".checkbox-category")
    .forEach((element) => {
      element.checked = false;
    });
document.querySelectorAll(".checkbox-price")
.forEach((element) => {
  element.checked = false;
});
e.target.checked = true
  }

 
  return (
    <div>
      <Navbardesktop></Navbardesktop>
      <div className="producscontainer">
        <div className="filterarea">
          <h1>Select filters</h1>

          <h1>Gender</h1>
          <div className="filterrow">
            <label>MEN</label>
            <input
              className="checkbox-gender"
              type="checkbox"
              value="MEN"
              onClick={(e) => {
                if (e.target.checked === true) {
                  filteritems(e.target.value);
                }

                document
                  .querySelectorAll(".checkbox-gender")
                  .forEach((element) => {
                    element.checked = false;
                  });
removecheck(e)
                e.target.checked = true;
              }}
            />
            <label>WOmen</label>
            <input
              className="checkbox-gender"
              type="checkbox"
              value="Women"
              onClick={(e) => {
                if (e.target.checked === true) {
                  filteritems(e.target.value);
                }

                document
                  .querySelectorAll(".checkbox-gender")
                  .forEach((element) => {
                    element.checked = false;
                  });
                e.target.checked = true;
                removecheck(e)
              }}
            />
             <label>Kids</label>
            <input
              className="checkbox-gender"
              type="checkbox"
              value="KIDS"
              onClick={(e) => {
                if (e.target.checked === true) {
                  filteritems(e.target.value);
                }

                document
                  .querySelectorAll(".checkbox-gender")
                  .forEach((element) => {
                    element.checked = false;
                  });
                e.target.checked = true;
                removecheck(e)
              }}
            />
          </div>

          <h1>Category</h1>
          <div className="filterrow">
            <label>Running</label>
            <input
              className="checkbox-category"
              name="checkbox"
              type="checkbox"
              value="Running"
              onClick={(e) => {
                if (e.target.checked === true) {
                  filtercategory(e.target.value);
                }
               
                removecheck(e)
              }}
            />
            <label>Casual</label>
            <input
              className="checkbox-category"
              type="checkbox"
              value="CASUAL"
              name="checkbox"
              onClick={(e) => {
                if (e.target.checked === true) {
                  filtercategory(e.target.value);
                }

            
            
                  removecheck(e)
              }}
            />
            <label>SPORTS</label>
            <input
              className="checkbox-category"
              type="checkbox"
              value="football"
              name="checkbox"
              onClick={(e) => {
                if (e.target.checked === true) {
                  filtercategory(e.target.value);
                }
                 
                  
                  removecheck(e)

              }}
            />
          </div>
          <h1>Price range</h1>

          <div className="filterrow">
            <label>High to low</label>
            <input
              className="checkbox-price"
              type="checkbox"
              value="high-to-low"
              onClick={(e) => {
                if (e.target.checked === true) {
                  filterprice("high-to-low");
                }
                document
                  .querySelectorAll(".checkbox-price")
                  .forEach((element) => {
                    element.checked = false;
                  });
                e.target.checked = true;
              }}
            />
            <label>Low to High</label>
            <input
              className="checkbox-price"
              type="checkbox"
              value="Classical"
              onClick={(e) => {
                if (e.target.checked === true) {
                  filterprice("low-to-high");
                }
                document
                  .querySelectorAll(".checkbox-price")
                  .forEach((element) => {
                    element.checked = false;
                  });
                e.target.checked = true;
              }}
            />
          </div>
        </div>

        <div className="productsarea">
          {allitems.map((Product) => {
            return (
              //product caed
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
                    onClick={() => {
                      dispatch(productselectedfeature(Product));
                    }}
                  />
                </div>
                <div className="shoe-details">
                  <span className="shoe_name">
                    <a href="../Components/Productdetail.jsx">
                      {Product.name}{" "}
                    </a>{" "}
                  </span>
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
                    <div className="circles colour" value="Pink">
                      
                    <Availablecolors  url={Product.imageURL} color="pink"  />
                    
                    <Availablecolors  url={Product.imageURL2} color="blue"  />
                   




                   
                    <Availablecolors  url={Product.imageURL3} color="green" />



                    </div>
                  </div>

                  <div className="price">
                    <span className="price_num">
                      {" "}
                      {Product.new_price + "$"}
                    </span>
                    <span className="price_letter" style={{ color: "red" }}>
                      {"Was   " + Product.old_price + "$"}
                    </span>
                  </div>
                </div>

                <div className="color-price">
                  <div className="color-option">
                    <span className="color" style={{ paddingLeft: "10px" }}>
                      Size:
                    </span>

                    <div className="circles size" value="">
                      <span id="yellow">
                        <label
                          style={{ backgroundColor: "white" }}
                          className="circle   "
                          alt=""
                          value="6"
                          onClick={(i) => {
                            const als = document.querySelectorAll(".bactive"); //
                            als.forEach((e) => {
                              e.classList.remove("bactive");
                            });
                            i.target.classList.add("bactive");
                            //Product.color=i.target.value
                            document.querySelector(
                              ".size"
                            ).attributes.value.value =
                              i.target.attributes.value.value;

                            //console.log("pr",document.querySelector(".size").attributes.value.value)//,i.target.parentElement.parentElement.attributes.value.value)
                            //
                          }}
                        >
                          6
                        </label>
                      </span>

                      <span id="yellow">
                        <label
                          style={{ backgroundColor: "white" }}
                          className="circle   "
                          alt=""
                          value="9"
                          onClick={(i) => {
                            const als = document.querySelectorAll(".bactive"); //

                            als.forEach((e) => {
                              e.classList.remove("bactive");
                            });

                            i.target.classList.add("bactive");
                            //Product.color=i.target.value
                            document.querySelector(
                              ".size"
                            ).attributes.value.value =
                              i.target.attributes.value.value;

                            //console.log("pr",document.querySelector(".size").attributes.value.value)//,i.target.parentElement.parentElement.attributes.value.value)
                            //
                          }}
                        >
                          9
                        </label>
                      </span>
                      <span id="yellow">
                        <label
                          style={{ backgroundColor: "white" }}
                          className="circle   "
                          alt=""
                          value="12"
                          onClick={(i) => {
                            const als = document.querySelectorAll(".bactive"); //

                            als.forEach((e) => {
                              e.classList.remove("bactive");
                            });

                            i.target.classList.add("bactive");
                            //Product.color=i.target.value
                            document.querySelector(
                              ".size"
                            ).attributes.value.value =
                              i.target.attributes.value.value;

                            //console.log("pr",document.querySelector(".size").attributes.value.value)//,i.target.parentElement.parentElement.attributes.value.value)
                            //
                          }}
                        >
                          12
                        </label>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="button">
                  <div className="button-layer"></div>
                  <button
                    onClick={() => {
                      dcolorandsize.size =
                        document.querySelector(".size").attributes.value.value;
                      dcolorandsize.color =
                        document.querySelector(
                          ".colour"
                        ).attributes.value.value;

                      const selectedproduct = {
                        id:
                          Product.id + dcolorandsize.color + dcolorandsize.size,
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

                      dispatch(addTocart(selectedproduct));
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              //product card ends
            );
          })}
        </div>
      </div>
      Allproducts
    </div>
  );
};

export default Allproducts;
