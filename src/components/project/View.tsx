"use client"
import Axios from '@/utils/Axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react'

interface Props {
  id: string;
}

const View = (props: Props) => {
  const [project, setProject] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true); // New state for loading
  const router = useRouter();

  useEffect(() => {
    const userId = props.id;
    setLoading(true); // Set loading to true when starting the request
    Axios.get(`/projects/${userId}`)
      .then((res) => {
        setProject(res.data);
        setLoading(false); // Set loading to false when data is received
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false on error as well
      });
  }, [props.id]);

  const DeleteProject = () => {
    Axios.delete(`projects/${props.id}`)
      .then((res) => {
        console.log(res.data);
        router.push('/projects');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="font-sans h-screen overflow-hidden flex flex-col bg-accent">
      {loading ? (
        <div className='w-screen flex justify-center'>     <img src="/loading.gif" alt="" className="mx-auto p-20 h-52" /></div>
      ) : (
        project?.data?.map((sheet: any, sheetIndex: any) => (
          <><div
            className="flex flex-col items-center my-10  w-screen"
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
            <button className='border-red-700 border rounded-lg text-red-700 font-semibold hover:text-white px-3 py-1 hover:bg-red-700 flex items-center gap-1 w-fit mx-auto fill-red-700 hover:fill-white' onClick={() => {
              DeleteProject()
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>Delete Project
            </button></>
        ))
      )}
    </main>
  );
};

export default View;