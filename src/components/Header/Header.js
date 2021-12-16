import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="./">
                  <img src="https://sm.ign.com/ign_br/news/n/netflix-ju/netflix-just-bought-the-rights-to-an-rnosleep-horror-story_r3wy.jpg"/>
                </a>
            </div> 
            <div className="header--user">
                <a href="./">
                  <img src="https://i.pinimg.com/564x/e3/94/30/e39430434d2b8207188f880ac66c6411.jpg"/>
                </a>
            </div> 
        </header>
    );
}