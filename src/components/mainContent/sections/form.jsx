import { useState } from "react"
import Lister from "./lister"

export default function Form({title, visibleChildren, buttonName, 
    onSubmit, liste, formVisibility, setformVisibility}){

    return(
        <div>
            {formVisibility ? <></> : <Lister liste={liste}/>}
            {formVisibility ? 
            <form onSubmit={onSubmit}>
                <h2>{title}</h2>
                {visibleChildren}
                <div className="buttons" style={{display:'flex'}}>
                    <button type="submit">Save</button>
                    <button onClick={()=>setformVisibility(false)}>Cancel</button>
                </div>
            </form>
         : <button onClick={()=>setformVisibility(true)}>{buttonName}</button>
        }
        </div>
    )
}