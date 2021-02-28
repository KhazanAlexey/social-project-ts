import React, {useEffect} from 'react'
import s from './Profile.module.css'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import { withAuthRedirect } from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';



type ProfilePropsType = MDTPType & MSTPType

type PathParamsType = {
    userId: string
}

type MDTPType = {
    getUserProfile: (userID:string) => void
}
type MSTPType = {
    profile: ProfileType | null
}
type ComonPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

function ProfileContainer(props: ComonPropsType) {
    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        props.getUserProfile(userId)
    },[])


    return <div className={s.content}>
        <Profile {...props} profile={props.profile}/>

    </div>
}



// let AuthRedirectComponent=withAuthRedirect(ProfileContainer)


const MSTP = (state: RootState) => {
    return {
        profile: state.profilePage.profile,
}
}

//
// let ProfileContainerWithUrl = withRouter(AuthRedirectComponent)


// export default connect<MSTPType, MDTPType, {}, RootState>(MSTP, {getUserProfile})(ProfileContainerWithUrl)

//
// withAuthRedirect(withRouter(connect(MSTP, {getUserProfile})
// (ProfileContainer)))
export default compose<React.ComponentType>(
    connect<MSTPType, MDTPType, {}, RootState>(MSTP, {getUserProfile}),
    withRouter,
    withAuthRedirect
)
(ProfileContainer)