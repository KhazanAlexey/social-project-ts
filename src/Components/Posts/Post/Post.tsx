import React from "react";
import s from './Post.module.css'
import {PostType} from "../../../redux/store";

export const Post: React.FC<PostType> =(props)=> {
    return (
        <div className={s.item}>
            <img src='https://klike.net/uploads/posts/2019-09/medium/1567844265_11.jpeg'/>
            {props.message}
            <div><span>Like: </span>  {props.likeCounts}</div>
        </div>
    )
}