import { useState } from 'react'
import './mainContent.css'
import Preview from './preview/preview'
import Personal from './sections/personal'
import Education from './sections/education'
import Experience from './sections/experience'

export default function MainContent(){
    const [personal, setPersonal] = useState({fullName:'', 
    email:'', phone:'', address:''})

    const [education, setEducation] = useState([])
    const [experience, setExperience] = useState([])
    return (
        <main>
            <div className='settings'>
                <Personal setPersonal={setPersonal} />

                <Education education={education} setEducation={setEducation}/>

                <Experience experience={experience} setExperience={setExperience}/>
            </div>
            <Preview personal={personal} education={education} experience={experience}/>
        </main>
    )
}