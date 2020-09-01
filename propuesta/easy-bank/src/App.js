import React from "react"
import "./styles/App.css"
//importComponents
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App(){
    return(
        <div className="App">
            <Nav />
            <Main />
        </div>
    )
}

export default App