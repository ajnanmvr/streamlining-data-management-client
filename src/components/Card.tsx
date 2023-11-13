import Link from 'next/link'
import React from 'react'

interface Props {
    name : string
    sheets : number
  }

function Card(props : Props) {
  return (

    <Link href={"#"}>    <div className="flex">
      <div className="bg-smoke rounded-xl p-8 w-64 border-smoke">
        <div>
          <img src="/excel-logo.png" alt="excel icon" className="w-10" />
        </div>
        <div >
          <p className="font-bold text-lg mt-1">{props.name}</p>
          <p><span className="bg-primary text-white pb-[2px] px-2 rounded-full">{props.sheets}</span> Sheets found</p>
        </div>
      </div>
    </div></Link>
  )
}

export default Card
