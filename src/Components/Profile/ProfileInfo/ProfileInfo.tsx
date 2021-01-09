import React from "react";

import s from './ProfileInfo.module.css'
import {Prealoader} from "../../common/Preloader";
import { ProfileType } from "../../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType
}
export const ProfileInfo: React.FC<ProfilePropsType> = (props) => {
    if (!props.profile) {
        return <Prealoader/>
    }
    return <div className={s.content}>

        <div><img src={"https://cdn.mos.cms.futurecdn.net/BVb3Wzn9orDR8mwVnhrSyd-320-80.jpg"}/></div>


        <div className={s.description}>
            <img src={props.profile.photos.large}/>
            <img src={props.profile.photos.small}/>

            <div>{props.profile.fullName}
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.contacts.github}</div>
                <div>{props.profile.contacts.website}</div>
                ava + discrtptoi
            </div>
        </div>

    </div>

}