import React, {useEffect} from 'react'
import s from './Profile.module.css'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {getUserProfile, getUserstatus, updateStatus, ProfileType} from "../../redux/profile-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';
import {compose} from 'redux';


type ProfilePropsType = MDTPType & MSTPType

type PathParamsType = {
    userId: string
}

type MDTPType = {
    getUserProfile: (userID: string) => void
    getUserstatus: (userID: string) => void
    updateStatus: (status: string) => void
}
type MSTPType = {
    profile: ProfileType | null
    status: string
}
type ComonPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

const ProfileContainer=React.memo( function (props: ComonPropsType) {
    console.log(ProfileContainer)
    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = '9600'
        }
        console.log("use effect")
        props.getUserProfile(userId)
        props.getUserstatus(userId)
    }, [props.getUserProfile, props.getUserstatus, props.match.params.userId])


    return <div className={s.content}>
        <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus}
        />
    </div>
})




const MSTP = (state: RootState) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}


export default compose<React.ComponentType>(
    connect<MSTPType, MDTPType, {}, RootState>(MSTP, {getUserProfile, getUserstatus, updateStatus}),
    withRouter,
    withAuthRedirect
)
(ProfileContainer)