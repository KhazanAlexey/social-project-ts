import React from 'react'
import {Field, reduxForm, InjectedFormProps} from 'redux-form'

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={'login'} component={'input'}/>
            </div>
            {/*<div>*/}
            {/*    <Field placeholder={"password"} name={'password'}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Field type={"checkbox"} name={'rememberMe'}/> remember me*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <button>Login</button>*/}
            {/*</div>*/}


        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return <div>
        <div><h1>Login</h1></div>
        <LoginReduxForm onSubmit={onSubmit}/>

    </div>
}