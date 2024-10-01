import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/productSlice'

const Home = () => {
    const dispatch = useDispatch()
    const { allProducts, loading, error } = useSelector(state => state.productReducer)
    

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])
    return (
        <>
            <Header />
            <div style={{ marginTop: '80px' }} className='container mx-auto px-4'>
                {
                    loading ?
                        <div style={{ height: '60vh' }} className='flex justify-center items-center font-bold'>
                            <img width={'90px'} height={'90px'} src="https://media1.giphy.com/media/RgzryV9nRCMHPVVXPV/giphy.webp?cid=790b7611n4ukor8ii8uxxofqv89a52n32xlmai4rg3ust0e7&ep=v1_gifs_search&rid=giphy.webp&ct=g" alt="" className='me-4' />
                        Loading.....
                    </div>
                        :
                        <div className='grid grid-cols-4 gap-4'>
                            {
                                allProducts.length > 0 ?
                                    allProducts?.map(product => (
                                        <div key={product?.id} className="rounded border p-2 shadow">
                                            <img style={{ width: '100 %', height: '200px' }} src={product?.thumbnail} alt="" />
                                            <div className="text-center">
                                                <h3 className='text-x1 font-bold'>{product?.title}</h3>
                                                <Link className='bg-blue-500 text-white p-2 inline-block rounded' to={`/${product?.id}/view`}>View More</Link>
                                            </div>
                                        </div>

                                    ))

                                    :
                                    <div className='font-bolde text center mt-5 mb-5 text-red-600'>
                                        Product not found
                                </div>
                            }

                        </div >
                }
            </div >
        </>
    )
}

export default Home