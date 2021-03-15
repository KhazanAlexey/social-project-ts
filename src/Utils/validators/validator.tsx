import React from "react";

export const requiriedField =( value: any)=> {

    return value ? undefined : 'Required field'
}

export const maxLength = (max:number) => (value:any) =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined

export const minLength = (min:number) => (value:any) =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined
export const maxLength15= maxLength(15)
export const maxLength60= maxLength(60)
export const minLength5= minLength(5)
