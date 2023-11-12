"use client";
import { useState } from "react";
import axios from "axios";

export default function Page() {
    const [file, setFile] = useState<any>(null);
    const [excelData, setExcelData] = useState<any>([]);

    const submitForm = (e: any) => {
        e.preventDefault();
        console.log(file);

        const formData = new FormData();
        formData.append("file", file);
        axios.post("http://localhost:3000/api/excel/read", formData, {
            headers: { "Content-Type": "multipart/form-data" }
        }).then((res) => {
            setExcelData(res.data.data);
            console.log(res.data.data);
        }
        ).catch((err) => {
            console.log(err);
        })

    }

    return <div>
        <form onSubmit={submitForm}>
            <input type="file" className="file:border-primary file:border file:rounded-lg file:text-primary file:px-3 file:py-1 file:hover:bg-smoke file:font-semibold file:bg-white" onChange={(e: any) => { setFile(e.target.files[0]) }} required />
            <input type="submit" className="border-primary border rounded-lg text-white px-3 py-1 hover:bg-light bg-primary" value={`Submit`} />
        </form>
        <div>
            {excelData.map((sheet: any, sheetIndex: any) => (
                <div key={sheetIndex}>
                    <h2>{sheet.sheetName}</h2>
                    <table >
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
                                        <td key={cellIndex}>{cell.formula ? cell.value.result : cell.value}</td>
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
                                        {header}
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


            )

            )
            }
        </div>

    </div>

}

