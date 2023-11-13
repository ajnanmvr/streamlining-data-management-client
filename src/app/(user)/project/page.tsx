"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";

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
  const [basePath, setBasePath] = useState<String>();
  const submitForm = (e: any) => {
    e.preventDefault();
    console.log(file);

    const formData = new FormData();
    formData.append("file", file);
    axios
      .post(basePath + "/api/excel/read", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res: any) => {
        setExcelData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setBasePath(window.location.origin);
  }, []);

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="file"
          onChange={(e: any) => {
            setFile(e.target.files[0]);
          }}
          required
        />
        <input type="submit" value={`Submit`} />
      </form>
      <button
        className="bg-green-400"
        onClick={() => downloadExcelFile(excelData)}
      >
        Download
      </button>
      <div>
        {excelData.map((sheet: any, sheetIndex: any) => (
          <div key={sheetIndex}>
            <h2>{sheet.sheetName}</h2>
            <table>
              <thead>
                <tr className="flex">
                  {sheet.rows[0].cells.map((cell: any, cellIndex: any) => (
                    <th key={cellIndex}>{cell.address}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sheet.rows.map((row: any, rowIndex: any) => (
                  <tr key={rowIndex}>
                    {row.cells.map((cell: any, cellIndex: any) => (
                      <td key={cellIndex}>
                        {cell.formula ? cell.value.result : cell.value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <div>
        {excelData.map((sheet: any, sheetIndex: any) => (
          <div key={sheetIndex}>
            <h2>{sheet.sheetName}</h2>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {sheet.headers.map((header: any, rowIndex: any) => (
                    <th scope="col" className="px-6 py-3">
                      {header.value}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                {sheet.rows.map((row: any, rowIndex: any) => (
                                    <td scope="col" className="px-6 py-3">
                                        {row.cells[0].value}
                                    </td>
                                ))}
                            </tr> */}
                {sheet.rows.map((row: any, rowIndex: any) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    {row.cells.map((cell: any, cellIndex: any) => (
                      <td key={cellIndex} scope="col" className="px-6 py-3">
                        {cell.formula ? cell.value.result : cell.value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
