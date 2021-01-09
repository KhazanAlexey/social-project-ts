import React from "react";
import {NavLink} from "react-router-dom";
import {userType} from "../../redux/User-reducer";
import userPhoto from "../../assets/picture/icons8-user-100.png";
import styles from "./users.module.css";
import * as axios from 'axios';
type propstype={
    users:Array<userType>
    follow: (id:string)=>void
    unfollow: (id:string)=>void
    setUsers: (users:any)=> void
}

    function Users(props:propstype) {

        return <div>
            {props.users.map(u => <div key={u.id}>

                <NavLink to={'/profile/' + u.id}>
                    <div><img
                        src={userPhoto}
                        // src={u.photos.small != null ? u.photos.small : userPhoto}
                              className={styles.photo}
                    />
                    </div>
                </NavLink>
                <div>{u.followed
                    ? <button
                        onClick={()=>{props.unfollow(u.id)}}
                        // disabled={props.followingProgress.some(id => id === u.id)}
                        //       onClick={() => {
                        //           props.unfollowThunk(u.id)
                        //       }}
                    > Unfollow</button>
                    : <button
                        onClick={()=>{props.follow(u.id)}}
                    //     disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                    //
                    //     props.followThunk(u.id)
                    //
                    // }}
                    > Follow</button>
                }</div>
                <div>u.name</div>
                <div>u.status</div>
                <div>u.location.country</div>
                <div>u.location.city</div>
            </div>)}


        </div>
    }

export default Users

