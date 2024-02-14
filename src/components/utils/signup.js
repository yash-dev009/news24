

import React, { useState,useEffect } from 'react'
import styles from "./style.module.css"
import SimpleInput from '../simpleInput'
import { Button } from '@mui/material'
import Header from '../header/header'
import { useRouter } from 'next/router'
import Footer from '../footer/footer'
import axios from 'axios'
import { getAuth, sendSignInLinkToEmail, signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../../firebase'
import { FcGoogle } from "react-icons/fc"


function Signup() {
  const [name , setName] = useState("")

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const router = useRouter()

  // const registerHandler= async()=>{
  //   try {
  //     if(!name || !password || !email){
  //       toast.error("please fill the details" )
  //       return
  //     } 
    
  //     const {data,error}= await supabase.auth.signUp({
  //       email: email,
  //       password: password,
  //       options:{
  //              data:{
  //                full_name:name
  //              }
  //            }
  //     })
  //   // console.log({response});
  //   if(error){
  //     throw error
  //   }
    
  //   setEmail(""),
  //   setName(""),
  //   setPassword("")
    
  //   router.push("/")
  //   toast.success("Form Submit")
  //   } 
    
  //   catch (error) {
  //     toast.error(error.message)
  //   }
    
  //     }

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

  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'http://localhost:3000/auth',
    // This must be true.
    handleCodeInApp: true,
    // iOS: {
    //   bundleId: 'com.example.ios'
    // },
    // android: {
    //   packageName: 'com.example.android',
    //   installApp: true,
    //   minimumVersion: '12'
    // },
    // dynamicLinkDomain: 'example.page.link'
  };

 async function signWithGoogle() {
    try {
      const result = await signInWithPopup(auth,provider)
      console.log(result,"resukt");
    } catch (error) {
      
    }
  }
  //  const signinwithemail = async()=>{
  //   try {
  //      const result = await signinwithemail
  //   } catch (error) {
      
  //   }
  //  }


  function signinwithemail(params) {
    // alert("kj")
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem('emailForSignIn', email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
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

            <button  className={styles.login} >Signup</button></div> 

           <div className={styles.registeredbtn } >
             <p onClick={()=> {router.push("/login")} } style={{cursor:"pointer" ,color:"blue" , margin: "20px   " }}>
             <b> Click here </b> , if you are already registred</p>
             <hr/>
        
             </div>

             <p onClick={signWithGoogle} className={styles.google} >  <FcGoogle size={30}onClick={signWithGoogle}  />Sign in with google</p>
           
             <p onClick={signinwithemail}>Sihn in with email</p>

            
        </div>
     
    </div>
  )
}
export default Signup