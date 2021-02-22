import React, { useEffect } from 'react'
import Axios, {AxiosResponse, AxiosError} from 'axios';
import s from './Profile.module.css'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {UsersAPI} from "../../api/api";


type ProfilePropsType= MDTPType & MSTPType

type PathParamsType={
    userId: string
}

type MDTPType={
    setUserProfile: (profile:any)=>void
}
type MSTPType={
    profile: ProfileType|null
}
type ComonPropsType=RouteComponentProps<PathParamsType> & ProfilePropsType

function ProfileContainer(props:ComonPropsType) {
    useEffect(()=>{
        let userId=props.match.params.userId
        if(!userId){
            userId='2'
        }


        UsersAPI.getProfile(userId)
            .then((res) => {
                //isFetching setToogle
                props.setUserProfile(res.data)

            })
    },[])
    return <div className={s.content}>
        <Profile {...props} profile={props.profile}/>

    </div>
}
const MSTP=(state:RootState)=>{
    return{
        profile: state.profilePage.profile
}
}


let ProfileContainerWithUrl=withRouter(ProfileContainer)


export default connect<MSTPType, MDTPType, {}, RootState>(MSTP,{setUserProfile})(ProfileContainerWithUrl)


