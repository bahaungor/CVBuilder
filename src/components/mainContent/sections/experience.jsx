import { useState } from "react"
import Form from "./form"

export default function Experience({experience, setExperience}){
    const [formVisibility, setformVisibility] = useState(false)

    function UpdateExperience(e){
        e.preventDefault()
        const newEntry = {
            company:e.target[0].value, 
            position:e.target[1].value, 
            startDate:e.target[2].value, 
            endDate:e.target[3].value,
            location:e.target[4].value
        }
        const newExpArray = [...experience, newEntry];
        setExperience(newExpArray)
        setformVisibility(false)
    }

    return(
        <>
        <Form setformVisibility={setformVisibility} formVisibility={formVisibility} liste={experience} onSubmit={UpdateExperience} title='Experience' buttonName='+ Experience' 
        visibleChildren={
            <>
            <input type="text" id="company" placeholder="Company Name"/>
            <input type="text" name="position" id="position" placeholder="Position Title"/>
            <input type="text" name="startDate" id="startDate" placeholder="Start Date" />
            <input type="text" name="endDate" id="endDate" placeholder="End Date" />
            <input type="text" name="location" id="location" placeholder="Location" />
            </>
        }/>
        </>
    )
}
