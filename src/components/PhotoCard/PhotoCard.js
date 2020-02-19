import React , { useState, useEffect } from 'react';
import Image from './Image';
import Info from './Info';
import ChangeDate from './ChangeDate';
import axios from 'axios';

function PhotoCard() {
    const [ currentDate, setDate ] = useState("");
    const [ url, setURL ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ desc, setDesc ] = useState("");
    const [ newDate, setNewDate ] = useState("");
    const [ count, setCount ] = useState(0);

    // Get Today's Date
    useEffect(() => {
        let today = new Date();
        let year = today.getFullYear();
        let day = `${today.getDate()}`;
        let month = `${today.getMonth()+1}`;        
        if(day.length <= 1){
            day = "0"+day;
        }
        if(month.length <= 1){
            month = "0" + month;
        }
        let fullDate = `${year}-${month}-${day}`;
        setDate(fullDate);
        setCount(count + 1);
    }, []);

    useEffect(() => {
        if(count >= 1){
            axios.get(`https://api.nasa.gov/planetary/apod?api_key=3qBWScZagmjqE5SnUgsG5tA3nZiQAhasRHUFSzw2&date=${currentDate}`)
            .then(res => {
                setURL(res.data['url']);
                setTitle(res.data['title']);
                setDesc(res.data['explanation']);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [currentDate])


    const submitDate = (e => {
        e.preventDefault();
        console.log("Submitted Date ");
        setDate(newDate);
        // If date format is correct, update currentDate
        // Otherwise, alert user to use correct format
    });

    const changeDate = (e => {
        setNewDate(e.target.value);
    })

    return (
        <div className="photo-card">
            <div className="change-date">
                <ChangeDate submitDate={submitDate} value={newDate} change={changeDate}/>
            </div>
            <Image url={url}/>
            <Info title={title} desc={desc}/>
        </div>
    );
}

export default PhotoCard;