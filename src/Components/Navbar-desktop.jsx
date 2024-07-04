import React from 'react'
import  "../css/Navbar-Desktop.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faShoppingCart,faHeart,faUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Navbardesktop = () => {
  return (
    
    <div>

<nav className="nava">
  <div className="nav__elements">
    <div className="nav__logo"> <span>s</span><span>y</span><span>w</span><span>r</span><span>.</span></div>
    <ul className="nav__groups">
      <li className="nav__group"><a className="nav__group__link">Footwears</a>
        <ul className="nav__group__dropdown">
          <div className="multi-column">
            <ul className="product-list multi" data-type="table">
              <li className="product-list__title title">For Mens</li>
              <li className="product-list__link"><a>Running Shoes</a></li>
              <li className="product-list__link"><a>Casual Shoes</a></li>
              <li className="product-list__link"><a>Football shoes</a></li>
              <li className="product-list__link"><a>Sports Shoes</a></li>
              <li className="product-list__link"><a>Sandals</a></li>
            </ul>
            <ul className="product-list multi" data-type="chair">
              <li className="product-list__title title">For Womens</li>
              <li className="product-list__link"><a>Running Shoes</a></li>
              <li className="product-list__link"><a>Casual Shoes</a></li>
              <li className="product-list__link"><a>Football shoes</a></li>
              <li className="product-list__link"><a>Sports Shoes</a></li>
              <li className="product-list__link"><a>Sandals</a></li>
              <li className="product-list__link"><a>High Heels</a></li>
             
            </ul>
            <ul className="product-list multi" data-type="support">
              <li className="product-list__title title">For Kids</li>
              <li className="product-list__link"><a>Running Shoes</a></li>
              <li className="product-list__link"><a>Casual Shoes</a></li>
              <li className="product-list__link"><a>Football shoes</a></li>
              <li className="product-list__link"><a>Sports Shohoes</a></li>
              <li className="product-list__link"><a>School Shoes</a></li>
            </ul>
            <ul className="article-list">
              <li className="article-list__title title">For Your Inspiration</li>
              <li className="article-list__link"><a>Daily activity in minimal footwear increases foot strength !</a></li>
              <li className="article-list__link"><a>The Latest Trend: Comfort over everything</a></li>
              <li className="article-list__link"><a>Top 10 trends in footwear</a></li>
            </ul><img className="product-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-table.jpg" data-match="table"/><img className="product-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-chair.jpg" data-match="chair"/><img className="product-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-support.jpg" data-match="support"/>
          </div>
        </ul>
      </li>
      <li className="nav__group"><a className="nav__group__link">Cloths</a>
        <ul className="nav__group__dropdown">
          <div className="multi-column">
            <ul className="product-list" data-type="floor">
              <li className="product-list__title title">Floor Covers</li>
              <li className="product-list__link"><a>Area rugs</a></li>
              <li className="product-list__link"><a>Door mats</a></li>
              <li className="product-list__link"><a>Hallway runners</a></li>
              <li className="product-list__link"><a>Fake grass</a></li>
            </ul>
            <ul className="product-list" data-type="wall">
              <li className="product-list__title title">Wall Covers</li>
              <li className="product-list__link"><a>Wall art</a></li>
              <li className="product-list__link"><a>#basic quotes</a></li>
              <li className="product-list__link"><a>Nature wallpapers</a></li>
              <li className="product-list__link"><a>Memo boards</a></li>
              <li className="product-list__link"><a>Chalk boards</a></li>
            </ul>
            <ul className="product-list" data-type="window">
              <li className="product-list__title title">Window Capes</li>
              <li className="product-list__link"><a>Curtains</a></li>
              <li className="product-list__link"><a>Tapestries</a></li>
              <li className="product-list__link"><a>Hanging flowers</a></li>
              <li className="product-list__link"><a>Herb gardens</a></li>
            </ul>
            <ul className="product-list" data-type="cool">
              <li className="product-list__title title">It Just Looks Cool</li>
              <li className="product-list__link"><a>Teepees</a></li>
              <li className="product-list__link"><a>Faerie lights</a></li>
              <li className="product-list__link"><a>Easels</a></li>
              <li className="product-list__link"><a>Vintage bicycles</a></li>
            </ul>
            <ul className="article-list">
              <li className="article-list__title title">For Your Inspiration</li>
              <li className="article-list__link"><a>Do the Eat, Pray, Love: Fake Grass For Your Office</a></li>
              <li className="article-list__link"><a>Do You Really Work Better When You're Stepping On A White, Fluffy Rug?</a></li>
              <li className="article-list__link"><a>Yoga Mats: An Exercise Tool and An Office Rug? Win!</a></li>
            </ul><img className="product-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-floor.jpg" data-match="floor"/><img className="product-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-wall.jpg" data-match="wall"/><img className="product-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-window.jpg" data-match="window"/><img className="product-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-cool.jpg" data-match="cool"/>
          </div>
        </ul>
      </li>
      <li className="nav__group"><a className="nav__group__link">Work Friends</a>
        <ul className="nav__group__dropdown">
          <div className="multi-column">
            <ul className="product-list" data-type="plant">
              <li className="product-list__title title">Plants</li>
              <li className="product-list__link"><a>Succulents</a></li>
              <li className="product-list__link"><a>Large plants</a></li>
              <li className="product-list__link"><a>Lucky charm plants</a></li>
              <li className="product-list__link"><a>Solar-powered plants</a></li>
              <li className="product-list__link"><a>Crochet succulents</a></li>
            </ul>
            <ul className="product-list" data-type="buddy">
              <li className="product-list__title title">Buddies</li>
              <li className="product-list__link"><a>Giant plush toys</a></li>
              <li className="product-list__link"><a>Celebrity cutouts</a></li>
              <li className="product-list__link"><a>Mirrors</a></li>
            </ul>
            <ul className="product-list" data-type="items">
              <li className="product-list__title title">For The Table</li>
              <li className="product-list__link"><a>Origami</a></li>
              <li className="product-list__link"><a>Figurines</a></li>
              <li className="product-list__link"><a>Candles</a></li>
              <li className="product-list__link"><a>Pixar lamps</a></li>
            </ul>
            <ul className="product-list" data-type="pets">
              <li className="product-list__title title">For The Pets</li>
              <li className="product-list__link"><a>Pet beds</a></li>
              <li className="product-list__link"><a>Pet houses</a></li>
              <li className="product-list__link"><a>Cat trees & condos</a></li>
              <li className="product-list__link"><a>Bunny hutches</a></li>
            </ul>
            <ul className="article-list">
              <li className="article-list__title title">For Your Inspiration</li>
              <li className="article-list__link"><a>Why Pets Make The Best Colleagues Ever! (They Don't Talk, That's Why)</a></li>
              <li className="article-list__link"><a>Your Succulent Plants Die Too Easily? Try Crochet Plants Instead</a></li>
              <li className="article-list__link"><a>[Quiz] Which Eeveevolution Is Your Work Soulmate?</a></li>
            </ul><img className="product-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-plant.jpg" data-match="plant"/><img className="product-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-buddy.jpg" data-match="buddy"/><img className="product-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-items.jpg" data-match="items"/><img className="product-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-pets.jpg" data-match="pets"/>
          </div>
        </ul>
      </li>
    </ul>
    <div className="nav__cart"> <Link to="/shoppingcart">cart</Link> </div>
  </div>
</nav>


        
    </div>
  )
}

export default Navbardesktop