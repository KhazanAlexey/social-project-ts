import React, {useState, DetailedHTMLProps, InputHTMLAttributes, ChangeEvent} from "react";

import s from './ProfileInfo.module.css'

type ProfileStatusType = {
    status: string
    // updateStatus: (status:string)=>void
}
export const ProfileStatus: React.FC<ProfileStatusType> = (props) => {
const [status,setStatus]=useState('status')
    const [editMode,setEditmode]=useState(false)

    const onClickHandler=(e: ChangeEvent<HTMLInputElement>)=>{
   setStatus(e.currentTarget.value)
    }
    const activateEditMode=()=>{
        setEditmode(true)
    }
    const deactivateEditMode=()=>{

            setEditmode(false)
        // props.updateStatus(status)
    }
     return <div className={s.content}>
                   {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{status} </span>
            </div>
            }
            {editMode &&
            <div>
                <input onBlur={deactivateEditMode} onChange={onClickHandler} value={status}/>
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