import React, {ChangeEvent,useCallback} from "react";
import s from './Dialogs.module.css'
import {ActionsTypes, DialogType, MessageType} from "../../redux/store";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Messages/Messages";
import {Field, reduxForm, InjectedFormProps} from 'redux-form'
import {addMessageAc} from "../../redux/dialog-reducer";
import {AddMessageReduxForm} from "../Forms/AddMessageForm";


type DialogsPagesType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    addMessageAc:(text:string)=>void
    isAuth: boolean
}
type FormDataType={
    text:string}
export const Dialogs: React.FC<DialogsPagesType> =React.memo( function (props)  {
    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElement = props.messages.map(m => <Message  key={m.id} id={m.id}  message={m.message}/>)

  // const changeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
  //       if( e.currentTarget)
  //       {
  //           props.changeHandler(e.currentTarget.value)
  //       }
  //   }

    const onSubmit = (formData: FormDataType) => {
        props.addMessageAc(formData.text)
        console.log(formData)
    }

    return <div className={s.dialogs}>
        <div className={s.dialogsitem}>
            {dialogsElements}
        </div>
        <div className={s.messages}>

            {messagesElement}
            <AddMessageReduxForm onSubmit={onSubmit} />
        </div>

    </div>
})




