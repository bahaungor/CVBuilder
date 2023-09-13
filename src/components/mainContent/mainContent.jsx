import { useState } from 'react'
import './mainContent.css'
import Preview from './preview/preview'
import Personal from './sections/personal'
import Education from './sections/education'
import Experience from './sections/experience'
import Form from './sections/form'


export default function MainContent(){
    const [personal, setPersonal] = useState({fullName:'', email:'', phone:'', address:''})
    const [education, setEducation] = useState({school:'',degree:'',startDate:'',endDate:'',location:''})
    let educations = []
    return (
        <main>
            <div className='settings'>
                <Personal setPersonal={setPersonal} />
                {/* <Form title='Education' buttonName='+ Education' /> */}
                <Education setEducation={setEducation} educations={educations}/>
                <Experience/>
            </div>
            <Preview personal={personal}/>
        </main>
    )
}