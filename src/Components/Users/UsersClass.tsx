import React from "react";
import {NavLink} from "react-router-dom";
import {usersTypeRes} from "../../redux/User-reducer";
import userPhoto from "../../assets/picture/icons8-user-100.png";
import styles from "./users.module.css";
import {UsersAPI} from "../../api/api";
import Paginator from "../common/Paginator/Paginator";

type propstype = {
    users: Array<usersTypeRes>

    pageSize: number
    totalCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
    setTotalCount: (count: number) => void
    onPageChanged: (p: number) => void
    followingProgress: Array<number>
    toggleisfolowingProgress: (isFetching: boolean, id: number) => void
    UnfollowTC: (id: number) => void
    FollowTC: (id: number) => void
}

const UsersClass: React.FC<propstype> = React.memo(function (props: propstype) {

    return <div>


        <Paginator currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} onPageChanged={props.onPageChanged}
        pageSize={props.pageSize} totalCount={props.totalCount} setTotalCount={props.setTotalCount}/>
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
                    disabled={props.followingProgress.some(id => id === u.id)}
                    onClick={() => props.UnfollowTC(u.id)}
                > Unfollow</button>
                : <button
                    disabled={props.followingProgress.some(id => id === u.id)}

                    onClick={() => props.FollowTC(u.id)}
                > Follow</button>
            }
            </div>


            <div>name:{u.name}</div>
            <div>{u.followed}</div>
            <div>id:{u.id}</div>
            <div>{u.status}</div>
            <div>city</div>
        </div>)}
    </div>
})

export default UsersClass