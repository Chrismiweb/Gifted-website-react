import React from "react";

const chris=(chris)=>{
    return(
        <div className={chris.class}>
            <img src={chris.Image} alt="" />
            <h1>{chris.heading}</h1>
            <p>{chris.paragraph}</p>
            <button>{chris.btn}</button>
        </div>
    )
}
export default chris;