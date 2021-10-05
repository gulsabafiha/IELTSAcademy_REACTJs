import React from 'react';

const About = () => {
    return (
        <div>
             <h3 style={{ textAlign: 'center', fontSize: '3rem',color:'rgb(167, 26, 26)' }}>About</h3>
             <hr className='mx-auto' style={{color:'rgb(167, 26, 26)',width:'80%',height:'2px'}} />
            <br />
            <br />
            <div className='d-flex'>
                <div style={{padding:'2rem'}}>
                    <h2>Learn English with the British Council and you’ll be learning with the world’s English experts.</h2>
                <p >Prepare for your test with a range of free IELTS study materials and resources from the British Council. 

The first step making sure you are ready to take IELTS is to prepare for it so you know what to expect on the test day.

Our IELTS learning materials will get you acquainted with the test format and also improve your confidence when writing, speaking, reading and listening in English.

Even if you believe you are a proficient user of English, we still recommend that you prepare thoroughly for your test with our helpful IELTS training resources.</p>
                </div>
                <div>
                    <img src="https://www.britishcouncil.org.bd/sites/default/files/styles/bc-landscape-800x450/public/india_00678.jpg?itok=_5lUm4Sm" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default About;