"use client";
import { useEffect, useState } from "react";

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
    excelData.length > 0 && (
      <>
        {updateModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-x-auto">
            <div className="bg-green-200 w-96 flex flex-col justify-center p-5 mx-12 gap-3">
              <p onClick={() => setUpdateModal(false)}>close</p>
              {excelData[sheetCount]?.rows.map(
                (cell: any, cellIndex: any) => (
                  <input
                    type="text"
                    key={cellIndex}
                    value={excelData[sheetCount]?.rows.indexOf(cell) + 1}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setExcelData((prev: any) => {
                        prev[sheetCount].rows[selectedRow].cells[
                          cellIndex
                        ].value = e.target.value;
                        return [...prev];
                      });
                      console.log(excelData);
                    }}
                  />
                )
              )}
              <p onClick={() => setUpdateModal(false)}>Save</p>
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
              <tr>
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
                        // onChange={}
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
    )
  );
}

export default page;
