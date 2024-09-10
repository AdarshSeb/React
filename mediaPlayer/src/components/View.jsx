import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideoAPI } from '../services/allAPI'
import { useEffect } from 'react'

const View = () => {
    useEffect(() => {
        getAllVideos()
    }, [])

    const [allVideos, setAllVideos] = useState([])

    const getAllVideos = async () => {
        const result = await getAllVideoAPI()
        if (result.status >= 200 && result.status < 300) {
            setAllVideos(result.data)
        }
    }

    console.log(allVideos)
    return (
        <>
            <Row>

                {
                    allVideos?.map(video => (
                        <Col key={video?.id} className='mb-4' sm={12} md={6} lg={4}>
                            <VideoCard  displayData={video}/>
                        </Col>
                    ))
                }

            </Row>
        </>
    )
}

export default View