import { useState } from "react"

export default function Form({title, visibleChildren, buttonName}){
    const [formVisibility, setformVisibility] = useState(false)



    return(
        <div className="education">
            {formVisibility ? (
            <form>
                <h2>{title}</h2>
                {visibleChildren}
                <div className="buttons" style={{display:'flex'}}>
                    <button type="submit">Save</button>
                    <button onClick={()=>setformVisibility(false)}>Cancel</button>
                </div>
            </form>
        ) : (<button onClick={()=>formVisibility ? setformVisibility(false) : setformVisibility(true)}>{buttonName}</button>)
        }
            
        </div>
    )
}