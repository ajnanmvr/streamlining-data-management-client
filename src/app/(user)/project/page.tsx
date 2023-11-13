"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
var firebasedb = require("firebase/database");
import { app } from "../../../utils/firbase/config";

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

  const submitForm = (e: any) => {
    e.preventDefault();
    console.log(file);

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
      });
  };

  function setToLocalStorage(data: any) {
    localStorage.setItem("encodedData", btoa(JSON.stringify(data)));
  }

  useEffect(() => {
    var db = firebasedb.getDatabase(app);
    var ref = firebasedb.ref(db, "current");

    var al = {
      "/word": [
        {
          sheetName: "sheet1",
          rows: [
            {
              cells: [],
            },
            {
              cells: [
                {
                  value: "hakjdsf",
                  address: "A2",
                  format: {
                    font: {
                      size: 11,
                      color: {
                        theme: 1,
                      },
                      name: "Calibri",
                      scheme: "minor",
                    },
                    border: {},
                    fill: {
                      type: "pattern",
                      pattern: "none",
                    },
                  },
                },
                {
                  value: "rewert",
                  address: "B2",
                  format: {
                    font: {
                      size: 11,
                      color: {
                        theme: 1,
                      },
                      name: "Calibri",
                      scheme: "minor",
                    },
                    border: {},
                    fill: {
                      type: "pattern",
                      pattern: "none",
                    },
                  },
                },
                {
                  value: 4,
                  address: "C2",
                  format: {
                    font: {
                      size: 11,
                      color: {
                        theme: 1,
                      },
                      name: "Calibri",
                      scheme: "minor",
                    },
                    border: {},
                    fill: {
                      type: "pattern",
                      pattern: "none",
                    },
                  },
                },
                {
                  value: "e",
                  address: "D2",
                  format: {},
                },
              ],
            },
            {
              cells: [
                {
                  value: "haksdghf",
                  address: "A3",
                  format: {
                    font: {
                      size: 11,
                      color: {
                        theme: 1,
                      },
                      name: "Calibri",
                      scheme: "minor",
                    },
                    border: {},
                    fill: {
                      type: "pattern",
                      pattern: "none",
                    },
                  },
                },
                {
                  value: "twert",
                  address: "B3",
                  format: {
                    font: {
                      size: 11,
                      color: {
                        theme: 1,
                      },
                      name: "Calibri",
                      scheme: "minor",
                    },
                    border: {},
                    fill: {
                      type: "pattern",
                      pattern: "none",
                    },
                  },
                },
                {
                  value: 8,
                  address: "C3",
                  format: {
                    font: {
                      size: 11,
                      color: {
                        theme: 1,
                      },
                      name: "Calibri",
                      scheme: "minor",
                    },
                    border: {},
                    fill: {
                      type: "pattern",
                      pattern: "solid",
                      fgColor: {
                        argb: "FFFF0000",
                      },
                      bgColor: {
                        argb: "FFFF0000",
                      },
                    },
                  },
                },
                {
                  value: "e",
                  address: "D3",
                  format: {},
                },
              ],
            },
            {
              cells: [
                {
                  value: "dtyyt",
                  address: "A4",
                  format: {
                    font: {
                      size: 11,
                      color: {
                        theme: 1,
                      },
                      name: "Calibri",
                      scheme: "minor",
                    },
                    border: {},
                    fill: {
                      type: "pattern",
                      pattern: "none",
                    },
                  },
                },
                {
                  value: "wtt",
                  address: "B4",
                  format: {
                    font: {
                      size: 11,
                      color: {
                        theme: 1,
                      },
                      name: "Calibri",
                      scheme: "minor",
                    },
                    border: {},
                    fill: {
                      type: "pattern",
                      pattern: "none",
                    },
                  },
                },
                {
                  value: 9,
                  address: "C4",
                  format: {
                    font: {
                      size: 11,
                      color: {
                        theme: 1,
                      },
                      name: "Calibri",
                      scheme: "minor",
                    },
                    border: {},
                    fill: {
                      type: "pattern",
                      pattern: "solid",
                      fgColor: {
                        argb: "FFFFFF00",
                      },
                      bgColor: {
                        argb: "FFFFFF00",
                      },
                    },
                  },
                },
                {
                  value: "w",
                  address: "D4",
                  format: {},
                },
              ],
            },
            {
              cells: [
                {
                  value: "gttt",
                  address: "A5",
                  format: {
                    font: {
                      size: 11,
                      color: {
                        theme: 1,
                      },
                      name: "Calibri",
                      scheme: "minor",
                    },
                    border: {},
                    fill: {
                      type: "pattern",
                      pattern: "none",
                    },
                  },
                },
                {
                  value: "wetwt",
                  address: "B5",
                  format: {
                    font: {
                      size: 11,
                      color: {
                        theme: 1,
                      },
                      name: "Calibri",
                      scheme: "minor",
                    },
                    border: {},
                    fill: {
                      type: "pattern",
                      pattern: "none",
                    },
                  },
                },
                {
                  value: {
                    formula: "RANDBETWEEN(0,9)",
                    result: 2,
                  },
                  formula: "RANDBETWEEN(0,9)",
                  address: "C5",
                  format: {
                    font: {
                      size: 11,
                      color: {
                        theme: 1,
                      },
                      name: "Calibri",
                      scheme: "minor",
                    },
                    border: {},
                    fill: {
                      type: "pattern",
                      pattern: "none",
                    },
                  },
                },
                {
                  value: "ew",
                  address: "D5",
                  format: {},
                },
              ],
            },
          ],
          headers: [
            {
              value: "name",
              address: "A1",
              format: {
                font: {
                  size: 11,
                  color: {
                    theme: 1,
                  },
                  name: "Calibri",
                  scheme: "minor",
                },
                border: {},
                fill: {
                  type: "pattern",
                  pattern: "none",
                },
              },
            },
            {
              value: "institution",
              address: "B1",
              format: {
                font: {
                  bold: true,
                  size: 11,
                  color: {
                    theme: 1,
                  },
                  name: "Calibri",
                  scheme: "minor",
                },
                border: {},
                fill: {
                  type: "pattern",
                  pattern: "none",
                },
              },
            },
            {
              value: "grade",
              address: "C1",
              format: {
                font: {
                  italic: true,
                  size: 11,
                  color: {
                    theme: 1,
                  },
                  name: "Calibri",
                  scheme: "minor",
                },
                border: {},
                fill: {
                  type: "pattern",
                  pattern: "none",
                },
              },
            },
            {
              value: "شسيب",
              address: "D1",
              format: {},
            },
          ],
        },
        {
          sheetName: "Sheet2",
          rows: [
            {
              cells: [],
            },
            {
              cells: [
                {
                  value: "akjfa",
                  address: "A2",
                  format: {},
                },
                {
                  value: 3,
                  address: "B2",
                  format: {},
                },
              ],
            },
            {
              cells: [
                {
                  value: "ae",
                  address: "A3",
                  format: {},
                },
                {
                  value: 4,
                  address: "B3",
                  format: {},
                },
              ],
            },
            {
              cells: [
                {
                  value: "oeprja",
                  address: "A4",
                  format: {},
                },
                {
                  value: 2,
                  address: "B4",
                  format: {},
                },
              ],
            },
          ],
          headers: [
            {
              value: "name",
              address: "A1",
              format: {
                font: {
                  size: 11,
                  color: {
                    argb: "FFFF0000",
                  },
                  name: "Calibri",
                  family: 2,
                  scheme: "minor",
                },
                border: {},
                fill: {
                  type: "pattern",
                  pattern: "none",
                },
              },
            },
            {
              value: "age",
              address: "B1",
              format: {
                font: {
                  size: 11,
                  color: {
                    argb: "FFFF0000",
                  },
                  name: "Calibri",
                  family: 2,
                  scheme: "minor",
                },
                border: {},
                fill: {
                  type: "pattern",
                  pattern: "none",
                },
              },
            },
          ],
        },
      ],
    };

    firebasedb.update(firebasedb.ref(db), al);
    firebasedb.onValue(firebasedb.ref(db), (snapshot: any) => {
      const data = snapshot.val();
      console.log(data);  
    });
  }, []);

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
          // download={true}
          className="mt-3 text-primary px-3 border border-white rounded-xl py-1 hover:border-primary ml-2"
        >
          Download Demo File
        </a>
      </form>
      {excelData.length > 0 ? (
        <>
          <Link
            href="/project/edit"
            onClick={() => setToLocalStorage(excelData)}
          >
            Go to edit page
          </Link>
          {excelData.slice(0, 3).map((sheet: any, sheetIndex: any) => (
            <div className=" flex flex-col items-center" key={sheetIndex}>
              <hr className="border-2 border-dashed w-full border-primary mt-20 -mb-7" />
              <h2 className="p-3 bg-primary  rounded-xl w-48 text-white text-lg font-semibold text-center">
                {sheet.sheetName}
              </h2>
              <table className="table mt-10 rounded-xl overflow-hidden min-w-[80%] max-w-[90%] max-h-[70vh]">
                <thead>
                  <tr className="border-2 border-smoke">
                    {sheet.headers
                      .slice(0, 3)
                      .map((header: any, rowIndex: any) => (
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
                  {sheet.rows.slice(0, 3).map((row: any, rowIndex: any) => (
                  {sheet.rows.slice(0,4).map((row: any, rowIndex: any) => (
                    <tr className="border border-smoke" key={rowIndex}>
                      {row.cells
                        .slice(0, 3)
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
                </tbody>
              </table>
            </div>
          ))}
        </>
      )
      : 'Loading...'
    }
    </div>
  );
}
