import React from "react";

import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MypostsConrainer from "./MyPosts/MypostsContainer";
import {ProfileDataFormType} from "./ProfileInfo/ProfileInfoDataForm";

type ProfilePropsType = {

    profile:any
    status:string
    updateStatus: (status:string)=>void
    isowner:boolean
    savePhoto: (photo:any)=>void
    saveProfileInfo:(formData: ProfileDataFormType)=>void


}


export const Profile=React.memo(function (props:ProfilePropsType){

    console.log("Profile")
    return <div className={s.content}>
        <ProfileInfo profile={props.profile} saveProfileInfo={props.saveProfileInfo} savePhoto={props.savePhoto} isowner={props.isowner} status={props.status} updateStatus={props.updateStatus}/>
        <MypostsConrainer/>
    </div>

})
