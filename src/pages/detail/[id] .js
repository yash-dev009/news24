import Detail from '@/views/detail'
import { useRouter } from 'next/router'
import React from 'react'

function Index() {
const router = useRouter()
const id = router.query.id
  return (

    <div><Detail id ={id}/></div>
  )
}

export default Index