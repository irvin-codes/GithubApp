import React from "react"

//STYLES
import "../styles/Form.css"

const Form = ({handleGithubUser}) => {
    return (
        <div className="form-container">
            <form action="" >
                <input className="form-input-txt" type="text" placeholder="Enter a github user-name" onChange={(e) => handleGithubUser(e)} />
                <input className="form-input-btn" type="submit" value="Click me!" />
            </form>
        </div>
    )
}
export default Form