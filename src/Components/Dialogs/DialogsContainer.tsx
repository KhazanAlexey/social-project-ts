import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {ActionsTypes, DialogType, MessageType, StoreType} from "../../redux/store";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Messages/Messages";
import {Simulate} from "react-dom/test-utils";
import {AddMessageTypeAC, ChangeMessageAc} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";

type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    NewDialogMessage: string
    dispatch: (action: ActionsTypes) => void

}


/*export const DialogsContainer: React.FC<DialogsPageType> = (props) => {

    const onclickHandler = () => {
        props.dispatch(AddMessageTypeAC())
    }
    const changeHandler = (text: string) => {

        props.dispatch(ChangeMessageAc(text))

    }


    return <>
        <Dialogs dialogs={props.dialogs}
                 messages={props.messages}
                 NewDialogMessage={props.NewDialogMessage}
                 onclickHandler={onclickHandler}
                 changeHandler={changeHandler}
        />
    </>
}*/
type MSTPType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>,
    NewDialogMessage: string
}

type MDTPType = {
    onclickHandler: () => void
    changeHandler: (text: string) => void
}
const MSTP = (state: RootState) => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    NewDialogMessage: state.dialogsPage.NewDialogMessage
})
const MDTP = (dispatch: any) => ({
    onclickHandler: () => {
        dispatch(AddMessageTypeAC())
    },
    changeHandler: (text: string) => {
        dispatch(ChangeMessageAc(text))
    }
})

const DialogsContainer = connect<MSTPType,MDTPType,{},RootState >(MSTP, MDTP)(Dialogs)
export default DialogsContainer