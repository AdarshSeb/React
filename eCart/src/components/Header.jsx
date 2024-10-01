import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header =()=>{
    const myWishlist = useSelector(state=>state.wishlistReducer)
    return(
        <nav className='flex w-full bg-yellow-500 fixed top-0 p-3 items-center'>
            <Link to={'/'}><i className="fa-solid fa-truck-fast me-1"></i>E Cart</Link>
            <ul className='flex-1 text-right'>
                <li className='list-none inline-block px-5'><input style={{width:'300px'}} className='rounded p-1'type="text" placeholder='Search Products here!!!'/></li>
                <li className='list-none inline-block px-5'><Link to={'/wishlist'}  > 
                    <i className="fa-solid fa-heart text-red-600 me-1"></i>Wishlist<span className='bg-white rounded p-1'>{myWishlist.length}</span></Link></li>
                <li className='list-none inline-block px-5'><Link to={'/cart'} className='text-white px-20 semi-bold '> 
                    <i className="fa-solid fa-cart-plus me-1 text-green-600"></i>Cart<span className='bg-black rounded p-1'>20</span></Link></li>
            </ul>
        </nav>
    )
}

export default Header