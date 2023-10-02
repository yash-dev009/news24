import React, { useState } from 'react'
import styles from "./style.module.css"
import SimpleInput from '../simpleInput'
import { Button } from '@mui/material'
import Header from '../header'
import { useRouter } from 'next/router'


function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState(""); 

  const router = useRouter()
  
  return (
    <div>
    <Header/>
         <div className={styles.container }>
           <div className={styles.containersub }>
        <SimpleInput
             title="Full Name"
             value={name}
              maxLength={65}
              name="user_name"
              onChange={e=>setName(e.target.value)}
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
      
           <div className={styles.logindiv} ><Button  className={styles.login} > Login</Button></div> 

           <div className={styles.registeredbtn } > <p onClick={()=> {router.push("/signup")} } style={{cursor:"pointer" ,color:"blue" , margin: "20px   " }}>Click here , if you are already registred</p></div>
        
        </div>
    </div>
  )
}
export default Login