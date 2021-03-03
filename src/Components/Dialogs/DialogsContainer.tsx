import React from "react";
import { DialogType, MessageType} from "../../redux/store";
import {AddMessageTypeAC, ChangeMessageAc} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import { compose } from "redux";

import {Dispatch} from 'redux'




type MSTPType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    NewDialogMessage: string

}

type MDTPType = {
    onclickHandler: () => void
    changeHandler: (text: string) => void
}
const MSTP = (state: RootState) => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    NewDialogMessage: state.dialogsPage.NewDialogMessage,
})
const MDTP = (dispatch: Dispatch) => ({
    onclickHandler: () => {
        dispatch(AddMessageTypeAC())
    },
    changeHandler: (text: string) => {
        dispatch(ChangeMessageAc(text))
    }
})


// let AuthRedirectComponent=withAuthRedirect(Dialogs)
//
// const DialogsContainer = connect<MSTPType,MDTPType,{},RootState >(MSTP, MDTP)(AuthRedirectComponent)
//
//
// export default DialogsContainer


export default compose<React.ComponentType>(
    connect<MSTPType,MDTPType,{},RootState >(MSTP, MDTP),
    withAuthRedirect)(Dialogs)