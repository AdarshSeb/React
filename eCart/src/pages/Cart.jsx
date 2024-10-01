import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <>

            <Header />
            <div className="container mx-auto px-4">
                <h1 className="font-bold text-3xl mb-5 text-red-600">Cart Summary</h1>
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 border rounded p-5 shadow">
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <td className="font-semibold">#</td>
                                    <td className="font-semibold">Name</td>
                                    <td className="font-semibold">Image</td>
                                    <td className="font-semibold">Quantity</td>
                                    <td className="font-semibold">Price</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Title</td>
                                    <td>
                                        <img
                                            style={{ width: "70px", height: "70px" }}
                                            src="https://images.unsplash.com/photo-1593487568720-92097fb460fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt=""
                                        />
                                    </td>
                                    <td>
                                        <div className="flex">
                                            <button className="font-bold">-</button>
                                            <input
                                                style={{ width: "40px" }}
                                                type="text"
                                                className="border rounded p-1 me-2 ms-2"
                                                readOnly
                                            />
                                            <button className="font-bold">+</button>
                                        </div>
                                    </td>
                                    <td>$9.99</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="float-right mt-4">
                            <button className="bg-red-600 text-white rounded p-3 me-3">
                                EMPTY CART
                            </button>
                            <Link to={"/"} className="bg-blue-600 text-white rounded p-3 me-3">
                                SHOW MORE
                            </Link>
                        </div>
                    </div>
                    <div className="border rounded shadow p-5">
                        <h1 className="text-2xl font-bold">Total Amount : <span className='text-red-600'>$200</span></h1>
                        <hr />
                        <button className="w-full bg-green-600 rounded p-5 text-white font-bold mt-5">Checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart