import React, {ChangeEvent,useCallback} from "react";

import {Field, reduxForm, InjectedFormProps} from 'redux-form'


const AddMessageForm=(props:any)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'text'} component={'textarea'}  placeholder={"введите текст"}  />
            </div>
            <button>Send</button>



        </form>
    )
}
/*export const AddMessage=()=>{
    const onSubmit = (formData: TextAreaDataType) => {

        console.log(formData)
    }
    return (
        <AddMessageReduxForm onSubmit={onSubmit} />
    )
}*/
type FormDataType={
    text:string
}
export const AddMessageReduxForm = reduxForm<FormDataType>({form: 'addmessage'})(AddMessageForm)