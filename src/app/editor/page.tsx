"use client";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

function page() {
  const [excelData, setExcelData] = useState<any>([]);
  const [sheetCount, setSheetCount] = useState<number>(0);
  const [selectedRow, setSelectedRow] = useState<any>(0);
  const [updateModal, setUpdateModal] = useState<boolean>(false);
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];


  const downloadExcel = (data: any) => {
    const workbook = XLSX.utils.book_new();
    data.map((sheet: any) => {

      const worksheet = XLSX.utils.json_to_sheet(sheet.rows);
      XLSX.utils.book_append_sheet(workbook, worksheet, sheet.sheetName);
      //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
      //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    });
    XLSX.writeFile(workbook, "DataSheet.xlsx");
  };


  useEffect(() => {
    const data = localStorage.getItem("encodedData");
    const decoded = JSON.parse(atob(data as string));
    if (data) {
      setExcelData(decoded);
    }
    console.log(decoded);
  }, []);

  return (
    excelData.length > 0 && (
      <>
        {updateModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-x-auto">
            <div className="bg-white flex flex-col h-fit w-96 p-10 rounded-xl gap-3 items-center relative">
              <button className=' absolute top-5 right-5  px-3 py-1 ' onClick={() => setUpdateModal(false)}> <svg xmlns="http://www.w3.org/2000/svg" height="1em" className='h-8 w-8 fill-red-800 p-1 hover:bg-red-50 rounded-full ' viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg></button>
              <h1 className="text-center font-semibold text-2xl">Edit <span className="font-extrabold text-primary">The Row</span></h1>

              <div className="max-h-[70vh] overflow-auto m-auto">
                {excelData[sheetCount]?.rows.map(
                  (cell: any, cellIndex: any) => {
                    if (cellIndex == selectedRow) {
                      return (
                        Object.values(cell).map((value, colIndex) => (

                          <input
                            type="text"
                            key={cellIndex}
                            value={value as string}
                            className="px-3 py-2 rounded-lg border my-1 focus:border-primary w-full"
                            onChange={(e) => {
                              console.log(e.target.value);
                              setExcelData((prev: any) => {
                                prev[sheetCount].rows[cellIndex][Object.keys(cell)[colIndex]] = e.target.value;
                                return [...prev];
                              });
                              console.log(excelData);
                            }}
                          />

                        ))
                      )


                    }
                  }
                )}
              </div>
            </div>
          </div>
        )}
        <div className="flex text-sm">
          <table className="sticky left-0 bg-white cursor-pointer">
            <thead>
              <tr>
                <td className="border-2 px-2 h-8 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
                  &nbsp;
                </td>
              </tr>
            </thead>
            <tbody>
              {excelData[sheetCount]?.rows.map((row: any, rowIndex: any) => (
                <tr>
                  <td
                    className="border-2 text-center px-2 h-8 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary"
                    key={rowIndex}
                    onClick={() => {
                      setSelectedRow(excelData[sheetCount]?.rows.indexOf(row));
                      setUpdateModal(true);
                    }}
                  >
                    {excelData[sheetCount]?.rows.indexOf(row) + 1}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <table className="min-w-full">
            <thead className="cursor-pointer">
              <tr className="sticky top-0">
                {alphabets.map((alphabet: any, alphabetIndex: any) => (
                  <td className="border-2 px-2 h-8 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
                    {alphabet}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody className="cursor-cell">
              {excelData[sheetCount].rows
                .slice(0, 1)
                .map((row: any, rowIndex: any) => (
                  <tr className="border border-smoke">
                    {Object.keys(row)
                      ?.map((key, colIndex) => (
                        <td scope="col" className="border p-2 border-smoke">
                          {key as unknown as string}
                        </td>
                      ))}
                  </tr>
                ))}
              {excelData[sheetCount]?.rows.map((row: any, rowIndex: any) => (
                <tr>
                  {Object.values(row)?.map((value, colIndex) => (
                    <td
                      scope="col"
                      className="border px-2 h-8 border-smoke hover:bg-smoke focus-within:bg-smoke"
                      key={colIndex}
                    >
                      <input
                        type="text"
                        className="h-8 border-smoke focus:outline-none focus-within:bg-smoke bg-transparent"
                        value={value as string}
                        onChange={(e) => {
                          console.log(e.target.value);
                          setExcelData((prev: any) => {
                            prev[sheetCount].rows[rowIndex][Object.keys(row)[colIndex]] = e.target.value;
                            return [...prev];
                          });
                          console.log(excelData);
                        }}
                      />
                    </td>
                  ))}
                  {/* {row.cells.map((cell: any, cellIndex: any) => (
                      <td
                        scope="col"
                        className="border px-2 h-8 border-smoke hover:bg-smoke focus-within:bg-smoke"
                        key={cellIndex}
                      >
                        <input
                          type="text"
                          className="h-8 border-smoke focus:outline-none focus-within:bg-smoke bg-transparent"
                          value={cell.formula ? cell.value.result : cell.value}
                          onChange={(e) => {
                            console.log(e.target.value);
                            setExcelData((prev: any) => {
                              prev[sheetCount].rows[rowIndex + 1].cells[
                                cellIndex
                              ].value = e.target.value;
                              return [...prev];
                            });
                            console.log(excelData);
                          }}
                        />
                      </td>
                    ))} */}
                </tr>
              ))}
            </tbody>
          </table>
          <div></div>
        </div>
        <div className="fixed bottom-0 w-screen flex justify-center">
          <div className="py-5 px-8  bg-white shadow-2xl rounded-t-2xl flex gap-2 font-semibold">          {excelData.map((sheet: any, sheetIndex: any) => (
            <button
              key={sheetIndex}
              className="p-2 px-4 bg-smoke hover:bg-smoker rounded-xl"
              onClick={() => setSheetCount(excelData.indexOf(sheet))}

            >
              {sheet.sheetName}
            </button>
          ))}

            <button
              className="p-2 px-4 bg-primary text-white hover:bg-dark rounded-xl"
              onClick={() => {
                downloadExcel(excelData);
              }}
            >
              Download
            </button></div>
        </div>
      </>
    )
  );
}

export default page;
