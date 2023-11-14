
import React  from 'react'
import User from '@/components/User';
export default async function page({ params }: { params: { id: string } }) {

  return(
    <User id={params.id}/>
  )
}
