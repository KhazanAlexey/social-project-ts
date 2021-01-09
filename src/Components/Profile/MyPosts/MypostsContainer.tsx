import React, {ChangeEvent, RefObject} from "react";
import s from './MyPosts.module.css';
import {Post} from "../../Posts/Post/Post";
import {ActionsTypes, PostType} from "../../../redux/store";
import {AddPostAC, ChangePostTextAC} from "../../../redux/profile-reducer";
import {Myposts, PostsType} from "./Myposts";
import {RootState} from "../../../redux/redux-store";
import {connect} from "react-redux";

// type PostsType = {
//     // newPostText: string
//     // dispatch: (action: ActionsTypes) => void
//     // posts: Array<PostType>
// }
type MDTPtype = {
    addPost: () => void
    newposttextHandler: (text: string) => void

}
// const MypostsConrainer: React.FC<PostsType> = (props) => {
//
//
//     return <>
//
//         <Myposts addPost={addPost} posts={posts}
//                  newPostText={newPostText}
//                  newposttextHandler={newposttextHandler}/>
//
//     </>
// }
const MSTP = (state: RootState) => ({
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
)
type MSTPType={
    posts: Array<PostType>
    newPostText: string
}
const MDTP = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(AddPostAC())
        },
        newposttextHandler: (text: string) => {
            dispatch(ChangePostTextAC(text))
        }
    }
}
// <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>



const MypostsConrainer= connect<MSTPType,MDTPtype,{},RootState>(MSTP, MDTP)(Myposts)
export default MypostsConrainer