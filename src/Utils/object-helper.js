import React from "react";



export const updateObjectInArray=(items, itemID, propertyName,newObjProp)=>{
    items.map(u => {
        if (u[propertyName] === itemID) {
            return {...u, ...newObjProp}
        }
        return u
    })
}


