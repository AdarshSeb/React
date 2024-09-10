import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/landingImg.gif'
import feature1 from '../assets/feature1.jpg'
import feature2 from '../assets/feature2.jpg'
import Card from 'react-bootstrap/Card';

const Landing =()=>{
    return(
        <div style={{paddingTop:'100px'}} className='container'>
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
                    <p style={{textAlign:'justify'}} className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad officia voluptatum quasi, ab delectus rem neque corrupti dolores quia laboriosam ipsa odit ducimus iste magnam dicta eveniet aliquid dignissimos reprehenderit!</p>
                    <Link to={'/home'} className='btn btn-info'>Get Started</Link>
                </div>
                <div className ="col"></div>
                <div className="col-lg-6">
                    <img  className='img-fluid ms-5' src={landingImg} alt="landing image"/>
                </div>
                
            </div>
            <div className="my-5">
                <h3 >Features</h3>
                <div className='row mt-5'>
                    <div className ='col-lg-4'>
                    <Card className='p-2' style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={feature1} />
                        <Card.Body>
                        <Card.Title>Managing Videos</Card.Title>
                        <Card.Text>
                            User can upload view and remove videos
                        </Card.Text>
                         
                        </Card.Body>
                        </Card> 
                    </div>
                    <div className ='col-lg-4'>
                    <Card className='p-2' style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={feature2} />
                        <Card.Body>
                        <Card.Title>Categories Videos</Card.Title>
                        <Card.Text>
                            User can categories the video by drag and drop feature
                        </Card.Text>
                         
                        </Card.Body>
                        </Card> 
                    </div>
                    <div className ='col-lg-4'>
                    <Card className='p-2' style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={feature1} />
                        <Card.Body>
                        <Card.Title>Managing Videos</Card.Title>
                        <Card.Text>
                            User can upload view and remove videos
                        </Card.Text>
                         
                        </Card.Body>
                        </Card> 
                    </div>
                </div>
            </div>

            <div className='my-5 row border rounded p-5'>
                <div className="col-lg-5">
                    <h3 className="text-warning">Simple Fast and Powerful</h3>
                    <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everythig</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repudiandae rem error ab, sit illo nesciunt quaerat expedita voluptatem, omnis vero nisi molestias. 
                    Delectus reiciendis non corporis inventore modi. Numquam.</p>

                    <p style={{textAlign:'justify'}}><span className='fs-5'>Categories Video</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repudiandae rem error ab, sit illo nesciunt quaerat expedita voluptatem, omnis vero nisi molestias. 
                    Delectus reiciendis non corporis inventore modi. Numquam.</p>

                    <p style={{textAlign:'justify'}}><span className='fs-5'>Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repudiandae rem error ab, sit illo nesciunt quaerat expedita voluptatem, omnis vero nisi molestias. 
                    Delectus reiciendis non corporis inventore modi. Numquam.</p>
                </div>
                <div className="col"></div>
                <div className="col-lg-6">
                    <iframe width="600" height="503" src="https://www.youtube.com/embed/_ziODBruqdA" title="ISRO Chairman Dr. Somanath: Aliens, Chandrayaan, Mars &amp; Black Holes | Outer Space Special | TRS 435" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Landing