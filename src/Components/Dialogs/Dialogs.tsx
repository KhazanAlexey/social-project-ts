import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {ActionsTypes, DialogType, MessageType} from "../../redux/store";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Messages/Messages";
import {Simulate} from "react-dom/test-utils";

type DialogsPagesType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    NewDialogMessage:string
    onclickHandler:()=>void
    changeHandler:(text:string)=>void
}


export const Dialogs: React.FC<DialogsPagesType> = (props) => {




    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElement = props.messages.map(m => <Message  key={m.id} id={m.id}  message={m.message}/>)
const onclickHandler=()=>{
       props.onclickHandler()
}
  const changeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        if( e.currentTarget)
        {
            props.changeHandler(e.currentTarget.value)
        }
    }


    return <div className={s.dialogs}>

        <div className={s.dialogsitem}>

            {dialogsElements}

        </div>
        <div className={s.messages}>

            {messagesElement}
            <div>
                <textarea onChange={changeHandler} value={props.NewDialogMessage} />
            </div>
            <button onClick={onclickHandler}>Send</button>
        </div>

    </div>
}