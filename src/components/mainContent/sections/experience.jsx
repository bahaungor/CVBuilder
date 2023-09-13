import { useState } from "react"

export default function Experience({setSchool, setDegree, setStartDate, setEndDate, setLocation}){
    const [formVisibility, setformVisibility] = useState(false)

    function updatePreview(e){
        e.target.id === 'school' ? setSchool(e.target.value) :
        e.target.id === 'degree' ? setDegree(e.target.value) :
        e.target.id === 'startDate' ? setStartDate(e.target.value) :
        e.target.id === 'endDate' ? setEndDate(e.target.value) :
        e.target.id === 'location' ? setLocation(e.target.value) : ''
    }

    return(
        <div className="education">
            {formVisibility ? (
            <form onInput={updatePreview}>
                <h2>Education</h2>
                <input type="text" id="school" placeholder="School / University" />
                <input type="email" name="degree" id="degree" placeholder="Degree / Field Of Study"/>
                <input type="text" name="startDate" id="startDate" placeholder="Start Date" />
                <input type="text" name="endDate" id="endDate" placeholder="End Date" />
                <input type="text" name="location" id="location" placeholder="Location" />
            </form>
        ) : (<div></div>)
        }
            <button onClick={()=>formVisibility ? setformVisibility(false) : setformVisibility(true)}>+ Experience</button>
        </div>
    )
}