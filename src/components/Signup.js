import React, { useState } from 'react'
import "./Home.css"
import { useHistory } from 'react-router-dom'

const Signup = (props) => {

    const host = "http://localhost:5000";

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", epassword: "" })
    const { name, email, password } = credentials;
    let history = useHistory();
    const handlesubmit = async (event) => {


        event.preventDefault();
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })

        });
        const json = await response.json();
        console.log(json)

        if (json.success) {
            //saving auth token
            window.localStorage.setItem('token', json.authtoken)
            history.push("/")
            props.showAlert("Account created succesfully", "success")

        }
        else {

            props.showAlert("Invalid details", "danger")
        }
    }

    const onchange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })  // here : is =
    }


    return (
        <div className=" d-flex justify-content-center logincontainer">
            <div>
                <h1>Welcome to i-notebook</h1>

                <form onSubmit={handlesubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" aria-describedby="emailHelp" onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" placeholder="Enter your Email" id="email" name="email" aria-describedby="emailHelp" onChange={onchange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter your password" name="password" id="password" onChange={onchange} required minLength={6} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" name="cpassword" placeholder="confirm password" id="cpassword" onChange={onchange} required minLength={6} />
                    </div>
                    <div className="d-flex justify-content-center ">

                        <button type="submit" className="btn btn-primary mt-3 mb-5 " style={{ width: "150px" }} >Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
