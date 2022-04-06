import React from 'react';
import {Helmet} from 'react-helmet'

export default function About() {
    return (
      <div className='bioContent contactContent'>
        <h2>Feel Free to contact me at the following sources:</h2>
        <ul>
          <li>
          <div className="badge-base LI-profile-badge contactButton" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="nathan-russell-it" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/nathan-russell-it?trk=profile-badge"></a>
          </div>
          </li>
          <li>
          <a href='mailto:nathanrussell.it@gmail.com'>
          <button 
          className='nav-item contactButton' 
          >
          E-Mail
          </button>
          </a>
          </li>
          <li>
          <a href='https://github.com/nathanrusselldev'>
          <button 
          className='nav-item contactButton' 
          >
          Github
          </button>
          </a>
          </li>
          <li>
          <a href='tel:6144993705'>
          <button 
          className='nav-item contactButton' 
          >
          Phone
          </button>
          </a>
          </li>
        </ul>
      <Helmet>
      <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
      </Helmet>
      </div>
    );
  }