import React from "react";

import s from './Profile.module.css'
import {Myposts} from "./MyPosts/Myposts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostType} from "../../redux/store";
import MypostsConrainer from "./MyPosts/MypostsContainer";
type ProfilePropsType={
    // posts:Array<PostType>
    // newPostText:string
    // dispatch:(action:ActionsTypes)=>void
    profile:any

}
export const Profile: React.FC<ProfilePropsType>=(props)=> {


return <div className={s.content}>
    <ProfileInfo profile={props.profile}/>
    <MypostsConrainer/>
</div>

}