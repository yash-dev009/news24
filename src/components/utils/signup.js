// import React from 'react'

// function Singup() {
//   return (
//     <div> Singup</div>
//   )
// }

// export default Singup

import React, { useState,useEffect } from 'react'
import styles from "./style.module.css"
import SimpleInput from '../simpleInput'
import { Button } from '@mui/material'
import Header from '../header'
import { useRouter } from 'next/router'
import Footer from '../footer'
import axios from 'axios'


function Signup() {
  const [name , setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const router = useRouter()

useEffect(() => {

 

 
}, [])

  const handleClick = (e)=>{
e.preventDefault()

axios.post("http://localhost:5000/api/user/signup" , {
  name:name,
  email: email ,
  password: password
})
.then((response) => {
  console.log(response);
  router.push("/")
setName("")  
setEmail("")
setPassword("")
}).catch(err => {
  console.log(err,"signuperror");
})


  }
  
  return (
    <div>
    <Header/>
         <div className={styles.container }>
           <div className={styles.containersub }>
           <SimpleInput
             title="Full Name"
             value={name}
              maxLength={65}
              name="User mail"
              onChange={e=>setName(e.target.value)}
              inputStyle={{ width: "93%" }}
        />

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

            <button  className={styles.login} onClick={handleClick} >Signup</button></div> 

           <div className={styles.registeredbtn } >
             <p onClick={()=> {router.push("/login")} } style={{cursor:"pointer" ,color:"blue" , margin: "20px   " }}>
              Click here , if you are already registred</p>
             </div>
        
        </div>
     
    </div>
  )
}
export default Signup