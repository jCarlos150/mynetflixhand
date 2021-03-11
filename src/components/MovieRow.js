import React, { useState } from 'react';
import './MovieRow.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowAForwardIosIcon from "@material-ui/icons/ArrowForwardIos";


// eslint-disable-next-line import/no-anonymous-default-export
export default ({ title, items }) => {
    const [scrowll, setScroll] = useState(0)

    const handleLeft = () => {
        let x = scrowll + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }

        setScroll(x);
    }

    const handleRight = () => {
        let x = scrowll - Math.round(window.innerWidth / 2);
        let listwidth = items.results.length * 150;
        if (window.innerWidth - listwidth > x) {
            x = (window.innerWidth - listwidth) - 60;
        }
        console.log(x);
        setScroll(x);
    }

    return (
        <dvi className="MovieRow">
            <h2>{title}</h2>

            <div className="MovieRow--left" onClick={handleLeft}>
                <ArrowBackIosIcon />
            </div>
            <div className="MovieRow--right" onClick={handleRight}>
                <ArrowAForwardIosIcon />
            </div>


            <div className="MovieRow--area">
                <div className="MovieRow--list" style={{
                    width: items.results.length * 150,
                    marginLeft: scrowll

                }}>
                    {items.results.length !== 0 && items.results.map((item, key) => (
                        <div className="MovieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>

            </div>
        </dvi>

    );
}