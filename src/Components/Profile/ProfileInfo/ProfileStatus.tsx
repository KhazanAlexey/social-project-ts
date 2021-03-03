import React, {useState, useEffect, ChangeEvent} from "react";

import s from './ProfileInfo.module.css'

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}
export const ProfileStatus: React.FC<ProfileStatusType> = (props) => {
    console.log("ProfileStatus")
    const [status, setStatus] = useState('')
    const [editMode, setEditmode] = useState(false)
    useEffect(() => {
        console.log('effect satus profile')
        if (props.status !== status)
            setStatus(props.status)

    }, [props.status])

    const onClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    const activateEditMode = () => {
        setEditmode(true)
    }

    const deactivateEditMode = () => {

        setEditmode(false)
        props.updateStatus(status)
    }
    return <div className={s.content}>
        {!editMode &&
        <div>
            <b>Status:</b> <span onDoubleClick={activateEditMode}>{props.status || "----"} </span>
        </div>
        }
        {editMode &&
        <div>
            <input onBlur={deactivateEditMode} onChange={onClickHandler} autoFocus={true} value={status}/>
        </div>
        }

    </div>

}

// export class ProfileStatus extends React.Component<ProfileStatusType, any> {
//     state = {
//         editmode: false
//     }
//
//     activateEditMode() {
//         this.setState({
//             editmode: true
//         })
//     }
//     deactivateEditMode() {
//         this.setState({
//             editmode: false
//         })
//     }
//     render() {
//         return <div className={s.content}>
//             {!this.state.editmode &&
//             <div>
//                 <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status} </span>
//             </div>
//             }
//             {this.state.editmode &&
//             <div>
//                 <input onblur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
//             </div>
//             }
//
//         </div>

//
//     }
// }