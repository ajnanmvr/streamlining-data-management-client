"use client"
import Axios from '@/utils/Axios'
import Link from 'next/link'
import React, { useState } from 'react'
import * as XLSX from "xlsx";


interface Props {
  isPopupShow: boolean
  setIsPopupShow: any
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
        let XLS_DATA: any = []
        wb.SheetNames.map((sheetName: any) => {
          const ws = wb.Sheets[sheetName];
          XLS_DATA.push(
            {
              sheetName: sheetName,
              rows: XLSX.utils.sheet_to_json(ws)
            }
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

  const uploadFile = (e: any) => {

    setFile(e.target?.files ? e.target?.files[0] : null)
    readExcel(e.target?.files ? e.target?.files[0] : null)

  }

  const submitForm = (e: any) => {


    e.preventDefault()
    // submit form
    // send data to backend
    Axios.post('/projects', {
      name,
      description,
      isPublic,
      data: excelData
    }).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
    // close popup
    props.setIsPopupShow(false)
  }

  return (

    <form onSubmit={
      (e) => {
        submitForm(e)
      }
    } className="bg-white flex flex-col h-fit w-96 p-10 rounded-xl gap-3 items-center relative">
      <svg
        className="h-12 fill-primary"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
      >
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
      </svg>
      <h1 className="text-center font-semibold text-2xl">Create <span className="font-extrabold text-primary">New Project</span></h1>
      <p>

      </p>
      <input
        type="text"
        placeholder="Project Name"
        value={name}
        onChange={
          (e) => {
            setName(e.target.value)
          }
        }
        className="px-3 py-2 rounded-lg border focus:border-primary"
        required
      />

      <input
        value={description}
        onChange={(e) => {
          setDescription(e.target.value)
        }}
        placeholder="Description"
        className="px-3 py-2 rounded-lg border focus:border-primary"
        required
      />
      {/* radio buttor */}
      <div className='flex gap-3 justify-between'>

        <label className='flex items-center gap-1'>          <input type="radio" name='radio' className='' onClick={() => {
          setIsPublic(true)
        }} />
          <p>Public</p></label>

        <label className='flex items-center gap-1'>          <input type="radio" name='radio' className=''
          onClick={() => {
            setIsPublic(false)
          }}
        />
          <p>Private</p></label>

      </div>


      <input type="file" name='file' className='file:border-primary border border-primary rounded-xl uppercase file:border file:mr-3 file:rounded-lg file:text-white file:px-3 file:py-1 file:hover:bg-light file:bg-primary file:font-semibold text-sm w-50 my-3'
        onChange={
          uploadFile
        }
      />

      <button type='submit' className='border-primary border rounded-lg text-white px-3 py-1 hover:bg-light bg-primary'>Create</button>

      <button className=' absolute top-5 right-5  px-3 py-1 ' onClick={() => {
        props.setIsPopupShow(false)
      }}> <svg xmlns="http://www.w3.org/2000/svg" height="1em" className='h-8 w-8 fill-red-800 p-1 hover:bg-red-50 rounded-full ' viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg></button>
    </form>





  )
}

export default CreateProject
