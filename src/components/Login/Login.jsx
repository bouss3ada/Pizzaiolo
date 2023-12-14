import React from "react";
import { useState } from "react";
import AuthUser from "../AuthUser";

const Login = () => {
      const {http,setToken} = AuthUser();
      const [email,setEmail] = useState();
      const [password,setPassword] = useState();
  
      const submitForm = () =>{
          // api call
          http.post('/login',{email:email,password:password}).then((res)=>{
              setToken(res.data.user,res.data.access_token);
          })
      }
  
return(
      <div className="row justify-content-center pt-5 ">
          <div className="col-sm-6">
              <div className="card p-4">
                  <div className="form-group">
                      <label>Email address:</label>
                      <input type="text" placeholder="email"  onChange={e=>setEmail(e.target.value)} id="username" />
                  </div>
                  <div className="form-group mt-3">
                      <label>Password:</label>
                      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}
 id="password"/>
                  </div>
                  
                  <button type="button" onClick={submitForm} >Login</button>
              </div>
          </div>
      </div>
  )
}
export default Login;