import React from "react";
import s from './MyPosts.module.css';
import {Post} from "../../Posts/Post/Post";
import { PostType} from "../../../redux/store";
import {AddMessageReduxForm} from "../../Forms/AddMessageForm";

export type PostsType = {
    addPost: (text:string) => void
    posts: Array<PostType>
}
type FormDataType= {
    text: string
}
export const Myposts: React.FC<PostsType> = (props) => {

    let postElement = props.posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likeCounts} id={p.id}/>)



    const onSubmit = (formData: FormDataType) => {
        props.addPost(formData.text)
        console.log(formData)
    }

    return <div className={s.postsBlock}>
        my posts

        <AddMessageReduxForm onSubmit={onSubmit} />


        <div className={s.posts}>
            {postElement}


        </div>
    </div>
}