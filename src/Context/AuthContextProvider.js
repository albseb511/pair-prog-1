import React, {Component} from 'react';

export const AuthContext = React.createContext();

export class AuthContextProvider extends Component {
    constructor(props){
        super(props);

        this.state = {
            isAuth: false,
        }
    }

    toggleIsAuth = () => {
        this.setState(prevState => ({
            isAuth: !prevState.isAuth,
        }))
    }

    render() {
        return(
            <AuthContext.Provider value={{isAuth: this.state.isAuth, toggleIsAuth:this.toggleIsAuth}}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}