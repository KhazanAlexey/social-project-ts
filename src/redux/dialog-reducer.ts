
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
    dialogs: Array<DialogType>
}

const ADDMESSAGE="ADDMESSAGE"
const CHANGEMESSAGE="CHANGEMESSAGE"

let initialState: DialogsPageType = {
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




export type UpdateTextMessage = {
    type: typeof CHANGEMESSAGE
    text: string
}
export type ActionsTypes = addMessageType
// export type ActionsTypes = ReturnType<typeof AddMessageTypeAC> | ReturnType<typeof ChangeMessageAc>
export type returnStateDialogReducerType=typeof initialState
export const AddMessageTypeAC = () => ({type: "ADDMESSAGE"} as const)
export const ChangeMessageAc = (text: string) => ({type: "CHANGEMESSAGE", text: text} as const)


export function dialogReducer(state = initialState, action: ActionsTypes):returnStateDialogReducerType {
    switch (action.type) {
        case "ADDMESSAGE":
            const NewMessage: MessageType = {id: 10, message: action.text}
            return {
                ...state,
                messages:[...state.messages,NewMessage],
            }


        default:
            return state
    }
}

export const addMessageAc=(text:string)=>({type:"ADDMESSAGE",text} as const)


type addMessageType= {
    type: typeof ADDMESSAGE
    text: string
}