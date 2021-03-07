import React from "react";
import {NavLink} from "react-router-dom";
import {toggleisfolowingProgress, usersTypeRes} from "../../redux/User-reducer";
import userPhoto from "../../assets/picture/icons8-user-100.png";
import styles from "./users.module.css";
import {UsersAPI} from "../../api/api";

type propstype = {
    users: Array<usersTypeRes>
    follow: (id: number) => void
    unfollow: (id: number) => void
    pageSize: number
    totalCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
    setTotalCount: (count: number) => void
    onPageChanged: (p: number) => void
    followingProgress:Array<number>
    toggleisfolowingProgress: (isFetching: boolean,id:number) => void
}


const UsersClass:React.FC<propstype> =React.memo(function (props: propstype) {
//pagination
    debugger
    let pageCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return (
                    <span key={p} onClick={() => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p ? styles.selected : ""}>{p}</span>
                )
            })}
        </div>
        {props.users.map(u => <div key={u.id}>

            <NavLink to={'/profile/' + u.id}>
                <div><img alt={"alt img"}
                          src={u.photos.small || userPhoto}
                          className={styles.photo}
                />
                </div>
            </NavLink>
            <div>{u.followed
                ? <button
                    disabled={props.followingProgress.some(id=>id===u.id)}
                    onClick={() => {
                        props.toggleisfolowingProgress(true,u.id)
                        UsersAPI.Unfollow(u.id)
                            .then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                props.toggleisfolowingProgress(false,u.id)
                                }
                            )
                    }}
                > Unfollow</button>
                : <button
                    disabled={props.followingProgress.some(id=>id===u.id)}

                    onClick={() => {
                        props.toggleisfolowingProgress(true,u.id)

                        UsersAPI.Follow(u.id)
                            .then(data => {
                                if (data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                                props.toggleisfolowingProgress(false,u.id)
                            })
                    }}
                > Follow</button>
            }</div>
            <div>name:{u.name}</div>
            <div>{u.followed}</div>
            <div>id:{u.id}</div>
            <div>{u.status}</div>
            <div>city</div>
        </div>)}
    </div>
})

export default UsersClass