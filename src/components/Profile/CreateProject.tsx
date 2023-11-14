"use client"
import Axios from '@/utils/Axios'
import Link from 'next/link'
import React , {useState} from 'react'
import * as XLSX from "xlsx";


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
  const [file, setFile] = React.useState<File | null>()
  const [excelData, setExcelData] = useState<any>([]);


  const readExcel = (file: any) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = async (e: any) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });
        console.log(wb.SheetNames);
        let XLS_DATA:any = []
        wb.SheetNames.map((sheetName: any) => {
          const ws = wb.Sheets[sheetName];
          XLS_DATA.push(
            {sheetName: sheetName,
            rows: XLSX.utils.sheet_to_json(ws)}
          )

          // const data = XLSX.utils.sheet_to_json(ws);
          // console.log(data);
          
  
          // validating sheet
          console.log("validating data");
          resolve(XLS_DATA);
        });
        // const wsname = wb.SheetNames[0];

        // const ws = wb.Sheets[wsname];

        // const data = XLSX.utils.sheet_to_json(ws);

        // // validating sheet
        // console.log("validating data");
        // resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d: any) => {
      setExcelData(d);
      console.log(d);
    });
  };

  const uploadFile = (e:any) => {

      setFile(e.target?.files ? e.target?.files[0] : null)
      readExcel(e.target?.files ? e.target?.files[0] : null)

  }

  const submitForm = (e : any)=>{


    e.preventDefault()
    // submit form
    // send data to backend
    Axios.post('/project',{
      name,
      description,
      isPublic,
      data : excelData
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
        onChange={(e)=>{
          setDescription(e.target.value)
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
              <input type="file" name='file' className='' 
              onChange={
               uploadFile
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
