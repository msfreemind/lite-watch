import React from 'react';
import { Link } from 'react-router-dom';
import firstImage from 'just-watch.png'
import secondImage from 'main-page.png'

const Splash = () => {
  return (
    <div className="splash-main">
      <div className="splash first-splash">
        <div className="splash-heading">
          <h1>Just Watch Videos</h1>
          <h2>No ads, no algorithms. Just videos.</h2>
          <button className="enter-button"><Link to="/feed">ENTER</Link></button>
        </div>

        <img className="splash-main-img" src={firstImage} alt="" />
      </div>

      <div className="splash second-splash">
        <img className="splash-main-img" src={secondImage} alt="" />

        <div className="splash-heading">
          <h1>Minimalist Interface</h1>
          <h2>No clutter, no nonsense.</h2>
        </div>                    
      </div>

      <div className="splash-bottom">
        <h1>Get Started</h1>
        <button className="enter-button"><Link to="/feed">ENTER</Link></button>
      </div>
    </div>
  );
}

export default Splash;