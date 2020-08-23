import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import UserState from './Components/UserState';

function App() {
  return (
    <div className="App">
      {/* <code style={{whiteSpace: 'pre-wrap'}}>
      {`
      - Create a context by the name AuthContext
      - create a AuthContextProvider component which will wrap the entire application around it
      - create a isAuth and a toggleAuth function
      - pass these values into your context provider
      - create a navbar with a button to login or logout (change with the isAuth variable)
      - create another component which will display the login status of the user
      - these two components should not share props and the app state should be accessed through the context api`}
      </code> */}
      <Navbar />
      <UserState />
    </div>
  );
}

export default App;
