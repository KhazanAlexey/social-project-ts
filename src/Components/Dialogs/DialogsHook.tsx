import React, {ChangeEvent, useEffect} from "react";
import s from './Dialogs.module.css'
import {DialogType, MessageType} from "../../redux/store";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Messages/Messages";
import {useDispatch, useSelector} from "react-redux";
import {AddMessageTypeAC, ChangeMessageAc, NewMessageType} from "../../redux/dialog-reducer";
import {RootState} from "../../redux/redux-store";


export function DialogsHook(props: any) {


    const dispatch = useDispatch()
    const dialogs = useSelector<RootState, Array<DialogType>>(state => state.dialogsPage.dialogs)
    const messages = useSelector<RootState, Array<MessageType>>(state => state.dialogsPage.messages)
    const users = useSelector<RootState, any>(state => state.usersPage.users)
    const isAuth = useSelector<RootState, boolean>(state => state.auth.isAuth)

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
alert(isAuth)
    return <div className={s.dialogs}>

        <div className={s.dialogsitem}>

            {dialogsElements}
            {users}
        </div>
        <div className={s.messages}>

            {messagesElement}
            <div>
                <textarea onChange={changeHandler} />
            </div>
            <button onClick={onclickHandler}>Send</button>
        </div>
        <div>
        </div>
    </div>
}