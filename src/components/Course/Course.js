import React from 'react';
import { Card } from 'react-bootstrap';

const Course = (props) => {
    const { name, details, img } = props.course;
    return (
        <div className='container-single mx-auto'>
        <div className='card m-5'>
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

export default Course;