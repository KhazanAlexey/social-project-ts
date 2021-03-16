import React, { useCallback } from 'react'
import {Field, reduxForm, InjectedFormProps} from 'redux-form'
import {requiriedField, minLength5} from "../../Utils/validators/validator";
import {Input} from '../common/FormsControls/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import {SendLoginData} from "../../redux/Auth-reducer";
import { Redirect, Route } from "react-router";
import {RootState} from "../../redux/redux-store";
import {LoginDataType} from "../../api/api";


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
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
            <div>
                <button>Login</button>
            </div>


        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const isAuth = useSelector<RootState, boolean>(state => state.auth.isAuth)

    const dispatch=useDispatch()
        const onSubmit = useCallback((formData: FormDataType)=> {
            let Data:LoginDataType = {email: formData.login, password: formData.password, rememberMe: formData.rememberMe}
            dispatch(SendLoginData(Data))

        },[dispatch]

    )
    if(isAuth){

       return <Redirect to="/users" />
    }


    return <div>
        <div><h1>Login</h1></div>
        <LoginReduxForm onSubmit={onSubmit}/>

    </div>
}