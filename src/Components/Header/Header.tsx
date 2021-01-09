import React ,{useEffect} from "react";
import { useDispatch,useSelector } from 'react-redux'
import s from './Header.module.css';
import {NavLink} from "react-router-dom"
import Axios, {AxiosResponse, AxiosError} from 'axios';
import {SetuserData} from "../../redux/Auth-reducer";
import {RootState} from "../../redux/redux-store";

type HeaderPropsType={

}
const Header: React.FC<HeaderPropsType> =(props)=>{
    const dispatch = useDispatch()
    const login=useSelector<RootState,string>(state => state.auth.login)
    const NewDialogMessage = useSelector<RootState, string>(state => state.dialogsPage.NewDialogMessage)
    useEffect(()=>{


        Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})

            .then((res) => {
                //isFetching setToogle
                if(res.data.resultCode ===0) {
                    debugger
                    dispatch(SetuserData(res.data.data))
                }

            })
    },[])


   return(
       <header className={s.header}>
  <img src={"https://cdn.mos.cms.futurecdn.net/BVb3Wzn9orDR8mwVnhrSyd-320-80.jpg"}/>
<div className={s.loginBlock}>
    <NavLink to={'/login'}>login</NavLink>

</div>
       </header>
   )

}
export default Header

