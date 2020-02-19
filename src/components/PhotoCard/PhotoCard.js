import React , { useState, useEffect } from 'react';
import Image from './Image';
import Info from './Info';
import axios from 'axios';

function PhotoCard() {
    const [ currentDate, setDate ] = useState("");
    const [ url, setURL ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ desc, setDesc ] = useState("");

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=3qBWScZagmjqE5SnUgsG5tA3nZiQAhasRHUFSzw2')
        .then(res => {
            setDate(res.data['date']);
            setURL(res.data['url']);
            setTitle(res.data['title']);
            setDesc(res.data['explanation']);
        })
        .catch(err => {
            console.log(err);
        })
    }, [currentDate]);

    const submitDate = (e => {
        e.preventDefault();
        console.log("Submitted Date ", e.target.value);
        // If date format is correct, update currentDate
        // Otherwise, alert user to use correct format
    });

    return (
        <div className="photo-card">
            <div className="change-date">
                <form onSubmit={submitDate}>
                    <p>Select Date: </p>
                    <input placeholder="YYYY-DD-MM"></input>
                </form>
            </div>
            <Image url={url}/>
            <Info title={title} desc={desc}/>
        </div>
    );
}

export default PhotoCard;