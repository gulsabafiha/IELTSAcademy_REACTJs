import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Service.css'

const Service = () => {
    const [courses, setCourse] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
        .then(data=>setCourse(data))
    })
    return (
        <div>
            <h3 style={{ textAlign: 'center', fontSize: '3rem',color:'rgb(167, 26, 26)' }}>Service</h3>
            <hr className='mx-auto' style={{color:'rgb(167, 26, 26)',width:'80%',height:'2px'}} />
            <div  className='course-container mt-5 mx-auto'>
                {
                    courses.map(course=><Course course={course}></Course>)
            }
            </div>
        </div>
    );
};

export default Service;