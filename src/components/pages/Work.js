import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Work = () => {
      return (
          <Carousel>
        
              <div className='carouselItem'>
                  <img src='https://i.imgur.com/2hJjlnD.png' />
                  <a href='https://reconnect-1.herokuapp.com/' className="legend">Family Reconnect Board</a>
              </div>
              <div className='carouselItem'>
                  <img src="https://i.imgur.com/Xo4pxz0.png" />
                  <a href='https://nathanrusselldev.github.io/WARM-Trash-to-Treasure/' className="legend">Trash to Treasure</a>
              </div>
              <div className='carouselItem'>
                  <img src="https://github.com/nathanrusselldev/russellNoteTaker/blob/main/public/assets/images/WebsiteExample.png?raw=true" />
                  <a href='https://nathanrusselldev.github.io/russellNoteTaker/' className="legend">Offline Note Taker</a>
              </div>
              <div className='carouselItem'>
                  <img src="assets/3.jpeg" />
                  <p className="legend">Legend 3</p>
              </div>
              <div className='carouselItem'>
                  <img src="assets/3.jpeg" />
                  <p className="legend">Legend 3</p>
              </div>
              <div className='carouselItem'>
                  <img src="assets/3.jpeg" />
                  <p className="legend">Legend 3</p>
              </div>
          </Carousel>
      );
  }

export default Work; 