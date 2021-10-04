import React from 'react';
import './Team.css';

const Team = (props) => {
    const { name, position, details, img } = props.team;
    return (
        <div className='team-card'>
            <div class="team-imgbx">
                    <img src={img}alt=""/>
            </div>
            <div class="contentbx">
                    <h2>{name}</h2>
                    <div class="size">
                        <h3>{position} </h3>
                    </div>
                    <div class="color">
                        <h3>{details} </h3>
                    </div>
                   
                </div>
           
        </div>
    );
};

export default Team;