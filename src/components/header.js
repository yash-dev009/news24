import React, { useState } from "react"
import Style from "./style.module.css"
import {GiHamburgerMenu} from "react-icons/gi"
import { useRouter } from "next/router"
import PersistentDrawerLeft from "./drawer"



const Header = ({login , post}) => {

const [ logIn , setLogIn]= useState(false)

  const router = useRouter()
  return (
    <div>

<div className={Style.container}>
<div  className={Style.btncontainer}>
<GiHamburgerMenu onClick={()=><PersistentDrawerLeft/>} className={Style.hamburger}/>
<div className={Style.headerlogo_heading} onClick={()=>{router.push("/")}}> 
<img className={Style.logo} src={`/newspaper.png`}/>
<h3 className={Style.heading}>24*7 news</h3> 
</div>
<div className={Style.Postbtndiv} >
{post &&  <button  className={Style.Postbtn}  onClick={()=> {router.push("/form")}}>Post news</button>}
<button  className={Style.Postbtn}  onClick={()=> {router.push("/login")}}> Login / <p onClick={()=>{router.push("/signup")}}>Signup</p></button>
</div> 
</div>

</div>
    </div>
  )
}

export default Header 