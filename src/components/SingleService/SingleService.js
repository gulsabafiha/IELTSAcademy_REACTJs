import React from 'react';
import { Card } from 'react-bootstrap';
import './SingleService.css'

const SingleService = (props) => {
    const { name, details, img } = props.service;
    return (
        <div className='container-single'>
            <div className='card'>
                <div className='imgbx'>
                    <Card.Img  variant="top" src={img} />
                </div>
             
                <div className='content'>
                    <h3>{name}</h3>
                    {details}
                </div>
            </div>
        </div>
    );
};

export default SingleService;