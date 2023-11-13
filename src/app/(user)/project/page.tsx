"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Page() {
  const [file, setFile] = useState<any>(null);
  const [excelData, setExcelData] = useState<any>([]);

  const submitForm = (e: any) => {
    e.preventDefault();
    console.log(file);

    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("http://127.0.0.1:3000/api/excel/read", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        setExcelData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function setToLocalStorage(data: any) {
    localStorage.setItem("encodedData", btoa(JSON.stringify(data)));
  }

  return (
    <div className="mt-5">
      <form
        onSubmit={submitForm}
        className="w-full justify-center flex flex-col items-center"
      >
        <div>
          <input
            type="file"
            className="file:border-primary file:border file:rounded-lg file:text-primary file:px-3 file:py-1 file:hover:bg-smoke file:font-semibold file:bg-white"
            onChange={(e: any) => {
              setFile(e.target.files[0]);
            }}
            required
          />
          <input
            type="submit"
            className="border-primary border rounded-lg text-white px-3 py-1 hover:bg-light bg-primary"
            value={`Submit`}
          />
        </div>
        <a
          href="https://fastupload.io/lXEVV4BKDOLN/NWX1U53KCz8N7SC/rk9zKnMVQ30lY/test.xlsx"
          className="mt-3 text-primary px-3 border border-white rounded-xl py-1 hover:border-primary ml-2"
        >
          Download Demo File
        </a>
      </form>
      {excelData.length > 0 && (
        <>
          <Link href="/project/edit" onClick={()=>setToLocalStorage(excelData)}>
            Go to edit page
          </Link>
          {excelData.slice(0,3).map((sheet: any, sheetIndex: any) => (
            <div className=" flex flex-col items-center" key={sheetIndex}>
              <hr className="border-2 border-dashed w-full border-primary mt-20 -mb-7" />
              <h2 className="p-3 bg-primary  rounded-xl w-48 text-white text-lg font-semibold text-center">
                {sheet.sheetName}
              </h2>
              <table className="table mt-10 rounded-xl overflow-hidden min-w-[80%] max-w-[90%] max-h-[70vh]">
                <thead>
                  <tr className="border-2 border-smoke">
                    {sheet.headers.slice(0,3).map((header: any, rowIndex: any) => (
                      <>
                        <td
                          className="border-2 p-2 bg-primary font-semibold text-white capitalize border-primary"
                          key={rowIndex}
                        >
                          {header.value}
                        </td>
                      </>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sheet.rows.slice(0,3).map((row: any, rowIndex: any) => (
                    <tr className="border border-smoke" key={rowIndex}>
                      {row.cells.slice(0,3).map((cell: any, cellIndex: any) => (
                        <td
                          key={cellIndex}
                          scope="col"
                          className="border p-2 border-smoke"
                        >
                          {cell.formula ? cell.value.result : cell.value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
