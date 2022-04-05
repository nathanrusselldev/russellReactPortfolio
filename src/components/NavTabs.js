import React from 'react';

function NavTabs({currentPage, handlePageChange}) {
    return (
  <div id='pages'>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <button
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </button>
      </li>
      <li className="nav-item">
        <button
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </button>
      </li>
      <li className="nav-item">
        <button
          href="#blog"
          onClick={() => handlePageChange('Work')}
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Work
        </button>
      </li>
      <li className="nav-item">
        <button
          href="#contact"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </button>
      </li>
      <li className="nav-item">
        <button
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </button>
      </li>
    </ul>
  </div>
    )
}

export default NavTabs;