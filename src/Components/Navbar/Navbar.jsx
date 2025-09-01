import logo from '/Users/moulikmaharjan/Desktop/E-commerce/frontend/src/Components/Assets/logo.png'; 
import cart_icon from '/Users/moulikmaharjan/Desktop/E-commerce/frontend/src/Components/Assets/cart_icon.png';
import './Navbar.css'; 
import { Link, NavLink } from 'react-router-dom';
import nav_dropdown from '/Users/moulikmaharjan/Desktop/E-commerce/frontend/src/Components/Assets/nav_dropdown.png';
import { useContext, useState, useRef } from 'react';

import{ShopContext} from '../../Context/ShopContext'
const Navbar = () => {

    const [menu,setmenu]= useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle=(e)=>{
            menuRef.current.classList.toggle('nav-menu-visible')
            e.target.classList.toggle('open');
    }
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>Shopper</p>
                </div>
                <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
                <ul ref={menuRef} className='nav-menu'>
                    <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration: 'none' }} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
                    <li onClick={()=>{setmenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link> {menu==="mens"?<hr/>:<></>}</li>
                    <li onClick={()=>{setmenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link> {menu==="womens"?<hr/>:<></>}</li>
                    <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>  {menu==="kids"?<hr/>:<></>}</li>
                </ul>
                <div className='nav-login-cart'>
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                    <div className="nav-cart-count">0</div>

                </div>
        </div>
    )
}  
export default Navbar;