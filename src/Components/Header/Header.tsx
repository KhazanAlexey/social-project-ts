import React ,{useEffect} from "react";
import { useDispatch,useSelector } from 'react-redux'
import s from './Header.module.css';
import {NavLink} from "react-router-dom"
import {SetuserData} from "../../redux/Auth-reducer";
import {RootState} from "../../redux/redux-store";
import {authAPI} from "../../api/api";

type HeaderPropsType={

}
const Header: React.FC<HeaderPropsType> =(props)=>{
    const dispatch = useDispatch()
    const login=useSelector<RootState,string|null>(state => state.auth.login)
    const isAuth=useSelector<RootState,boolean>(state=> state.auth.isAuth)
    useEffect(()=>{

        authAPI.me()
                  .then((res) => {
                //isFetching setToogle
                if(res.data.resultCode ===0) {
                    dispatch(SetuserData(res.data.data))
                }

            })
    },[])


   return(
       <header className={s.header}>
  <img src={"https://cdn.mos.cms.futurecdn.net/BVb3Wzn9orDR8mwVnhrSyd-320-80.jpg"}/>
<div className={s.loginBlock}>

    {isAuth ? login : <NavLink to={'/login'}>login</NavLink>}
{/*    <NavLink to={'/login'}>login</NavLink>
    {login}*/}
</div>
       </header>
   )

}
export default Header

