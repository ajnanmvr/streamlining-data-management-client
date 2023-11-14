"use client";
import { useEffect, useState } from "react";

function page() {
  const [excelData, setExcelData] = useState<any>([]);
  const [sheetCount, setSheetCount] = useState<number>(0);
  const [selectedRow, setSelectedRow] = useState<any>(0);
  const [updateModal, setUpdateModal] = useState<boolean>(false);
  const [updateHeaderModal, setUpdateHeaderModal] = useState<boolean>(false);
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

  return (
    excelData.length > 0 && (
      <>
        {updateModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-x-auto">
            <div className="bg-green-200 w-96 flex flex-col justify-center p-5 mx-12 gap-3">
              <p onClick={() => setUpdateModal(false)}>close</p>
              {excelData[sheetCount]?.rows[selectedRow]?.cells.map(
                (cell: any, cellIndex: any) => (
                  <input
                    type="text"
                    key={cellIndex}
                    value={cell.formula ? cell.value.result : cell.value}
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
        <div className="flex w-[92vw] mt-10 mx-auto overflow-auto max-h-[69vh] relative">
          <div className="sticky left-0 bg-white cursor-pointer">
            <p className="border-2 px-2 py-1 h-8 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary rounded-tl-xl">
              &nbsp;
            </p>

            {excelData[sheetCount]?.rows.map((row: any, rowIndex: any) => (
              <p
                className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary"
                key={rowIndex}
                onClick={() => {
                  setExcelData((prev: any) => {
                    const updatedRows = prev[sheetCount].rows.filter(
                      (_: any, index: any) => index !== rowIndex
                    );
                    const updatedSheet = {
                      ...prev[sheetCount],
                      rows: updatedRows,
                    };
                    const updatedExcelData = [...prev];
                    updatedExcelData[sheetCount] = updatedSheet;

                    return updatedExcelData;
                  });
                }}
              >
                X{" "}
              </p>
            ))}
          </div>
          <div className="sticky left-0 bg-white cursor-pointer">
            <p className="border-2 px-2 py-1 h-8 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary ">
              &nbsp;
            </p>

            {excelData[sheetCount]?.rows.map((row: any, rowIndex: any) => (
              <p
                className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary"
                key={rowIndex}
                onClick={() => {
                  setSelectedRow(excelData[sheetCount]?.rows.indexOf(row)),
                    setUpdateModal(true);
                }}
              >
                {excelData[sheetCount]?.rows.indexOf(row) + 1}
              </p>
            ))}
          </div>
          <div className="sticky left-0 bg-white cursor-pointer">
            <p className="border-2 px-2 py-1 h-8 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
              &nbsp;
            </p>

            {excelData[sheetCount]?.rows.map((row: any, rowIndex: any) => (
              <p
                className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary"
                key={rowIndex}
                onClick={() => {
                  setExcelData((prev: any) => {
                    const updatedRows = [...prev[sheetCount].rows];
                    updatedRows.splice(
                      rowIndex + 1,
                      0,
                      // Add only one empty row
                      {
                        cells: prev[sheetCount].rows[0].cells.map(
                          (cell: any, cellIndex: any) => ({
                            address: cell.address,
                            value: "",
                            formula: "",
                            format: {
                              font: {
                                color: {
                                  theme: 1,
                                },
                                name: "Arial",
                                scheme: "minor",
                              },
                              border: {
                                left: {
                                  style: "thick",
                                  color: {
                                    argb: "FF000000",
                                  },
                                },
                                right: {
                                  style: "thick",
                                  color: {
                                    argb: "FF000000",
                                  },
                                },
                                top: {
                                  style: "thick",
                                  color: {
                                    argb: "FF000000",
                                  },
                                },
                                bottom: {
                                  style: "thick",
                                  color: {
                                    argb: "FF000000",
                                  },
                                },
                              },
                              fill: {
                                type: "pattern",
                                pattern: "none",
                              },
                              alignment: {
                                readingOrder: "ltr",
                              },
                            },
                          })
                        ),
                      }
                    );
                    const updatedSheet = {
                      ...prev[sheetCount],
                      rows: updatedRows,
                    };
                    const updatedExcelData = [...prev];
                    updatedExcelData[sheetCount] = updatedSheet;

                    console.log(updatedExcelData);
                    return updatedExcelData;
                  });
                }}
              >
                +
              </p>
            ))}
          </div>
          <table className="min-w-full">
            <thead className="cursor-pointer">
              <tr>
                {excelData[sheetCount]?.rows[0].cells.map(
                  (cell: any, cellIndex: any) => (
                    <td className="border-2 px-2 h-8 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
                      {cell.address.slice(0, -1)}
                    </td>
                  )
                )}
              </tr>
            </thead>
            <tbody className="cursor-cell">
              {excelData[sheetCount]?.rows.map((row: any, rowIndex: any) => (
                <tr>
                  {row.cells.map((cell: any, cellIndex: any) => (
                    <td
                      scope="col"
                      className="border px-2 py-1 h-10 border-smoke hover:bg-smoke focus-within:bg-smoke"
                      key={cellIndex}
                    >
                      <input
                        type="text"
                        className="h-10 border-smoke focus:outline-none focus-within:bg-smoke bg-transparent w-full"
                        value={cell.formula ? cell.value.result : cell.value}
                        onChange={(e) => {
                          console.log(e.target.value);
                          setExcelData((prev: any) => {
                            prev[sheetCount].rows[rowIndex].cells[
                              cellIndex
                            ].value = e.target.value;
                            return [...prev];
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
          <button
            className="bg-primary rounded-lg text-white p-2"
            onClick={() => {
              downloadExcelFile(excelData);
            }}
          >
            Download excel file
          </button>
        </div>
      </>
    )
  );
}

export default page;
