/*import {RerenderEntireTree} from "../index";*/


import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
let onChange=()=>{
    console.log("state changed")
}
export const subscribe=(callback:()=>void)=>{
    onChange=callback
}
export type DialogType ={
    id: number
    name: string
}
export type MessageType={
    id:number
    message: string
}
export type DialogsPageType={
    messages: Array<MessageType>
    NewDialogMessage: string
    dialogs: Array<DialogType>
}
export type PostType ={
    id:number
    message: string
    likeCounts: number
}
export type ProfilePageType={
    posts: Array<PostType>
    newPostText: string
}

export type SidebarType={

}

 type RootStateType={
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType

}
/*let state: RootStateType  = {
    profilePage: {
        posts: [
            {id: 1, message: "its my first yeSS post", likeCounts: 10},
            {id: 2, message: "hi howe are you", likeCounts: 15},
            {id: 3, message: "itkamasytra", likeCounts: 15},
            {id: 4, message: "yo", likeCounts: 15},
            {id: 5, message: "youuu", likeCounts: 15},
            {id: 6, message: "meas6", likeCounts: 15},
        ],
        newPostText: "it kamasyrtaaa",


    },
    dialogsPage: {
        NewDialogMessage:"yu",
        messages: [
            {id: 1, message: "hi"},
            {id: 2, message: "hi howe are you"},
            {id: 3, message: "itkamasytra"},
            {id: 4, message: "yo"},
            {id: 5, message: "youuu"},
            {id: 6, message: "meas6"},
        ],
        dialogs: [
            {id: 1, name: "Dmitych"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera"},
        ]
    },
    sidebar: {

    }
};
export function NewPostTextChanger(text:string) {
    state.profilePage.newPostText=text
    onChange()


}
export function addPost() {
const NewPost:PostType={id:3,
    message:state.profilePage.newPostText,
    likeCounts:20}
state.profilePage.posts.push(NewPost)
    state.profilePage.newPostText=""
    onChange()


}
export function addMessage() {
    const NewMessage: MessageType={id: 10, message: state.dialogsPage.NewDialogMessage}
state.dialogsPage.messages.push(NewMessage)
    onChange()
}

export function NewMesageChanger (text:string){
    state.dialogsPage.NewDialogMessage=text
    onChange()

}*/

export type StoreType={
    _state: RootStateType
  /*  NewPostTextChanger:(text:string)=>void
    addPost:()=>void
    addMessage:()=>void
    NewMesageChanger: (text:string)=>void*/
    getState:()=>RootStateType
    _onChange:()=>void
    subscribe:(callback:()=>void)=>void
    dispatch:(action:ActionsTypes)=>void

}
export type AddPostActionType = {
    type: "ADDPOST"
}
export type UpdateTextPost = {
    type: "CHANGEPOSTTEXT"
    text: string
}
export type AddMessageActionType = {
    type: "ADDMESSAGE"
}
export type UpdateTextMessage = {
    type: "CHANGEMESSAGE"
    text: string
}

export type ActionsTypes = AddPostActionType | UpdateTextPost | AddMessageActionType | UpdateTextMessage



export const store: StoreType={
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "its my first yeSS post", likeCounts: 10},
                {id: 2, message: "hi howe are you", likeCounts: 15},
                {id: 3, message: "itkamasytra", likeCounts: 15},
                {id: 4, message: "yo", likeCounts: 15},
                {id: 5, message: "youuu", likeCounts: 15},
                {id: 6, message: "meas6", likeCounts: 15},
            ],
            newPostText: "it kamasyrtaaa",


        },
        dialogsPage: {
            NewDialogMessage:"yu",
            messages: [
                {id: 1, message: "hi"},
                {id: 2, message: "hi howe are you"},
                {id: 3, message: "itkamasytra"},
                {id: 4, message: "yo"},
                {id: 5, message: "youuu"},
                {id: 6, message: "meas6"},
            ],
            dialogs: [
                {id: 1, name: "Dmitych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Valera"},
            ]
        },
        sidebar: {

        }
    },/*
 NewPostTextChanger(text:string) {
        this._state.profilePage.newPostText=text

     this._onChange()
    },
   addPost() {
        const NewPost:PostType={id:3,
            message:this._state.profilePage.newPostText,
            likeCounts:20}
        this._state.profilePage.posts.push(NewPost)
        this._state.profilePage.newPostText=""
       this._onChange()
    },
    addMessage() {
        const NewMessage: MessageType={id: 10, message: this._state.dialogsPage.NewDialogMessage}
        this._state.dialogsPage.messages.push(NewMessage)
        this._onChange()
    },
NewMesageChanger (text:string){
        this._state.dialogsPage.NewDialogMessage=text
    this._onChange()

},*/
    _onChange(){
        console.log("state chnged")

    },
    dispatch(action){
        debugger
        this._state.dialogsPage=dialogReducer(this._state.dialogsPage,action)
    },

    getState(){
        return this._state
    },
    subscribe(callback){
    this._onChange=callback
    }
}
