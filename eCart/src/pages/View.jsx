import React from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToWishList } from '../redux/slices/wishListSlice'

const View = () => {
    const myWishlist = useSelector(state=>state.wishlistReducer)
    const dispatch = useDispatch()
    const[product,setProduct] = useState({})
    const {id} = useParams()
    // console.log(id)


    useEffect(()=>{
        if( sessionStorage.getItem("allProducts")){
            const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
            setProduct(allProducts.find(item=>item.id==id))
        }
    },[])

    // console.log(product);

    const handleWishlist = (product)=>{
        if(myWishlist?.includes(product)){
            alert("product already in your wishList !!!")
        }else{
            dispatch(addToWishList(product))
        }

    }

    return (

        <>
            <Header />
            <div style={{ minHeight: '90vh' }} className="flex justify-center items-center mt-5">
                <div className="grid grid-cols-2 items-center">
                    <img style={{ width: '100 %', height: '600px' }} src={product?.thumbnail} alt="" />
                    <div>
                        <h3>PID:1 {product?.id}</h3>
                        <h1 className="text-3xl font-bold">{product?.title}</h1>
                        <h4 className='font-bold text-red-500 text-x1'>${product?.price}</h4>
                        <p><span className='font-bold'>Description :</span> {product?.description}</p>
                        <div className="flex justify-between m-5">
                            <button onClick={()=>handleWishlist()} className="bg-blue-600 text-white p-2 rounded">ADD TO WISHLIST</button>
                            <button className="bg-green-600 text-white p-2 rounded">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default View