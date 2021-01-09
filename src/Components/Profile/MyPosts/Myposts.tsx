import React, {ChangeEvent, RefObject} from "react";
import s from './MyPosts.module.css';
import {Post} from "../../Posts/Post/Post";
import {ActionsTypes, PostType} from "../../../redux/store";

export type PostsType = {
    newPostText: string
    addPost: () => void
    posts: Array<PostType>
    newposttextHandler: (text: string) => void
}
export const Myposts: React.FC<PostsType> = (props) => {

    let postElement = props.posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likeCounts} id={p.id}/>)

    function addPost() {
        props.addPost()
    }

    const newposttextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            props.newposttextHandler(e.currentTarget.value)
        }
    }


    return <div className={s.postsBlock}>
        my posts
        <div>
            <div><textarea value={props.newPostText} onChange={newposttextHandler}/></div>

            <div>
                <button onClick={addPost}>Addpost</button>
            </div>
        </div>
        <div className={s.posts}>
            {postElement}


        </div>
    </div>
}