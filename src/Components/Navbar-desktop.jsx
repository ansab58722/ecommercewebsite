import React, { useEffect, useState } from "react";
import "../css/Navbar-Desktop.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbardesktop = () => {


	let subMenu;

	


	const toggleMenu=()=>{
		document.querySelector(".menu").classList.toggle("active");
		document.querySelector(".menu-overlay").classList.toggle("active");
	}



	function showSubMenu(hasChildren){
	   subMenu = hasChildren.querySelector(".sub-menu");
	   subMenu.classList.add("active");
	   subMenu.style.animation = "slideLeft 0.5s ease forwards";
	   const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
	   document.querySelector(".menu").querySelector(".current-menu-title").innerHTML=menuTitle;
	   document.querySelector(".menu").querySelector(".mobile-menu-head").classList.add("active");
	}
   
	function  hideSubMenu(){  
	   subMenu.style.animation = "slideRight 0.5s ease forwards";
	   setTimeout(() =>{
		  subMenu.classList.remove("active");	
	   },300); 
	   document.querySelector(".menu").querySelector(".current-menu-title").innerHTML="";
	   document.querySelector(".menu").querySelector(".mobile-menu-head").classList.remove("active");
	}
	
	
	window.onresize = function(){
		if(this.innerWidth >991){
			if(document.querySelector(".menu").classList.contains("active")){
				toggleMenu();
			}
   
		}
	}




  ///const menuMain = menu.querySelector(".menu-main");

  return (
    <div>
      <header class="header">
        <div class="container">
          <div class="row v-center">
            <div class="header-item item-left">
              <div class="logo">
                <a href="#">MyStore</a>
              </div>
            </div>

            <div class="header-item item-center">
              <div class="menu-overlay" onClick={()=>{

toggleMenu()
			  }}></div>
              <nav class="menu">
                <div class="mobile-menu-head">
                  <div class="go-back" onClick={()=>{

hideSubMenu()

				  }}>
                    <i class="fa fa-angle-left"></i>
                  </div>
                  <div class="current-menu-title"></div>
                  <div class="mobile-menu-close" onClick={()=>{

toggleMenu();


				  }}>&times;</div>
                </div>
                <ul class="menu-main" onClick={(e)=>{
if(!document.querySelector(".menu").classList.contains("active")){
	return;
}
if(e.target.closest(".menu-item-has-children")){
   const hasChildren = e.target.closest(".menu-item-has-children");
 showSubMenu(hasChildren);
}



				}}>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">
                      New <i class="fa fa-angle-down"></i>
                    </a>
                    <div class="sub-menu mega-menu mega-menu-column-4">
                      <div class="list-item text-center">
                        <a href="#">
                          <img src="img/p1.jpg" alt="new Product" />
                          <h4 class="title">Product 1</h4>
                        </a>
                      </div>
                      <div class="list-item text-center">
                        <a href="#">
                          <img src="img/p2.jpg" alt="new Product" />
                          <h4 class="title">Product 2</h4>
                        </a>
                      </div>
                      <div class="list-item text-center">
                        <a href="#">
                          <img src="img/p3.jpg" alt="new Product" />
                          <h4 class="title">Product 3</h4>
                        </a>
                      </div>
                      <div class="list-item text-center">
                        <a href="#">
                          <img src="img/p4.jpg" alt="new Product" />
                          <h4 class="title">Product 4</h4>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">
                      Shop <i class="fa fa-angle-down"></i>
                    </a>
                    <div class="sub-menu mega-menu mega-menu-column-4">
                      <div class="list-item">
                        <h4 class="title">Men's Fashion</h4>
                        <ul>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                        </ul>
                        <h4 class="title">Beauty</h4>
                        <ul>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">Women's Fashion</h4>
                        <ul>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                        </ul>
                        <h4 class="title">Furniture</h4>
                        <ul>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">Home, Kitchen</h4>
                        <ul>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <img src="img/shop1.jpg" alt="shop" />
                      </div>
                    </div>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">
                      Blog <i class="fas fa-angle-down"></i>
                    </a>
                    <div class="sub-menu single-column-menu">
                      <ul>
                        <li>
                          <a href="#">Standard Layout</a>
                        </li>
                        <li>
                          <a href="#">Grid Layout</a>
                        </li>
                        <li>
                          <a href="#">single Post Layout</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">
                      Pages <i class="fas fa-angle-down"></i>
                    </a>
                    <div class="sub-menu single-column-menu">
                      <ul>
                        <li>
                          <a href="#"> Login</a>
                        </li>
                        <li>
                          <a href="#">Register</a>
                        </li>
                        <li>
                          <a href="#">Faq</a>
                        </li>
                        <li>
                          <a href="#">404 Page</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="header-item item-right">
              <a href="#">
                <i class="fas fa-search"></i>
              </a>
              <a href="#">
                <i class="far fa-heart"></i>
              </a>
              <a href="#">
                <i class="fas fa-shopping-cart"></i>
              </a>

              <div class="mobile-menu-trigger" onClick={()=>[
toggleMenu()
			  ]}>
                <span>

				</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbardesktop;
