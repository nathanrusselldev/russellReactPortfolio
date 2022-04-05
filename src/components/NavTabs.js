import React from 'react';

function NavTabs({currentPage, handlePageChange}) {
    return (
  <div id='pages'>
    <ul className="nav nav-tabs">
      <li className="nav-tab">
        <button 
          href="#home"
          onClick={() => handlePageChange('Home')}
          className='nav-item' 
        >
          Home
        </button>
      </li>
      <li className='nav-tab'>
        <button
          href="#about"
          onClick={() => handlePageChange('About')}
          className='nav-item'
        >
          About
        </button>
      </li>
      <li className="nav-tab">
        <button
          href="#blog"
          onClick={() => handlePageChange('Work')}
          className='nav-item'
        >
          Work
        </button>
      </li>
      <li className="nav-tab">
        <button
          href="#contact"
          onClick={() => handlePageChange('Resume')}
          className='nav-item'
        >
          Resume
        </button>
      </li>
      <li className="nav-tab">
        <button
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className='nav-item'
        >
          Contact
        </button>
      </li>
    </ul>
  </div>
    )
}

export default NavTabs;