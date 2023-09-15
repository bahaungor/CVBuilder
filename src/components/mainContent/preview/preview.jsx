import './preview.css'

export default function Preview({personal, education, experience}){
    console.log(education)
    return(
        <div className="preview">
            <div className='personalSection'>
                <h1 className="fullName">{personal.fullName}</h1>
                <div className='sub'>
                    <div className="email">✉️ {personal.email}</div>
                    <div className="phone">📞 {personal.phone}</div>
                    <div className="address">📍 {personal.address}</div>
                </div>
            </div>
            <div className="education">
                {education.length==0?<></>:
                <>
                    <div style={{backgroundColor:'var(--bg3)', fontSize:'1.3rem', fontWeight:'900', padding:'5px', textAlign:'center'}}>Education</div>
                    <div className="educationList">
                        {education.map((element,i) => 
                        <div key={i} style={{display:'flex', gap:'40px', marginTop:'20px'}}>
                            <div className="sub1" style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                                {element.startDate} - {element.endDate}
                                <div>{element.location}</div>
                            </div>
                            <div className="sub2">
                            <div style={{fontWeight:'700'}}>{element.school}</div>
                            <div>{element.degree}</div>
                            </div>
                        </div>
                    )}
                    </div>
                </>
                }
            </div>
            <div className="education">
                {experience.length==0?<></>:
                <>
                    <div style={{backgroundColor:'var(--bg3)', fontSize:'1.3rem', fontWeight:'900', padding:'5px', textAlign:'center'}}>Experience</div>
                    <div className="educationList">
                        {experience.map((element,i) => 
                        <div key={i} style={{display:'flex', gap:'40px', marginTop:'20px'}}>
                            <div className="sub1" style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                                {element.startDate} - {element.endDate}
                                <div>{element.location}</div>
                            </div>
                            <div className="sub2">
                            <div style={{fontWeight:'700'}}>{element.company}</div>
                            <div>{element.position}</div>
                            </div>
                        </div>
                    )}
                    </div>
                </>
                }
            </div>
        </div>
    )
}