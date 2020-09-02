import React from "react"
import "./styles/App.css"
//importComponents
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"

class App extends React.Component{

    constructor(){
        super()
        this.state = {
            links: "#"
        }
    }
    render(){
        let {links} = this.state
        return(

            <div className="App">
                <Nav 
                    links={links}
                />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App