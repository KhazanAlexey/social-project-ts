import React from 'react';
import '../../App.css';
import {NavLink} from "react-router-dom";



function RenderNews(props) {


    return (
        <div className="item">

            <a href={props.url}>{props.name}</a>



        </div>
    );
}



export default RenderNews;