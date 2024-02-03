import Detail from '@/views/detail'
import { useRouter } from 'next/router'
import React from 'react'


function Index() {

const router = useRouter()
const Id = router.query.id

  return (

    <div><Detail id ={Id}/></div>
  )
}

export default Index