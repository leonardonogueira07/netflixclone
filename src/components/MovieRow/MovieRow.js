import React, { useState } from 'react';
import './MovieRow.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 70;
        }
        setScrollX(x);
    }

    return (
        <div className="MovieRow">
            <h2>{title}</h2>
            <div className="movierow--set">
                <div className="movierow--left" onClick={handleLeftArrow}>
                    <ArrowBackIosIcon style={{fontSize: 20}}/>
                </div>  
                <div className="movierow--right" onClick={handleRightArrow}>
                    <ArrowForwardIosIcon  style={{fontSize: 20}}/>
                </div>                           
            </div>
            <div className="movieRow--area">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results?.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>                
            </div>
        </div>
    )
}
