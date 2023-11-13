"use client";
import { useEffect, useState } from "react";

function page() {
  const [excelData, setExcelData] = useState<any>([]);

  function fetchExcelData() {
    const data = localStorage.getItem("encodedData");
    if (data) {
      setExcelData(JSON.parse(atob(data)));
    }
  }
  useEffect(() => {
    const data = localStorage.getItem("encodedData");
    if (data) {
      setExcelData(JSON.parse(atob(data)));
    }
    console.log(excelData);
  }, [excelData]);
  const index = 0;

  return (
    <>
      <div className="flex w-[92vw] mt-10 mx-auto overflow-auto h-[69vh] relative">
        <div className="sticky left-0 bg-white cursor-pointer">
          <p className="border-2 px-2 py-1 h-8 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary rounded-tl-xl">
            &nbsp;
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
          <p className="border-2 px-2 py-1 h-10 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
            b
          </p>
        </div>

        <table className="min-w-full">
          <thead className="cursor-pointer">
            <tr>
              <td className="border-2 px-2 h-8 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
                header
              </td>
              <td className="border-2 px-2 h-8 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
                header
              </td>
              <td className="border-2 px-2 h-8 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
                header
              </td>
              <td className="border-2 px-2 h-8 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
                header
              </td>
              <td className="border-2 px-2 h-8 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
                header
              </td>
              <td className="border-2 px-2 h-8 hover:bg-dark bg-primary font-semibold text-white capitalize border-primary">
                header
              </td>
            </tr>
          </thead>
          <tbody className="cursor-cell">
            <tr>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
            </tr>
            <tr>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
            </tr>
            <tr>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
            </tr>
            <tr>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
            </tr>
            <tr>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
            </tr>
            <tr>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
            </tr>
            <tr>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
            </tr>
            <tr>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
            </tr>
            <tr>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
            </tr>
            <tr>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
            </tr>
            <tr>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
            </tr>
            <tr>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
            </tr>
            <tr>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
            </tr>
            <tr>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
            </tr>
            <tr>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
            </tr>
            <tr>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
            </tr>
            <tr>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
            </tr>
            <tr>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
            </tr>
            <tr>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
              <td
                scope="col"
                className="border px-2 py-1 h-10 border-smoke hover:bg-smoke "
              >
                value
              </td>
            </tr>
          </tbody>
        </table>
        <div></div>
      </div>
      <div className="flex w-[92vw] mx-auto overflow-auto gap-1">
        <button className="border-2 border-t-0 border-primary text-[15px] font-semibold rounded-b-xl text-white bg-primary px-3 pt-1 pb-2">
          Sheet 1
        </button>
        <button className="hover:text-light hover:bg-smoke border-2 border-t-0 border-primary hover:border-light text-[15px] font-semibold rounded-b-xl text-primary px-3 pt-1 pb-2">
          Sheet 2
        </button>
      </div>
    </>
  );
}

export default page;
