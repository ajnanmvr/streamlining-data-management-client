import Link from 'next/link'
import React from 'react'
function Card() {
  return (

    <Link href={"#"}>    <div className="flex">
      <div className="bg-smoke rounded-xl p-8 w-64 border-smoke">
        <div>
          <img src="/excel-logo.png" alt="excel icon" className="w-10" />
        </div>
        <div >
          <p className="font-bold text-lg mt-1">Farrago</p>
          <p><span className="bg-primary text-white pb-[2px] px-2 rounded-full">5</span> Sheets found</p>
        </div>
      </div>
    </div></Link>
  )
}

export default Card
