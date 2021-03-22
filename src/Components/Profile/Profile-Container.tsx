import React, {useEffect} from 'react'
import s from './Profile.module.css'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {getUserProfile, getUserstatus, updateStatus} from "../../redux/profile-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';
import {compose} from 'redux';


type ProfilePropsType = MDTPType & MSTPType

type PathParamsType = {
    userId: string

}

type MDTPType = {
    getUserProfile: (userID: string| null) => void
    getUserstatus: (userID: string|null) => void
    updateStatus: (status: string) => void
}
type MSTPType = ReturnType<typeof MSTP>
type ComonPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

const ProfileContainer=React.memo( function (props: ComonPropsType) {
    console.log(ProfileContainer)
    useEffect(() => {
        let userId:string|null = props.match.params.userId
        if (!userId) {
            userId = props.AuthorizaeUserId
            if(!userId){
                props.history.push("/login")
            }
        }
        console.log("use effect")
        props.getUserProfile(userId)
        props.getUserstatus(userId)
    }, [props.getUserProfile, props.getUserstatus, props.match.params.userId,props.AuthorizaeUserId])


    return <div className={s.content}>
        <Profile {...props} profile={props.profile}
                 status={props.status}
                 updateStatus={props.updateStatus}
        />
    </div>
})




const MSTP = (state: RootState) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        AuthorizaeUserId: state.auth.id,
        isAuth:state.auth.isAuth

    }
}


export default compose<React.ComponentType>(
    connect<MSTPType, MDTPType, {}, RootState>(MSTP, {getUserProfile, getUserstatus, updateStatus}),
    withRouter,
    withAuthRedirect
)
(ProfileContainer)