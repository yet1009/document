import {createContext} from "react";

export const UserContext = createContext()



const UserInfoContext = () => {

    return (
        <UserContext.Provider value={[]}>

        </UserContext.Provider>
    )
}

export default UserInfoContext
