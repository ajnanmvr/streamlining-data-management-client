"use client";
import { useEffect, useState } from "react";

function page() {
  const [excelData, setExcelData] = useState<any>([]);
  const [sheetCount, setSheetCount] = useState<number>(0);
  const [body, setBody] = useState<any>("");
  const sheetButtonStyles = {
    1: "hover:text-light hover:bg-smoke border-2 border-t-0 border-primary hover:border-light text-[15px] font-semibold rounded-b-xl text-primary px-3 pt-1 pb-2",
    2: "border-2 border-t-0 border-primary text-[15px] font-semibold rounded-b-xl text-white bg-primary px-3 pt-1 pb-2",
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
    <>
      <div className="flex w-[92vw] mt-10 mx-auto overflow-auto h-[69vh] relative">
        <div className="sticky left-0 bg-white cursor-pointer">
          <p className="border-2 px-2 py-1 h-8 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary rounded-tl-xl">
            &nbsp;
          </p>
          {excelData[sheetCount]?.rows.map((row: any, rowIndex: any) => (
            <p
              className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary"
              key={rowIndex}
            >
              {excelData[sheetCount]?.rows.indexOf(row) + 1}
            </p>
          ))}
        </div>
        <table className="min-w-full">
          <thead className="cursor-pointer">
            <tr>
              {excelData[sheetCount]?.headers.map(
                (header: any, headerIndex: any) => (
                  <td className="border-2 px-2 h-8 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
                    {header.address.slice(0, -1)}
                  </td>
                )
              )}
            </tr>
          </thead>
          <tbody className="cursor-cell">
            <tr>
              {excelData[sheetCount]?.headers.map(
                (header: any, headerIndex: any) => (
                  <td
                    scope="col"
                    className="border px-2 py-1 h-10 border-smoke hover:bg-smoke focus-within:bg-smoke"
                    key={headerIndex}
                  >
                    <input
                      type="text"
                      className="h-10 border-smoke focus:outline-none focus-within:bg-smoke font-bold bg-transparent"
                      defaultValue={header.value}
                    />
                  </td>
                )
              )}
            </tr>
            {excelData[sheetCount]?.rows
              .slice(1)
              .map((row: any, rowIndex: any) => (
                <tr>
                  {row.cells.map((cell: any, cellIndex: any) => (
                    <td
                      scope="col"
                      className="border px-2 py-1 h-10 border-smoke hover:bg-smoke focus-within:bg-smoke"
                      key={cellIndex}
                    >
                      <input
                        type="text"
                        className="h-10 border-smoke focus:outline-none focus-within:bg-smoke bg-transparent"
                        defaultValue={
                          cell.formula ? cell.value.result : cell.value
                        }
                        onChange={(e) => {
                          console.log(
                            cell.formula ? cell.value.result : cell.value
                          );
                          console.log(e.target.value);
                          setExcelData((prev: any) => {
                            prev[sheetCount].rows[rowIndex + 1].cells[
                              cellIndex
                            ].value = e.target.value;
                            return prev;
                          });
                          console.log(excelData);
                        }}
                      />
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
        <div></div>
      </div>
      <div className="flex w-[92vw] mx-auto overflow-auto gap-1">
        {/* <button className={""}>Sheet 1</button> */}
        {excelData.map((sheet: any, sheetIndex: any) => (
          <button
            key={sheetIndex}
            onClick={() => setSheetCount(excelData.indexOf(sheet))}
            className={
              excelData.indexOf(sheet) == sheetCount
                ? `${sheetButtonStyles[2]}`
                : `${sheetButtonStyles[1]}`
            }
          >
            {sheet.sheetName}
          </button>
        ))}
      </div>
    </>
  );
}

export default page;
