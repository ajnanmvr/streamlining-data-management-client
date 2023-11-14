"use client";
import { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import * as XLSX from "xlsx";

// const downloadExcelFile = async (excelData: String) => {
//   try {
//     const postData = {
//       data: excelData,
//     };
//     // Make a POST request to the Excel API route
//     const response = await fetch("/api/excel/download", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json", // Specify the content type if sending JSON data
//       },
//       body: JSON.stringify(postData),
//     });

//     if (response.ok) {
//       // Convert the response to a Blob and create a URL for downloading
//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);

//       // Create a download link and trigger the download
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = "Excel.xlsx";
//       a.click();

//       // Clean up by revoking the URL
//       window.URL.revokeObjectURL(url);
//     } else {
//       console.error("Failed to generate Excel file.");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

export default function Page() {
  const [file, setFile] = useState<any>(null);
  // const [items, setItems] = useState([]);
  const [excelData, setExcelData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false); // Introduce loading state

  const readExcel = (file: any) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = async (e: any) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });
        console.log(wb.SheetNames);
        let XLS_DATA: any = [];
        wb.SheetNames.map((sheetName: any) => {
          const ws = wb.Sheets[sheetName];
          XLS_DATA.push({
            sheetName: sheetName,
            rows: XLSX.utils.sheet_to_json(ws),
          });

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

  console.log(excelData);

  const submitForm = (e: any) => {
    e.preventDefault();
    setLoading(true); // Set loading to true before making the request

    // const formData = new FormData();
    // formData.append("file", file);
    // axios
    //   .post("/api/excel/read", formData, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   })
    //   .then((res) => {
    //     setExcelData(res.data.data);
    //     console.log(res.data.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    //   .finally(() => {
    //     setLoading(false); // Set loading to false after the request is complete
    //   });
    readExcel(file);
    setLoading(false);
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
            className="file:border-primary file:border file:mr-3 file:rounded-lg file:text-primary file:px-3 file:py-1 file:hover:bg-smoke file:font-semibold file:bg-white"
            onChange={(e: any) => {
              setFile(e.target.files[0]);
            }}
            required
          />
          <input
            type="submit"
            className="border-primary border rounded-lg text-white px-3 py-1 hover:bg-light bg-primary"
            value={`Upload`}
          />
        </div>
      </form>
      {loading ? (
        <div className="flex flex-col justify-center items-center p-20 h-[455px]">
          <img src="/excel-logo.png" alt="" className="h-12" />
          <p className="text-xl font-bold">Loading Preview ...</p>
          <a
            href="https://fastupload.io/lXEVV4BKDOLN/NWX1U53KCz8N7SC/rk9zKnMVQ30lY/test.xlsx"
            className="text-sm text-[gray] flex gap-1 items-center"
          ></a>
        </div>
      ) : excelData.length > 0 ? (
        <>
          {/* {excelData.slice(0, 5).map((sheet: any, sheetIndex: any) => (
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
                  {sheet.rows.slice(0, 5).map((row: any, rowIndex: any) => (
                    <tr className="border border-smoke" key={rowIndex}>
                      {row
                        .slice(0, 5)
                        .map((cell: any, cellIndex: any) => (
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
                  <tr className=" border bg-smoke hover:bg-smoker">
                    <td colSpan={5}>
                      <Link
                        href="/project/edit"
                        onClick={() => setToLocalStorage(excelData)}
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
          ))} */}
          {excelData.map((sheet: any, sheetIndex: any) => (
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
                        href="/project/edit"
                        onClick={() => setToLocalStorage(excelData)}
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
        </>
      ) : (
        <div className="flex flex-col justify-center items-center p-20 h-[455px]">
          <img src="/excel-logo.png" alt="" className="h-12" />
          <p className="text-xl font-bold"> Upload a File for Preview</p>
          <a
            href="https://fastupload.io/lXEVV4BKDOLN/NWX1U53KCz8N7SC/rk9zKnMVQ30lY/test.xlsx"
            className="text-sm text-[gray] flex gap-1 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              className="fill-[gray]"
              viewBox="0 0 512 512"
            >
              <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
            </svg>
            Download Demo File
          </a>
        </div>
      )}
    </div>
  );
}
