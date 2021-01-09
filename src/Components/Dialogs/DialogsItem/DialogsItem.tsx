import React from "react";
import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import { DialogType } from "../../../redux/store";

export const DialogItem: React.FC<DialogType> =(props)=>{
    return  <div className={s.dialog}>
        <NavLink activeClassName={s.active} to={"/dialogsHook/"+`${props.id}`}>{props.name}</NavLink>
    </div>
}

