import React from "react";

import preloader from "../../assets/images/loader2.gif";


export const Prealoader: React.FC<any>=(props)=>{

    return (<div style={{backgroundColor:"white"}}> <img src={preloader}/> </div>)
}