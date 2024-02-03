import React, { useState, useEffect } from 'react'
import styles from "./style.module.css"
import SimpleInput from '../simpleInput'
import { Button } from '@mui/material'
import Header from '../header'
import { useRouter } from 'next/router'
import Footer from '../footer'
import axios from 'axios'


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const router = useRouter()

useEffect(() => {

  

 
}, [])

  const handleClick = ()=>{
    axios.post("http://localhost:5000/api/user/login" , {
      email: email ,
      password: password
    })
    .then((response) => {
      console.log(response);
      setEmail(""),
      setPassword("")
      router("/")
    })
    .catch(err=>{
      console.log(err,"catcherror")
    })
  }
  
  return (
    <div>
    <Header/>
         <div className={styles.container }>
           <div className={styles.containersub }>
        <SimpleInput
             title="Email"
             value={email}
              maxLength={65}
              name="User mail"
              onChange={e=>setEmail(e.target.value)}
              inputStyle={{ width: "93%" }}
        />
        <SimpleInput
             title="Password"
              maxLength={65}
              name="password"
              value={password}
              inputStyle={{ width: "93%" }}
              onChange={e=>setPassword(e.target.value)}
             
          />
          </div>

         <span  className={styles.checkbox} ><input  type='checkbox'/> <p className={styles.p} >Terms and conditions</p></span>
      
           <div className={styles.logindiv} >

            <button  className={styles.login} onClick={handleClick} > Login</button></div> 

           <div className={styles.registeredbtn } >
             <p onClick={()=> {router.push("/signup")} } style={{cursor:"pointer" ,color:"blue" , margin: "20px   " }}>
             <b> Click here </b>  , if you are not registred .</p>
             </div>
        
        </div>
     
    </div>
  )
}
export default Login