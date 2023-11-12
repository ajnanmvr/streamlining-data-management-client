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
        axios.post("https://streamlining-data-management-client.vercel.app/api/excel/read", formData, {
            headers: { "Content-Type": "multipart/form-data" }
        }).then((res) => {
            setExcelData(res.data.data);
            console.log(res.data.data);
        }
        ).catch((err) => {
            console.log(err);
        })

    }

    return <div className="mt-5">
        <form onSubmit={submitForm} className="w-full justify-center flex">
            <input type="file" className="file:border-primary file:border file:rounded-lg file:text-primary file:px-3 file:py-1 file:hover:bg-smoke file:font-semibold file:bg-white" onChange={(e: any) => { setFile(e.target.files[0]) }} required />
            <input type="submit" className="border-primary border rounded-lg text-white px-3 py-1 hover:bg-light bg-primary" value={`Upload`} />
    <a href="https://fastupload.io/lXEVV4BKDOLN/NWX1U53KCz8N7SC/rk9zKnMVQ30lY/test.xlsx" className='border-primary border rounded-lg text-white px-3 py-1 hover:bg-light bg-primary ml-2' >Download Demo File</a>
        </form>
        {excelData.map((sheet: any, sheetIndex: any) => (
            <div className=" flex flex-col items-center">
                <h2>{sheet.sheetName}</h2>
                <table className="table overflow-auto min-w-[80%] max-w-[90%] max-h-[70vh]">
                    <thead>
                        <tr className="border-2 border-dark">
                            {sheet.headers.map((header: any, rowIndex: any) => (
                                <td className="border-2 border-dark">{header}</td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {sheet.rows.map((row: any, rowIndex: any) => (
                        <tr className="border border-dark">
                        {row.cells.map((cell: any, cellIndex: any) => (
                                    <td key={cellIndex} scope="col" className="border border-dark" >{cell.formula ? cell.value.result : cell.value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ))}
    </div>

}

