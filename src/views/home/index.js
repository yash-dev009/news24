import React from 'react'
import Card from '@/components/card'
  import Footer from '@/components/footer'
import Header from '@/components/header'
import useNewsStore from '@/zustand/store'
import styles from  './style.module.css'



function Homepage() {
  const posts = useNewsStore((state) => state.posts);
console.log(
  posts ,"post"
);

  return (
    <div >
       <Header login post/>
       <div className={styles.card}>
       {posts.map((i)=>{
        return(
          <Card
          key={i.id}
          img={i.image}
          detail={i.detail}
          title={i.title}
          />
        )
       }
        )}
        </div>
     

       <Footer/>
     
    </div>
  )
}

export default Homepage