"use client"
import Axios from '@/utils/Axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react'

interface Props{
    id : string
}

const View = (props:Props) => {


    const [project , setProject ] = useState<any>()
    const router = useRouter()

    useEffect(() => {
        const userId = props.id;
        Axios.get(`/projects/${userId}`)
          .then((res) => {
            setProject(res.data);
            console.log(res.data);
            
          })
          .catch((err) => {
            console.log(err);
          });
    
      }, []);

      
const DeleteProject = () => {
  Axios.delete(`projects/${props.id}`)
  .then((res) => {
    console.log(res.data);
    router.push('/projects')
  })
  .catch((err) => {
    console.log(err);
  });
}

    

  return (
    <main className="font-sans h-screen overflow-hidden flex bg-accent">
       {
         project?.data?.map((sheet: any, sheetIndex: any) => (
          <div
            className=" flex flex-col items-center my-10 h-[400px]"
            key={sheetIndex}
          >
            <hr className="border-2 border-dashed w-full border-primary mt-10 -mb-7" />
            <h2 className="p-3 bg-primary rounded-xl w-48 text-white font-semibold text-center">
              Sample Preview
            </h2>
            <table className="border border-primary table mt-10 rounded-xl overflow-hidden min-w-[80%] max-w-[90%] max-h-[70vh]">
              <tbody>
                {sheet.rows.slice(0, 1).map((row: any, rowIndex: any) => (
                  <tr className="border border-smoke">
                    {Object.keys(row)
                      .slice(0, 5)
                      ?.map((key, colIndex) => (
                        <td scope="col" className="border p-2 border-smoke">
                          {key as unknown as ReactNode}
                        </td>
                      ))}
                  </tr>
                ))}
                {sheet.rows.slice(0, 3).map((row: any, rowIndex: any) => (
                  <tr className="border border-smoke">
                    {Object.values(row)
                      .slice(0, 5)
                      ?.map((value, colIndex) => (
                        <td scope="col" className="border p-2 border-smoke">
                          {value as unknown as ReactNode}
                        </td>
                      ))}
                  </tr>
                ))}
                <tr className=" border bg-smoke hover:bg-smoker">
                  <td colSpan={5}>
                    <Link
                      href={`/project/${props.id}/edit`}
                      // onClick={() => setToLocalStorage(excelData)}
                    >
                      <h2 className="p-2 w-full text-primary font-semibold text-center">
                        Go to Editor
                      </h2>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}

        <button onClick={()=>{
          DeleteProject()
        }}>
          Delete Project
        </button>
    </main>
  );
}

export default View
