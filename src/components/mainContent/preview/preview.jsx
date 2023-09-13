import './preview.css'

export default function Preview({personal}){

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
        </div>
    )
}