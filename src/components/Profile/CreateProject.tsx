import Link from 'next/link'
import React from 'react'

interface Props {
  isPopupShow : boolean
  setIsPopupShow : any
  }

function CreateProject(
  props: Props
) {
  return (

    <div className='bg-green-200 w-96 flex flex-col justify-center p-5 gap-3'>

      <p className='cursor-pointer' onClick={()=>{
        props.setIsPopupShow(false)
      }}> close</p>
      
        name
        <input type="text" className='' />
        description
        <input type="text" className='' />
        {/* radio buttor */}
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <input type="radio" name='radio' className='' />
            <p>public</p>
          </div>
          <div className='flex gap-2'>
            <input type="radio" name='radio' className='' />
            <p>private</p>
          </div>
          </div>
          
          {/* file upload by drag and drop and select */}

          <div className='flex justify-between'>
            <div className='flex gap-2'>
              <input type="file" name='file' className='' />
              <p>upload</p>
            </div>
            </div>

          
    </div>
  )
}

export default CreateProject
