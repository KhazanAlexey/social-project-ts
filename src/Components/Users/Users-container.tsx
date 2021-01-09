import React from "react";
import {connect} from "react-redux";
import {
    FollowAc,
    SetCurrentPageAc, setToogle,
    setTotalCount,
    SetUsers,
    UnfollowAc,
    usersTypeRes
} from "../../redux/User-reducer";
import {RootState} from "../../redux/redux-store";
import UsersClass from "./UsersClass";
import Axios, {AxiosResponse, AxiosError} from 'axios';
import {Prealoader} from "../common/Preloader";







type MSTPType = {
    users: Array<usersTypeRes>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean

}
type MDTPType = {
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: any) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (count: number) => void
    setToogle: (isFetching: boolean) => void


}


type propstype = {
    users: Array<usersTypeRes>
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: any) => void
    pageSize: number
    totalCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
    setTotalCount: (count:number)=> void
    isFetching: boolean
    setToogle: (isFetching: boolean) => void
}


class UsersContainer extends React.Component<propstype, any> {
    componentDidMount() {
        this.props.setToogle(true)

        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)

            .then((res) => {
                //isFetching setToogle
                this.props.setToogle(false)
                this.props.setUsers(res.data.items)
                this.props.setTotalCount(res.data.totalCount)

            })


    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.setToogle(true)
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setToogle(false)
                this.props.setUsers(res.data.items)

            })
    }

    render() {


        return  <>
            {this.props.isFetching? <Prealoader />:  <div>
                <UsersClass users={this.props.users}
                            onPageChanged={this.onPageChanged}
                            follow={this.props.follow}
                            unfollow={this.props.follow}
                            setUsers={this.props.setUsers}
                            pageSize={this.props.pageSize}
                            totalCount={this.props.totalCount}
                            currentPage={this.props.currentPage}
                            setCurrentPage={this.props.setCurrentPage}
                            setTotalCount={this.props.setTotalCount}
                />






            </div>}

            </>
    }


}



const MSTP = (state: RootState) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}



export default connect<MSTPType, MDTPType, {}, RootState>(MSTP,
    {follow:FollowAc  ,
        unfollow:UnfollowAc,
        setUsers:SetUsers,
        setCurrentPage:SetCurrentPageAc,
        setTotalCount:setTotalCount,
        setToogle:setToogle})(UsersContainer)
