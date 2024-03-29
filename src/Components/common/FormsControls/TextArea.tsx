import React from "react";
import {WrappedFieldProps, Field } from "redux-form";
import style from "./FormsControls.module.css"
interface RenderFieldProps extends WrappedFieldProps {
    type: string
};

export const TextArea =(props:RenderFieldProps)=>{

    return(
        <div className={style.form}>
            <div className={props.meta.error&&props.meta.touched?style.error:""}>
                <textarea {...props.input} {...props}/>
            </div>
            <div>
                {props.meta.error&&props.meta.touched && <span>{props.meta.error}</span>}
            </div>
        </div>

    )
}

export const Input = (props:RenderFieldProps) =>{
    return(
        <div className={style.form}>
            <div className={props.meta.error&&props.meta.touched?style.error:""}>

                <input {...props.input}  {...props}/>
            </div>
            <div>
                {props.meta.error&&props.meta.touched && <span>{props.meta.error}</span>}
            </div>
        </div>

    )
}

type FieldType={
    placeholder:string
    name:string,
    component:any
    props?:object
    text?:string
}
export const createField=({placeholder,name,component,props={},text=''}:FieldType)=>(
    <div>
        <Field placeholder={placeholder} name={name} component={component}
               {...props}
        />{text}
    </div>
)

