import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';
import Team from '../Team/Team';
import './Home.css'


const Home = () => {
    const [services, setServices] = useState([]);
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('./homedata.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    useEffect(() => {
        fetch('./expert.json')
            .then(res => res.json())
        .then(data=>setTeams(data))
    }, []);
    return (
        <div>
           
                {/* hero section  */}
                    <div className='bg-img'>
                        <div className='text-bg'>
                            <h1>Bring your tomorrow <br /> closer</h1>
                            <p>Wherever you want to go, taking IELTS with us will <br /> help you get there.</p>
                            <div className='btn-div'>
                                <button className='btn'>Open doors with IELTS</button>
                            </div>
                         
                        </div>
                    </div>
                
                    {/* service section  */}
                    <div className='service'>
                        <h4>IELTS (International English Language Testing System) is the world's most popular English language test for higher education and global migration.</h4>
                        <h3 style={{ textAlign: 'center', fontSize:'3rem',color:'rgb(167, 26, 26)'}}>Courses We have</h3>
                        <hr style={{color:'rgb(167, 26, 26)'}} />
                    </div>
                    <div className='container'>
                        {
                            services.map(service => <SingleService service={ service}/>)
                        }
                     </div>
            
            {/* Meet our expert */}
            <h3 style={{ textAlign: 'center', fontSize: '3rem' ,color:'rgb(167, 26, 26)'}}>Meet Our Teams</h3>
            <hr style={{color:'rgb(167, 26, 26)'}} />
            <div className='team-container'>
                {
                    teams.map(team=><Team team={team}></Team>)
                }
            </div>
        </div>
    );
};

export default Home;