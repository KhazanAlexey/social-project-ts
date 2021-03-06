import React, {ChangeEvent, RefObject} from "react";
import s from './MyPosts.module.css';
import {Post} from "../../Posts/Post/Post";
import {ActionsTypes, PostType} from "../../../redux/store";
import {AddPostAC, ChangePostTextAC} from "../../../redux/profile-reducer";
import {Myposts, PostsType} from "./Myposts";
import {RootState} from "../../../redux/redux-store";
import {connect} from "react-redux";


type MDTPtype = {
    addPost: (text: string) => void

}
type MSTPType = {
    posts: Array<PostType>
}
const MSTP = (state: RootState) => ({
        posts: state.profilePage.posts,
    }
)

const MDTP = (dispatch: any) => {
    return {
        addPost: (text: string) => {
            dispatch(AddPostAC(text))
        },

    }
}
// <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>


const MypostsConrainer = connect<MSTPType, MDTPtype, {}, RootState>(MSTP, MDTP)(Myposts)
export default MypostsConrainer