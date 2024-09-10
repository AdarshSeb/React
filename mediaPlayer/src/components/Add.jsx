import React, {useState} from 'react'
import {Modal,Button,FloatingLabel,Form} from'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadVideoAPI } from '../services/allAPI';

const Add =()=>{

    const[invalidLink,setInvalidLink] = useState(false)

    const [videoDetails,setVideoDetails] = useState({
        caption:"",url:"",link:""
    })

    console.log(videoDetails);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getEmbedURl=(link)=>{
        if(link.includes("v=")){
            let videoId = link.split("v=")[1].slice(0,11)
            setVideoDetails({...videoDetails, link:`https://www.youtube.com/embed/${videoId}`})
            setInvalidLink(false)
            
        }else{
            setInvalidLink(true)
            setVideoDetails({...videoDetails,link:""})
        }
    }

    const handleUpload= async ()=>{
        console.log("handle functio reched")
        const{caption,url,link} = videoDetails
        if(caption && url && link){
            //toast.success("proceed to api")
            const result = await uploadVideoAPI(videoDetails)
            console.log(result)
            if(result.status>=200 && result.status<300){
                handleClose()
                setVideoDetails({...videoDetails,caption:"",url:"",link:""})
                toast.success(`${result.data.caption} added to your collection`)
            }

        }else{
            toast.warning("Please fill the form completely")
        }
    }
    return(
        <>
        <div className='d-flex align-items-center'>
            <h5>Upload New Videos</h5>
            <button onClick={handleShow} className='btn btn-warning ms-5 rounded-circle fw-bolder fs-5'>+</button> 

            
        </div>
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
            <Modal.Title>Uploading Videp Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="border rounded p-3">
                <FloatingLabel
                     controlId="floatingInputCaption"
                    label="Video Caption"
                    className="mb-3"
                >
                <Form.Control onChange={e=>setVideoDetails({...videoDetails, caption:e.target.value})} type="text" placeholder="Video Caption" />
                </FloatingLabel>

                <FloatingLabel
                     controlId="floatingInputImage"
                    label="Image URL"
                    className="mb-3"
                >
                <Form.Control onChange={e=>setVideoDetails({...videoDetails, url:e.target.value})} type="text" placeholder="Image URL" />
                </FloatingLabel>

                <FloatingLabel
                     controlId="floatingInputLink"
                    label="Youtube Video Link"
                    className="mb-3"
                >
                <Form.Control onChange={e=>getEmbedURl(e.target.value)}  type="text" placeholder="Youtube Video Link" />
                </FloatingLabel>

                {
                    invalidLink &&
                    <div className='text-danger fw-bolder mt-3'>Invalid Youtube link</div>
                }
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button onClick={handleUpload} variant="primary">Upload</Button>
            </Modal.Footer>

        </Modal>
        <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
        </>

        
    )
}

export default Add