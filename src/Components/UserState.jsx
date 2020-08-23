import React, {useContext} from 'react';
import {AuthContext} from "../Context/AuthContextProvider"

function UserState(){
    const {isAuth} = useContext( AuthContext )

    return isAuth ?(
        <div>
            User is logged in
        </div>
    ):
    (
        <div>
            User is logged out
        </div>
    )
}

export default UserState