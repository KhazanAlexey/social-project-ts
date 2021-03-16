import React, {useEffect, useCallback} from "react";
import {useDispatch, useSelector} from 'react-redux'
import s from './Header.module.css';
import {NavLink} from "react-router-dom"
import {getAuthUserData, Logout} from "../../redux/Auth-reducer";
import {RootState} from "../../redux/redux-store";
import { Redirect, Route } from "react-router";

type HeaderPropsType = {}
const Header: React.FC<HeaderPropsType> = (props) => {
    const dispatch = useDispatch()
    const login = useSelector<RootState, string | null>(state => state.auth.login)
    const isAuth = useSelector<RootState, boolean>(state => state.auth.isAuth)
    let logout =useCallback(()=>{
        dispatch(Logout())
    },[dispatch])

    useEffect(() => {

        dispatch(getAuthUserData())
    }, [dispatch])
    return (
        <header className={s.header}>
            <img src={"https://cdn.mos.cms.futurecdn.net/BVb3Wzn9orDR8mwVnhrSyd-320-80.jpg"}/>
            <div className={s.loginBlock}>

                {isAuth ? <div> {login} <button onClick={logout}>logOut</button></div>

                    : <NavLink to={'/login'}>login</NavLink>}

            </div>
        </header>
    )

}
export default Header

