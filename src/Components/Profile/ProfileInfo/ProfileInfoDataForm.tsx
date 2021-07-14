import React from 'react'
import {createField, Input, TextArea} from "../../common/FormsControls/TextArea";
import {minLength5, requiriedField} from "../../../Utils/validators/validator";
import {Field, reduxForm, InjectedFormProps} from 'redux-form'
import {ProfileType} from "../../../redux/profile-reducer";
import s from './ProfileInfo.module.css'
import style from "../../common/FormsControls/FormsControls.module.css";


export type ProfileDataFormType = {
    fullName:string
    LookingForAJob:boolean
    lookingForAJobDescription:string
    aboutMe:string
    // profile:ProfileType
}
type IPropsType={
    profile:ProfileType
}
export const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormType,IPropsType>&IPropsType> = (props) => {
    const err=props.error
    return <form  onSubmit={props.handleSubmit}>
        <div>

            <button>Save</button>
            {props.error && <div className={style.formsummaryerror}>
                {props.error}</div>}
        </div>

        <div><b>Full name</b>:   <Field placeholder={'Fullname'} name={'fullName'} component={Input}
        />     </div>
        <div><b>Contacts:</b></div>


        {Object.keys(props.profile.contacts).map(key => {
            return <div className={s.contact}>
                <b>{key}</b>  <Field placeholder={key} name={'contacts.'+key} component={Input}/>
            </div>
        }

        )}
        <div><b>Looking for a job</b> :<Field placeholder={'lookingForAJob'} name={'LookingForAJob'} component={Input} type="checkbox"
        />   </div>
        {/*{props.profile.lookingForAJob &&*/}
        <div><b>My professional skills</b> :<Field placeholder={'My professional skills'} name={'lookingForAJobDescription'} component={TextArea}
        />  </div>
        <div><b>About me</b> :<Field placeholder={'About me'} name={'aboutMe'} component={TextArea}
        /></div>

<div></div>
    </form>
}

export const ProfileDataFormReduxForm = reduxForm<ProfileDataFormType,IPropsType>({form: 'profiledata'})(ProfileDataForm)
