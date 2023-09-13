import React, {useState} from 'react';
// import { Modal, show } from 'react-bootstrap';
const API_IMG ="https://image.tmdb.org/t/p/original/"

const MovieBox =({title, poster_path, vote_average,release_date, overview})=>{
  
    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false)
  
    return(
        <div className='card text-center bg-secondary mb-3'>
            <div className='card-body'>
                <img className='card-img-top' alt='' src={API_IMG+poster_path} />
                <div className='card-body'>
                    <button type='button' className='btn btn-dark' onClick={handleShow}>view more </button>
                    {/* <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img className='card-img-top' alt='' src={API_IMG+poster_path} />
                            <h3>{title}</h3>
                            <h4>ImDb : {vote_average}</h4>
                            <h5>Realease Date : {release_date}</h5>
                            <h6>overview</h6>
                            <br></br>
                            <p>{overview}</p>
                        </Modal.Body>

                    </Modal> */}
                </div>

            </div>
           {/* <h1>{title}</h1>
           <img src={API_IMG+poster_path} alt=""></img>
           <p>{overview}</p> */}
        </div>
    )
};

export default MovieBox;