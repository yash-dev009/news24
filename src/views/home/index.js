import React, { useEffect } from 'react'
import Card from '@/components/card'
import Footer from '@/components/footer'
import Header from '@/components/header'
import useNewsStore from '@/zustand/store'
import styles from  './style.module.css'



function Homepage() {
    const favposts = useNewsStore((state) => state.getfavpost);
    console.log(favposts ,"favpost");
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json()
    .then(json =>json) )
   
      },[])
  return (
    <div >
       <Header login post/>
     
       {/* {data.map((i)=>{
        return(
          <Card
          key={i.id}
          id={i.id}
          img={i.image}
          detail={i.detail}
          title={i.title}
          active={i.isfav}
          />
        )
       }
        )} */}
        <Card/>
        
     

       <Footer/>
     
    </div>
  )
}

export default Homepage