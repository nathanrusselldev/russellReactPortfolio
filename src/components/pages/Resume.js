import React from 'react';

const downloadResume = () => {
  document.getElementById('resumeLink').window.location.href='https://drive.google.com/file/d/1qYSeu0ge65w3Euq1132cz0HnxOrOqr3g/view?usp=sharing'
}


export default function About() {
    return (
      <div className='bioContent resumeContent'>
        <a href='https://drive.google.com/file/d/1qYSeu0ge65w3Euq1132cz0HnxOrOqr3g/view?usp=sharing'>
          <button 
          className='nav-item' 
        >
          Download Resume
        </button>
        </a>
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vTR0GtTNtGhtqKojx2u1916RjOYOav9MUvdcQzv4-UD8YF1oZyoy9xkIylkgob8fRYfJt6oFxKdbS2k/pub?embedded=true" className='resumeEmbed'>
        </iframe>
      </div>
    );
}
