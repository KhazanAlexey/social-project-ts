import React, {ChangeEvent, useEffect} from "react";
import s from './Dialogs.module.css'
import {DialogType, MessageType} from "../../redux/store";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Messages/Messages";
import {useDispatch, useSelector} from "react-redux";
import {AddMessageTypeAC, ChangeMessageAc, NewMessageType} from "../../redux/dialog-reducer";
import {RootState} from "../../redux/redux-store";
import Axios from "axios";
import {setTotalCount, SetUsers, userType} from "../../redux/User-reducer";

type DialogsPagesType = {
    /*dialogs: Array<DialogType>
    messages: Array<MessageType>
    NewDialogMessage:string
    onclickHandler:()=>void
    changeHandler:(text:string)=>void*/
}

export function DialogsHook(props: any) {


    const dispatch = useDispatch()
    const NewDialogMessage = useSelector<RootState, string>(state => state.dialogsPage.NewDialogMessage)
    const dialogs = useSelector<RootState, Array<DialogType>>(state => state.dialogsPage.dialogs)
    const messages = useSelector<RootState, Array<MessageType>>(state => state.dialogsPage.messages)
const currentPage=useSelector<RootState,number>(state=> state.usersPage.currentPage)
    const pageSize=useSelector<RootState,number>(state=> state.usersPage.pageSize)
const users= useSelector<RootState,any>(state=> state.usersPage.users)


    let dialogsElements = dialogs.map(d =>
        <DialogItem name={d.name} id={d.id}/>
    )
    let messagesElement = messages.map(m =>
        <Message id={m.id} message={m.message}/>
    )
    const onclickHandler = () => {
        dispatch(AddMessageTypeAC())
    }
    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            dispatch(ChangeMessageAc(e.currentTarget.value))

        }
    }

    return <div className={s.dialogs}>

        <div className={s.dialogsitem}>

            {dialogsElements}
            {users}
        </div>
        <div className={s.messages}>

            {messagesElement}
            <div>
                <textarea onChange={changeHandler} value={NewDialogMessage}/>
            </div>
            <button onClick={onclickHandler}>Send</button>
        </div>

        <div>



        </div>




    </div>
}