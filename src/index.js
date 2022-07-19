import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Main from "./components/main";
import Practice from "./components/practice";
import './index.css'

function Index(){
    return(
        <div className="container-fluid">
            <Header/>
            <Main/>
            {/* <Practice/> */}
        </div>
    )
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root'))