import React from "react";
import s from '../Dialogs.module.css'
import {MessageType} from "../../../redux/store";



export const Message: React.FC<MessageType> =(props)=>{
    return  <div className={s.message}>{props.message}</div>
}

