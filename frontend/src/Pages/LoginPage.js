import React, { useState } from 'react'
import axios from "axios";
import { Link , useNavigate } from "react-router-dom";
import '../css/LoginPage.css'

const LoginPage = () => {
  const [data, setData] = useState({ employeeID: "", password: "" });
  const [error, setError] = useState("");

    // Helper function to send the data to the server.
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const navigate = useNavigate()

    // Helper function to send user to dashboard if email and pw is valid. Also stores token into local storage.
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data: res } = await axios.post("/api/login/signin", data);
            localStorage.setItem("employeeID", data.employeeID);
            localStorage.setItem("token", res.data);
            navigate("/dashboard");
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                // Sets the error message to disappear after 5s.
                setTimeout(() => {
                    setError("");
                }, 5000);
                setError(error.response.data.message);
            }
        }
    };

    return (
      <div>
        <h2></h2>
              <div className='main_div_container'>
                  <form
                      className='form_container'
                      onSubmit={handleSubmit}
                  >
                      <h1>Sign In</h1>
                      <label>Employee ID: </label>
                      <input className='input'
                          type="text"
                          placeholder="Enter Employee ID"
                          name="employeeID"
                          onChange={handleChange}
                          value={data.employeeID}
                          required
                          // className={styles.input}
                      /> <br></br>
                      <label>Password: </label>
                      <input className='input'
                          type="password"
                          placeholder="Enter Password"
                          name="password"
                          onChange={handleChange}
                          value={data.password}
                          required
                          // className={styles.input}
                      />
                      <div className='errorMessageDiv'>
                      {error && (
                          <p className='errorMessage'>{error}</p>
                      )}
                      </div>
                      <br></br>
                      <button type="submit" className='submitButton'>
                          Sign In
                      </button>
                  </form>
              </div>
              </div>
  );
};

export default LoginPage