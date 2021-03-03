import React from "react";

import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MypostsConrainer from "./MyPosts/MypostsContainer";

type ProfilePropsType = {
    // posts:Array<PostType>
    // newPostText:string
    // dispatch:(action:ActionsTypes)=>void
    profile:any
    status:string
    updateStatus: (status:string)=>void

}
// export const Profile: React.FC<ProfilePropsType> = (props) => {
//     console.log("Profile")
//     return <div className={s.content}>
//         <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
//         <MypostsConrainer/>
//     </div>
//
// }

export const Profile=React.memo(function (props:ProfilePropsType){

    console.log("Profile")
    return <div className={s.content}>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MypostsConrainer/>
    </div>

})
