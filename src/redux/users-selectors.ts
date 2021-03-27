import {RootState} from "./redux-store";

export const getUsers =(state:RootState)=>{
    return state.usersPage.users
}
export const getPagesize =(state: RootState)=>{
    return state.usersPage.pageSize
}
export const getTotalCount =(state: RootState)=>{
    return state.usersPage.totalCount
}
export const getCurrentPage =(state: RootState)=>{
    return state.usersPage.currentPage
}
export const getisFetching =(state: RootState)=>{
    return state.usersPage.isFetching
}
export const getFollowingProgress =(state: RootState)=>{
    return state.usersPage.followingProgress
}




