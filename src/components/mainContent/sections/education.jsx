import { useState } from "react"
import Form from "./form"

export default function Education({education, setEducation}){
    const [formVisibility, setformVisibility] = useState(false)

    function UpdateEducation(e){
        e.preventDefault()
        education[education.length] = {
            school:e.target[0].value, 
            degree:e.target[1].value, 
            startDate:e.target[2].value, 
            endDate:e.target[3].value,
            location:e.target[4].value
        }
    setEducation(education)
    setformVisibility(false)
    }
 

    return(
        <>
        <Form setformVisibility={setformVisibility} formVisibility={formVisibility} liste={education} onSubmit={UpdateEducation} title='Education' buttonName='+ Education' 
        visibleChildren={
            <>
            <input type="text" id="school" placeholder="School / University"/>
            <input type="text" name="degree" id="degree" placeholder="Degree / Field Of Study"/>
            <input type="text" name="startDate" id="startDate" placeholder="Start Date" />
            <input type="text" name="endDate" id="endDate" placeholder="End Date" />
            <input type="text" name="location" id="location" placeholder="Location" />
            </>
        }/>
        </>
    )
}