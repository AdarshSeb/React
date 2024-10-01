import React from 'react'


const Counter = () => {
    return (
        <div className="border rounded p-5 text center">
            <h1 style={{ fontSize: '100px' }}>100</h1>
            <div className='d-flex justify-content-between mt-5' style={{ width: '500px' }}>
                <button className='btn btn-warning'>Decrement</button>
                <button className='btn btn-danger'>Reset</button>
                <button className='btn btn-success'>Increment</button>

            </div>
            <div className='d-flex justify-content-between align-items-center mt-5'>
                <input type="text" placeholder='Input Incremnet Amount' className='form-control' />
                <button className='btn btn-primary ms-3'>Increment By Amount</button>

            </div>

        </div>
    )
}

export default Counter