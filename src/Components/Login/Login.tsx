import React, { useCallback } from 'react'
import {Field, reduxForm, InjectedFormProps} from 'redux-form'
import {requiriedField, minLength5} from "../../Utils/validators/validator";
import {Input} from '../common/FormsControls/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import {SendLoginData} from "../../redux/Auth-reducer";
import { Redirect} from "react-router";
import {RootState} from "../../redux/redux-store";
import {LoginDataType} from "../../api/api";
import style from "../common/FormsControls/FormsControls.module.css"


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captchaURL:string|null

}
type IPropsType={
    captchaURL:string|null

}
const LoginForm: React.FC<InjectedFormProps<FormDataType,IPropsType>&IPropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={'login'} component={Input}
                       validate={[requiriedField,minLength5]}
                />
            </div>
            <div>
                <Field placeholder={"password"} name={'password'} type={'password'}
                       validate={[requiriedField,minLength5]}
                       component={Input}/>

            </div>
            <div>
                <Field type={"checkbox"} name={'rememberMe'} component={Input}/> remember me
            </div>
            {props.error&&<div className={style.formsummaryerror}>
                {props.error}

            </div>}
            {props.captchaURL&& <img src={props.captchaURL}/>}
            {props.captchaURL&&   <Field placeholder={"antiBotSymbols"} name={'captchaURL'} component={Input}
                                         validate={[requiriedField]}

            />}
            <div>
                <button>Login</button>
            </div>


        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType,IPropsType>({form: 'login'})(LoginForm)

export const Login = () => {
    const isAuth = useSelector<RootState, boolean>(state => state.auth.isAuth)
    const captchaURL = useSelector<RootState, string|null>(state => state.auth.captchaURL)
    const dispatch=useDispatch()

    const onSubmit = useCallback((formData: FormDataType)=> {
            let Data:LoginDataType = {email: formData.login, password: formData.password, rememberMe: formData.rememberMe,captcha:formData.captchaURL}
            dispatch(SendLoginData(Data))

        },[dispatch]

    )
    if(isAuth){

       return <Redirect to="/profile" />
    }


    return <div className={style.loginwrap}>
        <div><h1>Login</h1></div>
        <LoginReduxForm onSubmit={onSubmit} captchaURL={captchaURL}/>

    </div>
}