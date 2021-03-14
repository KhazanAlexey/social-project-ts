import React from "react";
import {DialogType, MessageType} from "../../redux/store";
import {AddMessageTypeAC, ChangeMessageAc, addMessageAc} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

import {Dispatch} from 'redux'


type MSTPType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>

}

type MDTPType = {
    addMessageAc: (text: string) => void
}

const MSTP = (state: RootState) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}


// let AuthRedirectComponent=withAuthRedirect(Dialogs)
//
// const DialogsContainer = connect<MSTPType,MDTPType,{},RootState >(MSTP, MDTP)(AuthRedirectComponent)
//
//
// export default DialogsContainer


export default compose<React.ComponentType>(
    connect<MSTPType, MDTPType, {}, RootState>(MSTP, {addMessageAc}),
    withAuthRedirect)(Dialogs)