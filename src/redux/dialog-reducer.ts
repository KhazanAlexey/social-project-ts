import React from 'react';

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

export type NewMessageType={
    NewDialogMessage:string

}
export type DialogsPageType = {
    messages: Array<MessageType>
    NewDialogMessage: string
    dialogs: Array<DialogType>
}
const ADDPOST="ADDPOST"
const CHANGEPOSTTEXT="CHANGEPOSTTEXT"
const ADDMESSAGE="ADDMESSAGE"
const CHANGEMESSAGE="CHANGEMESSAGE"

let initialState: DialogsPageType = {
    NewDialogMessage: "yu",
    messages: [
        {id: 1, message: "hi"},
        {id: 2, message: "HOOK"},
        {id: 3, message: "itkamasytra"},
        {id: 4, message: "yo"},
        {id: 5, message: "youuu"},
        {id: 6, message: "HOOK"},
    ],
    dialogs: [
        {id: 1, name: "Dmitych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"},
    ]

}

export type AddPostActionType = {
    type: typeof ADDPOST
}
export type UpdateTextPost = {
    type: typeof CHANGEPOSTTEXT
    text: string
}


export type AddMessageActionType = {
    type: typeof ADDMESSAGE
}
export type UpdateTextMessage = {
    type: typeof CHANGEMESSAGE
    text: string
}
export type ActionsTypes = AddPostActionType | UpdateTextPost | AddMessageActionType | UpdateTextMessage
// export type ActionsTypes = ReturnType<typeof AddMessageTypeAC> | ReturnType<typeof ChangeMessageAc>
export type returnStateDialogReducerType=typeof initialState
export const AddMessageTypeAC = () => ({type: "ADDMESSAGE"} as const)
export const ChangeMessageAc = (text: string) => ({type: "CHANGEMESSAGE", text: text} as const)


export function dialogReducer(state = initialState, action: ActionsTypes):returnStateDialogReducerType {
    switch (action.type) {
        case "ADDMESSAGE":
            const NewMessage: MessageType = {id: 10, message: state.NewDialogMessage}
            return {
                ...state,
                messages:[...state.messages,NewMessage],
                NewDialogMessage:""
            }

        case "CHANGEMESSAGE":
            return {
                ...state,
                NewDialogMessage: action.text
            }
        default:
            return state
    }
}