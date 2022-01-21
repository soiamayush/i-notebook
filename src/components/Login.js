import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import "./Login.css"


const Login = (props) => {
    const host = "https://soiamayush.github.io";

    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useHistory();
    const handlesubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })

        });
        const json = await response.json();
        console.log(json)

        if (json.success) {
            //saving auth token
            window.localStorage.setItem('token', json.authtoken)
            console.log(json.authtoken)
            props.showAlert("Account loggedin succesfully", "success")
            history.push("/")

        }
        else {

            props.showAlert("Invalid credentials", "danger")
        }
    }

    const onchange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })  // here : is =
    }

    return (
        <div className=" d-flex justify-content-center logincontainer " style={{ height: "100%" }}>
            <div >

                <h1 className="my-3" style={{ color: "#bbe1ef" }}>Log in to i-notebook</h1>

                <form onSubmit={handlesubmit}>
                    <div className="mb-3 ">
                        <label htmlFor="email" className="form-label ">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" value={credentials.email} aria-describedby="emailHelp" onChange={onchange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={credentials.password} onChange={onchange} id="password" />
                    </div>
                    <div className="d-flex justify-content-center ">

                        <button type="submit" className="btn btn-primary mt-3 mb-5 " style={{ width: "150px" }}  >Log in</button>
                    </div>




                </form>
            </div>
        </div>
    )
}

export default Login
