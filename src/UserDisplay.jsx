import { useContext } from "react"
import { UserContext } from "./context/UserContext"


export default function UserDisplay(){
    //let globalUserData = useContext(UserContext);
    const {userData, userDataDispatch} = useContext(UserContext);

    function updateUserData(event) {
        //setUserData({jwt: event.target.value})
        userDataDispatch()
    }
    return(
        <div>
            <h1>User JWT: {userData.jwt}</h1>
            <input 
            type="text"
            name="jwt"
            id="jwt"
            value={userData.jwt}
            onChange={updateUserData}
            />
        </div>
    )
}