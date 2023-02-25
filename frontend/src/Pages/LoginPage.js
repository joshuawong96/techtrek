import React, { useState } from 'react'
import axios from "axios";
import { Link , useNavigate } from "react-router-dom";

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
      <div >
          <div >
              <div >
                  <form
                      // className={styles.form_container}
                      onSubmit={handleSubmit}
                  >
                      <h1>Sign In</h1>
                      <input
                          type="text"
                          placeholder="EmployeeID"
                          name="employeeID"
                          onChange={handleChange}
                          value={data.employeeID}
                          required
                          // className={styles.input}
                      /> <br></br>
                      <input
                          type="password"
                          placeholder="Password"
                          name="password"
                          onChange={handleChange}
                          value={data.password}
                          required
                          // className={styles.input}
                      />
                      {error && (
                          <div >{error}</div>
                      )}
                      <br></br>
                      <button type="submit" >
                          Sign In
                      </button>
                  </form>
              </div>
              {/* <div className={styles.right}>
                  <h1>New User?</h1>
                  <Link to="../login/signup">
                      <button type="button" className={styles.white_btn}>
                          Sign Up
                      </button>
                  </Link>
              </div> */}
          </div>
      </div>
  );
};

export default LoginPage