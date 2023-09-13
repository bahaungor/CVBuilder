export default function Personal({setPersonal}){

    function updatePersonal(e){
        setPersonal({
            fullName:e.target.parentNode[0].value, 
            email:e.target.parentNode[1].value, 
            phone:e.target.parentNode[2].value, 
            address:e.target.parentNode[3].value}
        )
    }

    return(
        <form className="personal" onInput={updatePersonal}>
            <h2>Personal Details</h2>
            <input type="text" id="fullName" placeholder="Full Name" />
            <input type="email" name="email" id="email" placeholder="Email"/>
            <input type="text" name="phone" id="phone" placeholder="Phone" />
            <input type="text" name="address" id="address" placeholder="Address" />
        </form>
    )
}