import useNewsStore from '@/zustand/store'
import React from 'react'

const Fav = ({id}) => {
  const favposts = useNewsStore((state) => state.favpost);

const result =favposts.filter((p)=>p.id==id)
console.log(favposts ,"favpost");
console.log(result ,"result");
  return (
    <div>
{/* {result?.map((a)=>{

})} */}
<h2 style={{color:"purple"}}>i am here</h2>


    </div>
  )
}

export default Fav