import Header from '@/components/header';
import useNewsStore from '@/zustand/store'
import React from 'react'

const Fav = ({id}) => {
  const favposts = useNewsStore((state) => state.favpost);

const result =favposts.filter((p)=>p.id==id)
console.log(favposts ,"favpost");
console.log(result ,"result");
  return (
    <div>
      <Header/>
{favposts?.map((a)=>{
  const {id , title , detail,image} = a
  return(
    <div key={id}>
      <p>{title}</p>
      <p>{detail}</p>
      {image.map((a)=>{ 
        return <img key={id} src={a}/>})}
    
      
    </div>
  )

})}
<h2 style={{color:"purple"}}>i am here</h2>


    </div>
  )
}

export default Fav