import React, {Component} from 'react';
import {AuthContext} from "../Context/AuthContextProvider";

export default class Navbar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            !this.context.isAuth ? 
                (
                    <div>
                        <button onClick={this.context.toggleIsAuth}>Login</button>
                    </div>
                ) :         (
                    <div>
                        <button>Logout</button>
                    </div>
                )
            );
    }
}

Navbar.contextType = AuthContext;