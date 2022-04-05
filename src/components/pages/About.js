import React from 'react';
import myPhoto from '../../assets/images/portrait.jpg'

export default function About() {
    return (
        <div className='bioContent'>
          <div className='bioImage'>
            <img className='bioImage' src={myPhoto} />
          </div>
            <p className='bio'>
            I truly believe that simplicity rules when it comes to coding and it is an approach I take when tackling all problems. My name is Nathan and i am a full stack developer located in Columbus, Ohio. <br></br>
            <br></br>
            I have never been afraid of reinventing myself and took some time off work to finish a degree is psychology and complete a coding bootcamp. Becoming a developer is something I have always dreamed of and now I feel I am ready to enact that dream!
            <br></br>
            <br></br>
            Feel free to view my portfolio and resume under their respective tabs, I am sure we can do great things together.
            </p>
            
        </div>
        
    );
}

