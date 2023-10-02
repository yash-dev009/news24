import React from 'react'
import Style from './style.module.css'
import { BsFacebook ,BsTwitter , BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div>
        <div  className={Style.footercontainer}>
       <div className={Style.footersubcontainer} >
      <div className={Style.footerlogo_heading}>
       <img className={Style.logo} src={`/newspaper.png`}/> <h3 className={Style.footerheading}>24*7 news</h3>
       </div>

<div className={Style.footericons}>
  <BsFacebook size={`25px`} />
  <BsTwitter size={`25px`}  className={Style.icon}/>
  <BsInstagram size={`25px`}  className={Style.icon}/>
  <p>Contact us , for daily updates.</p>
</div>
  </div> 

  <p className ={Style.footerpara}>24*news pvt.ltd 
      © Copyright Reserved 2023 </p>
        </div>
    </div>
  )
}

export default Footer