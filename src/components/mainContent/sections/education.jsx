import { useState } from "react"
import Form from "./form"

export default function Education({setEducation, educations}){
    function updateEducations(){

    }
    function updatePreview(e){
        setEducation({
            school:e.target.parentNode[0].value, 
            degree:e.target.parentNode[1].value, 
            startDate:e.target.parentNode[2].value, 
            endDate:e.target.parentNode[3].value,
            location:e.target.parentNode[4].value
        })
    }
    function updatePreview(e){
        e.target.id === 'school' ? setSchool(e.target.value) :
        e.target.id === 'degree' ? setDegree(e.target.value) :
        e.target.id === 'startDate' ? setStartDate(e.target.value) :
        e.target.id === 'endDate' ? setEndDate(e.target.value) :
        e.target.id === 'location' ? setLocation(e.target.value) : ''
    }

    return(
        <Form title='Education' buttonName='+ Education'>
            <input type="text" id="school" placeholder="School / University" />
            <input type="email" name="degree" id="degree" placeholder="Degree / Field Of Study"/>
            <input type="text" name="startDate" id="startDate" placeholder="Start Date" />
            <input type="text" name="endDate" id="endDate" placeholder="End Date" />
            <input type="text" name="location" id="location" placeholder="Location" />
        </Form>
        // <div className="education">
        //     {formVisibility ? (
        //     <form onInput={updatePreview}>
        //         <h2>Education</h2>
        //         <input type="text" id="school" placeholder="School / University" />
        //         <input type="email" name="degree" id="degree" placeholder="Degree / Field Of Study"/>
        //         <input type="text" name="startDate" id="startDate" placeholder="Start Date" />
        //         <input type="text" name="endDate" id="endDate" placeholder="End Date" />
        //         <input type="text" name="location" id="location" placeholder="Location" />
        //         <div className="buttons">
        //             <button type="submit">Save</button>
        //             <button>Cancel</button>
        //         </div>
        //     </form>
        // ) : (<button onClick={()=>formVisibility ? setformVisibility(false) : setformVisibility(true)}>+ Education</button>)
        // }
            
        // </div>
    )
}