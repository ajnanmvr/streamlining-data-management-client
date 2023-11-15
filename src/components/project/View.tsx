"use client";
import Axios from "@/utils/Axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";

interface Props {
  id: string;
}

const View = (props: Props) => {
  const [project, setProject] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true); // New state for loading
  const router = useRouter();
  const [copyAlert,setCopyAlert] = useState(false)

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
        router.push("/projects");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const copyProjectLink = () => {
    // Copy the text inside the text field
    navigator.clipboard.writeText(window?.location?.href);

    // Alert the copied text
    // alert("Copied the text: " + copyText.value);
  };

  return (
    <main className="font-sans h-screen overflow-hidden flex flex-col bg-accent">
      {loading ? (
        <div className="w-screen flex justify-center">
          {" "}
          <img src="/loading.gif" alt="" className="mx-auto p-20 h-52" />
        </div>
      ) : (
        project?.data?.map(
          (sheet: any, sheetIndex: any) =>
            sheetIndex === 0 && (
              <>
                <div
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
                              <td
                                scope="col"
                                className="border p-2 border-smoke"
                              >
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
                              <td
                                scope="col"
                                className="border p-2 border-smoke"
                              >
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
                <div className="flex flex-row w-1/3 mx-auto">
                  <button
                    className="border-red-700 border rounded-lg text-red-700 font-semibold hover:text-white px-3 py-1 hover:bg-red-700 flex items-center gap-1 w-fit mx-auto fill-red-700 hover:fill-white"
                    onClick={() => {
                      DeleteProject();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                    </svg>
                    Delete Project
                  </button>
                  <button
                    className="border-primary border rounded-lg text-primary font-semibold hover:text-white px-3 py-1 hover:bg-primary flex items-center gap-1 w-fit mx-auto fill-primary hover:fill-white"
                    onClick={() => {
                      copyProjectLink();
                      setCopyAlert(true)
                      // timeo
                    }}
                  >
                    {copyAlert? <>URL copied</>:<><svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
                    </svg>
                    Share Project</>}
                  </button>
                </div>
              </>
            )
        )
      )}
    </main>
  );
};

export default View;
