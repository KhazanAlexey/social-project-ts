import React, { ComponentType } from 'react';
import {Redirect} from 'react-router-dom'
import {RootState} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    isAuth: boolean
}
const MapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}



export function withAuthRedirect <T>(Component: ComponentType<T>)  {

    const RedirectComponent = (props: MapStateToPropsType) => {

        let{isAuth,...restProps}=props

        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>

    }

    return connect(MapStateToProps)(RedirectComponent)
}
