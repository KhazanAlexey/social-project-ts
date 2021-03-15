import React, {ChangeEvent, useCallback} from "react";

import {Field, reduxForm} from 'redux-form'
import { maxLength60, } from "../../Utils/validators/validator";
import {TextArea} from "../common/FormsControls/TextArea";


const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'text'}
                       validate={[maxLength60]}
                       component={TextArea} placeholder={"введите текст"}/>
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
type FormDataType = {
    text: string
}
export const AddMessageReduxForm = reduxForm<FormDataType>({form: 'addmessage'})(AddMessageForm)