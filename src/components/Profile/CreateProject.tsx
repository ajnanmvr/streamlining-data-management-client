"use client"
import Axios from '@/utils/Axios'
import Link from 'next/link'
import React from 'react'

interface Props {
  isPopupShow : boolean
  setIsPopupShow : any
  }

function CreateProject(
  props: Props
) {

  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [isPublic, setIsPublic] = React.useState(true)
  const [file, setFile] = React.useState('')



  const submitForm = (e : any)=>{
    e.preventDefault()
    // submit form
    // send data to backend
    Axios.post('/project',{
      name,
      description,
      isPublic,
      data : file
    }).then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
    // close popup
    props.setIsPopupShow(false)
  }

  return (

    <div className='bg-green-200 w-96 flex flex-col justify-center p-5 gap-3'>

      <p className='cursor-pointer' onClick={()=>{
        props.setIsPopupShow(false)
      }}> close</p>
      
       <form onSubmit={
          (e)=>{
            submitForm(e)
          }
       }>
       name
        <input type="text" className='' 
        value={name}
        onChange={
          (e)=>{
            setName(e.target.value)
          }
        }
         />
        description
        <input type="text" className='' 
        value={description}
        onChange={()=>{
          setDescription(description)
        }}
        />
        {/* radio buttor */}
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <input type="radio" name='radio' className='' onClick={()=>{
              setIsPublic(true)
            }} />
            <p>public</p>
          </div>
          <div className='flex gap-2'>
            <input type="radio" name='radio' className='' 
            onClick={()=>{
              setIsPublic(false)
            }}
            />
            <p>private</p>
          </div>
          </div>
          
          {/* file upload by drag and drop and select */}

          <div className='flex justify-between'>
            <div className='flex gap-2'>
              <input type="file" name='file' className='' value={file}
              onChange={
                (e)=>{
                  setFile(e.target.value)
                }
              }
              />
              
              <button type='submit' className='bg-green-500 p-2 rounded-md'>create</button>
            </div>
            </div>

       </form>
          
    </div>
  )
}

export default CreateProject
