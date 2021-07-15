import React, {useRef, useState} from "react";
import userPhoto from "../../../assets/picture/icons8-user-100.png";
import s from './ProfileInfo.module.css'
import {Prealoader} from "../../common/Preloader";
import {ProfileStatus} from "./ProfileStatus"
import { ProfileType} from "../../../redux/profile-reducer";
import { ProfileDataFormReduxForm, ProfileDataFormType} from "./ProfileInfoDataForm";


type ProfilePropsType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
    isowner: boolean
    savePhoto: (file: any) => void
    saveProfileInfo: (formData: ProfileDataFormType) => void


}
export const ProfileInfo: React.FC<ProfilePropsType> = (props) => {
    const refInput = useRef<HTMLInputElement>(null);
    const [editMode, seteditMode] = useState<boolean>(false)
    console.log("ProfileInfo")
    if (!props.profile) {
        return <Prealoader/>
    }
    const imageHandler = () => {
        if (refInput.current) {
            refInput.current.click();

        }


    }

    const onSubmit = (formData: ProfileDataFormType) => {
        console.log(formData)
        //@ts-ignore

          props.saveProfileInfo(formData).then(()=>{
              seteditMode(false)
          })



    }


    const mainPhotoSelected = (e: any) => {
        const file = e.target.files[0]
        props.savePhoto(file)
    }
    return <div className={s.content}>

        <div><img src={"https://cdn.mos.cms.futurecdn.net/BVb3Wzn9orDR8mwVnhrSyd-320-80.jpg"}/></div>


        <div className={s.description}>
            <div><img src={props.profile.photos.large || userPhoto}/>
                {!props.isowner &&
                <input type='file' style={{display: "none"}} ref={refInput} onChange={mainPhotoSelected}/>}</div>
            <div>
                <button onClick={imageHandler}>Change image</button>
            </div>
            {
                editMode ? <ProfileDataFormReduxForm initialValues={props.profile} profile={props.profile}
                                                     onSubmit={onSubmit}/> :
                    <ProfileData goToEditmode={() => seteditMode(true)} profile={props.profile}
                                 isOwner={props.isowner}/>
            }
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
}
type ContactType = {
    contactTitle: string
    value?: string
}

const Contact: React.FC<ContactType> = ({contactTitle, value}) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b>: {value}
        </div>
    )

}
type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditmode: () => void
}
const ProfileData: React.FC<ProfileDataType> = (props) => {
    return <div>
        {!props.isOwner && <div>
            <button onClick={props.goToEditmode}>edit</button>
        </div>}
        <div><b>Full name</b> :{props.profile.fullName}            </div>
        <div><b>Contacts:</b></div>

        {Object.keys(props.profile.contacts).map(key => <Contact key={key} contactTitle={key}
                                                                 value={props.profile.contacts[key]}/>
        )}
        <div><b>Looking for a job</b> :{props.profile.lookingForAJob ? "Yes" : "No"}</div>
        {props.profile.lookingForAJob &&
        <div><b>My professional skills</b> :{props.profile.lookingForAJobDescription}</div>
        }
        <div><b>About me</b> :{props.profile.aboutMe}</div>
    </div>
}

