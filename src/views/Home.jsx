import React, {useState,useEffect} from "react"

//STYLES import "./"

//COMPONENTS
import Header from "../components/Header"
import Form from "../components/Form"


const Home = () => {

    const handleGithubUser = (e) => {
        console.log(e.target.value)
    }


    return (
        <div className="home-container">
            <Header />
            <Form handleGithubUser={handleGithubUser}/>
        </div>
    )
}
export default Home