import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


const SignUpComponent = () => {

  let [username, updateUsername] = useState("")
  let [email, updateEmail] = useState("")
  let [phone, updatePhone] = useState("")
  let [password, updatePassword] = useState("")


  let [loading, setLoading] = useState("")
  let [error, setError] = useState("")
  let [success, setSuccess] = useState("")



  const handleSubmit = async (e) => {

    // prevent default behavior
    e.preventDefault();


    // notofy user to wait
    setError("")
    setSuccess("")
    setLoading("Submitting data! Please wait....")



    // confirm the user input
    console.log(username, email, phone, password)

    // try send data to server
    try {

      // create form data
      const user_data = new FormData()
      user_data.append("username", username)
      user_data.append("email", email)
      user_data.append("phone", phone)
      user_data.append("password", password);



      // use axios to send data to server
      const response = await axios.post("https://jefuni.alwaysdata.net/api/signup", user_data)

      console.log(response)

      if (response.status === 200) {
        setSuccess(response.data.message)
        setLoading("")

      }

    } catch (error) {
      console.log(error)
      setError(error.message)
      setLoading("")

    }
  };



  return (
    <div className="row ">
      <Navbar/>
    <div className="row justify-content-center mt-5 mb-5">
      <div className="col-md-6 card shadow p-4" >
        <h2>Sign Up</h2>
        <h5 className="text-warning">{loading}</h5>
        <h5 className="text-danger">{error}</h5>
        <h5 className="text-success">{success}</h5>

        <form onSubmit={handleSubmit} >
          <fieldset>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter Your Username"
                required
                onChange={(e) => {
                  updateUsername(e.target.value)
                }}
                value={username}

              />
              <label htmlFor="username">Enter Your Username</label>
            </div>
            <br />

            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="Email"
                placeholder="Enter Your email"
                required
                onChange={(e) => {
                  updateEmail(e.target.value)
                }}
                value={email}
              />
              <label htmlFor="Email">Enter Your Email</label>
            </div>
            <br />


            <div className="form-floating">
              <input
                type="tel"
                className="form-control"
                id="Phone"
                placeholder="Enter Your Phone Number"
                required
                onChange={(e) => {
                  updatePhone(e.target.value)
                }}
                value={phone}
              />
              <label htmlFor="Phone">Enter Your Phone Number</label>
            </div>
            <br />

            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="Status"
                placeholder="Enter Your Password"
                required
                onChange={(e) => {
                  updatePassword(e.target.value)
                }}
                value={password}
              />
              <label htmlFor="Status">Enter Your Password</label>
            </div>
            <br />



            <button className="btn btn-success">Sign Up</button> <br />
            <hr />
            <Link to="/signin">Already have an account? Sign In</Link>



          </fieldset>
        </form>
      </div>
    </div>
    </div>
  )
}
export default SignUpComponent;