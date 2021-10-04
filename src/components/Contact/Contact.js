import React from 'react';
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import './Contact.css';
const Contact = () => {
    return (
       <div style={{overflow:'hidden'}}>
     
             <h3 style={{ textAlign: 'center', fontSize: '3rem',color:'rgb(167, 26, 26)' }}>Contact with Us</h3>
            <hr style={{ color: 'rgb(167, 26, 26)' }} />
            <br />
            <br />
            <Container style={{marginRight:'-12rem'}}>
                <FloatingLabel
                        controlId="floatingInput"
                        label="First Name"
                        className="mb-3"
                    >
                    <Form.Control type="text" placeholder="Gulsaba" />
                </FloatingLabel>
                    <br />
                <FloatingLabel
                    controlId="floatingInput"
                    label="Last Name"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="Fiha" />
                </FloatingLabel>
                    <br />
                <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <br />
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <br />
                <div className='con-btn'>
                    <button >SignUp</button>
                </div>
            </Container>
        </div>
    );
};

export default Contact;