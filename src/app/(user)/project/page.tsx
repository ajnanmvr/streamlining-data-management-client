"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const downloadExcelFile = async (excelData: String) => {
  try {
    const postData = {
      data: excelData,
    };
    // Make a POST request to the Excel API route
    const response = await fetch("/api/excel/download", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify the content type if sending JSON data
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      // Convert the response to a Blob and create a URL for downloading
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create a download link and trigger the download
      const a = document.createElement("a");
      a.href = url;
      a.download = "Excel.xlsx";
      a.click();

      // Clean up by revoking the URL
      window.URL.revokeObjectURL(url);
    } else {
      console.error("Failed to generate Excel file.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export default function Page() {
  const [file, setFile] = useState<any>(null);
  const [excelData, setExcelData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false); // Introduce loading state

  const submitForm = (e: any) => {
    e.preventDefault();
    setLoading(true); // Set loading to true before making the request

    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("/api/excel/read", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        setExcelData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after the request is complete
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
        <a
          href="https://fastupload.io/lXEVV4BKDOLN/NWX1U53KCz8N7SC/rk9zKnMVQ30lY/test.xlsx"
          className="mt-3 text-sm text-[gray] px-3 border-white rounded-xl py-1 hover:border-primary ml-2"
        >
          Download Demo File
        </a>
      </form>
      {loading ? (
        'Loading...' // Display loading state
      ) : excelData.length > 0 ? (
        <>
          {excelData.slice(0, 5).map((sheet: any, sheetIndex: any) => (
            <div className=" flex flex-col items-center mb-10" key={sheetIndex}>
              <hr className="border-2 border-dashed w-full border-primary mt-10 -mb-7" />
              <h2 className="p-3 bg-primary rounded-xl w-48 text-white font-semibold text-center">
                Preview
              </h2>
              <table className="border border-primary table mt-10 rounded-xl overflow-hidden min-w-[80%] max-w-[90%] max-h-[70vh]">
                <thead>
                  <tr className="border-2 border-smoke">
                    {sheet.headers.slice(0, 5).map((header: any, rowIndex: any) => (
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
                  {sheet.rows.slice(0, 5).map((row: any, rowIndex: any) => (
                    <tr className="border border-smoke" key={rowIndex}>
                      {row.cells.slice(0, 5).map((cell: any, cellIndex: any) => (
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
                      <Link href="/project/edit"
                      onClick={() => setToLocalStorage(excelData)}>
                      <h2 className="p-2 w-full text-primary font-semibold text-center">
                    Go to Editor
                      </h2>
                    </Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}

        </>
      )
        : 'dd'
      }
    </div>
  );
}
