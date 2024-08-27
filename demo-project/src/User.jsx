import React from 'react'

import useFetch from './hooks/useFetch'

const User =() =>{

    const data = useFetch("https://jsonplaceholder.typicode.com/users")
    console.log(data)
    return (
        <div className='container-fluid'>
            <h1 className='text-center m-5 text-primary'>Users</h1>
            <table className='table shadow'>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map(user=>(
                            <tr key ={user?.id}>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.address?.street},{user?.address?.suite},{user?.address?.city},{user?.address?.zipcode}</td>
                                <td>{user?.phone}</td>
                                <td>{user?.website}</td>
                                <td>{user?.company?.name}</td>
                        
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
        </div>
        
    )
}

export default User