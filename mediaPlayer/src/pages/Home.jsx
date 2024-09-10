import React from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'

const Home =()=>{
    return(
        <div style={{paddingTop:'100px'}}>
            <div className="container d-flex justify-content-between">
                <Add/>
                <Link to = {'/history'}>Watch History</Link>
            </div>
            <div className="container-fluid row my-5">
                <div className="col-lg-6">
                    <h3>All Videos</h3>
                    <View/>
                </div>
                <div className="col-lg-6">
                    <Category/>
                    
                </div>
            </div>
        </div>
    )
}

export default Home