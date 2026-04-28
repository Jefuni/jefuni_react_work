import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const SignInComponent = () => {

    let [email, updateEmail] = useState("")
    let [password, updatePassword] = useState("")

    let [error, setError] = useState("")
    let [loading, setLoading] = useState("")
    let [success, setSuccess] = useState("")


    // create variable for use navigate
    let navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();


        // notify the user to wait

        setError("")
        setLoading("Please Wait....")
        setSuccess("")



        // try send data to the server

        try{

            // create the form data

            const user_data = new FormData()
            user_data.append("email", email)
            user_data.append("password", password )


            const response = await axios.post("https://jefuni.alwaysdata.net/api/signin", user_data)


            console.log(response)
            if (response.status === 200) {
                if(response.data.user){
                  localStorage.setItem("user", JSON.stringify(response.data.user))
                    setSuccess(response.data.message)
                    navigate("/")                

                }


            }

            



        } catch (error){
            console.log(error)
            setLoading("")
            setError(error.message)  

        }

    }
    return(
        <div className="row">
            <Navbar/>
        <div className="row justify-content-center mt-4">
            
            <div className="col-md-6 card shadow p-4">
                <h2>Sign In</h2>
                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-danger">{error}</h5>
                <h5 className="text-success">{success}</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating">
                        <input 
                        className="form-control"
                        type="verify" 
                        id="Email"
                        placeholder="Enter Your Email"
                        required
                        onChange={(e) => {
                            updateEmail(e.target.value)
                        }}
                        value={email}
                    />
                    <label htmlFor="verify">Enter Your Email</label>
                    </div>
                    <br />
                    <div className="form-floating">
                        <input 
                        className="form-control"
                        type="password"
                        id="checkin"
                        placeholder=""
                        required
                        onChange={(e) => {
                            updatePassword(e.target.value)
                        }}
                       value={password}
                     />
                     <label htmlFor="checkin">Enter Your Password</label>
                    </div>
                     <br />
                     <button className="btn btn-dark">Sign In</button>
                     <br />

                     <hr />
                     
                     <Link to="/signup">Dont have an account? Sign up</Link>
                     



                </form>
            </div>
            
        </div>
        </div>
    )
}

export default SignInComponent;