export default function Lister({liste}){
    
    return (
        liste.length==0 ? <></> :
        (
            liste.map((element,i) => 
                    <div style={{fontSize:'1.3rem', borderBottom:'4px solid var(--bg3)', marginBottom:'10px'}} 
                    key={i} 
                    data-id={i}
                    >{element.school ? element.school: element.company}
                    </div>
            )
        )
    )
}