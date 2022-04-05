import React, {useState} from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Work from './pages/Work'
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />
        }
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
        if (currentPage === 'Work') {
            return <Work />
        }
    } 


const changePage = (page) => setCurrentPage(page)

    return (
        <div id='main' className='main'>
            <header className='navBar'>
                <Header />
                <NavTabs changePage={currentPage} handlePageChange={changePage} />
            </header>
            <div className='content'>
                {renderPage()}
            </div>

            <Footer />
        </div>
      );
};
