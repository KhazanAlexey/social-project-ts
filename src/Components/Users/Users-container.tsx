import React from "react";
import {connect} from "react-redux";
import {
    FollowAc,
    SetCurrentPageAc,
    setTotalCount,
    UnfollowAc,
    usersTypeRes,
    toggleisfolowingProgress,
    getUsersTC, UnfollowTC, FollowTC
} from "../../redux/User-reducer";
import {RootState} from "../../redux/redux-store";
import UsersClass from "./UsersClass";
import {Prealoader} from "../common/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingProgress,
    getisFetching,
    getPagesize,
    getTotalCount,
    getUsersSelector
} from "../../redux/users-selectors";


type MSTPType = {
    users: Array<usersTypeRes>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>


}
type MDTPType = {
    setCurrentPage: (page: number) => void
    setTotalCount: (count: number) => void
    // setToogle: (isFetching: boolean) => void
    toggleisfolowingProgress: (ifFetching: boolean, id: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    UnfollowTC: (id: number) => void
    FollowTC: (id: number) => void

}


type propstype = {
    users: Array<usersTypeRes>
    pageSize: number
    totalCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
    setTotalCount: (count: number) => void
    isFetching: boolean
    toggleisfolowingProgress: (isFetching: boolean, id: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    followingProgress: Array<number>
    UnfollowTC: (id: number) => void
    FollowTC: (id: number) => void
}


class UsersContainer extends React.Component<propstype, any> {
    componentDidMount() {

        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.getUsersTC(p, this.props.pageSize)


    }

    render() {


        return <>
            {this.props.isFetching ? <Prealoader/> : <div>
                <UsersClass users={this.props.users}
                            onPageChanged={this.onPageChanged}
                            pageSize={this.props.pageSize}
                            totalCount={this.props.totalCount}
                            currentPage={this.props.currentPage}
                            setCurrentPage={this.props.setCurrentPage}
                            toggleisfolowingProgress={this.props.toggleisfolowingProgress}
                            setTotalCount={this.props.setTotalCount}
                            followingProgress={this.props.followingProgress}
                            UnfollowTC={this.props.UnfollowTC}
                            FollowTC={this.props.FollowTC}

            />


                </div>}

        </>
    }


}


const MSTP = (state: RootState) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPagesize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getisFetching(state),
        followingProgress: getFollowingProgress(state)
    }
}


// export default connect<MSTPType, MDTPType, {}, RootState>(MSTP,
//     {
//         follow: FollowAc,
//         unfollow: UnfollowAc,
//         setCurrentPage: SetCurrentPageAc,
//         setTotalCount: setTotalCount,
//         toggleisfolowingProgress: toggleisfolowingProgress,
//         getUsersTC: getUsersTC
//     })(UsersContainer)

export default compose<React.ComponentType>(
    connect<MSTPType, MDTPType, {}, RootState>(MSTP,
        {

            setCurrentPage: SetCurrentPageAc,
            setTotalCount: setTotalCount,
            toggleisfolowingProgress: toggleisfolowingProgress,
            getUsersTC: getUsersTC,
            UnfollowTC: UnfollowTC,
            FollowTC: FollowTC
        })
)

(UsersContainer)