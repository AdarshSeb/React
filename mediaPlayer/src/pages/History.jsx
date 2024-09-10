import React from 'react'
import { Link } from 'react-router-dom'

const History =()=>{
    return(
        <div style={{paddingTop:'100px'}}>
            <div className="container d-flex justify-content-between">
                <h3>Watch History</h3>
                <Link to = {'/home'}>Back to Home</Link>
                
            </div>
            <table className="table my-5 shadow">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Caption</th>
                        <th>Link</th>
                        <th>Time Stamp</th>
                        <th> <i className='fa-solid fa-ellipsis-vertical'></i></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Caption</td>
                        <td> <a href="" target="_blank"></a>Link</td>
                        <td>time</td>
                        <td><button className="btn" ><i className="fa-solid fa-trash text-danger"></i></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default History