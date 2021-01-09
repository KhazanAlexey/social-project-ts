import React from "react";
import {NavLink} from "react-router-dom";
import {usersTypeRes} from "../../redux/User-reducer";
import userPhoto from "../../assets/picture/icons8-user-100.png";
import styles from "./users.module.css";

type propstype = {
    users: Array<usersTypeRes>
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: any) => void
    pageSize: number
    totalCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
    setTotalCount: (count:number)=> void
    onPageChanged:(p:number)=>void
}


function UsersClass(props: propstype) {
//pagination
    let pageCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []
    for (let i = 0; i <= pageCount; i++) {
        pages.push(i)
    }
    return <div>

        <div>
            {pages.map(p => {
                return (
                    <span onClick={(e) => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p ? styles.selected : ""}>{p}</span>
                )
            })}
        </div>

        {props.users.map(u => <div key={u.id}>

            <NavLink to={'/profile/' + u.id}>
                <div><img
                    src={u.photos.small || userPhoto}
                    className={styles.photo}
                />
                </div>
            </NavLink>
            <div>{u.followed
                ? <button
                    onClick={() => {
                        props.unfollow(u.id)
                    }}
                > Unfollow</button>
                : <button
                    onClick={() => {
                        props.follow(u.id)
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
}

export default UsersClass