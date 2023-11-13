import Link from 'next/link'
import React from 'react'

interface Props {
    inputName : string
    placeholder : number
  }

function Popup() {
  return (

    <div className='bg-green-200 w-96 flex flex-col justify-center p-5 gap-3'>
        <input type="text" className='' />
        <input type="text" className='' />
    </div>
  )
}

export default Popup
