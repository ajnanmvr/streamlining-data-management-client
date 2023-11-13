// pages/api/excel/download.ts
// url: http://localhost:3000/api/excel/read

import { NextApiRequest, NextApiResponse } from "next";
import ExcelJS from "exceljs";
import { Readable } from "stream";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body.data);
  const excelData: any = req.body.data;

  var downloadableData: any = [];
  excelData.map((sheet: any, index: number) => {
    console.log(index);
    downloadableData.push({
      sheetName: "",
      rows: [],
    });

    downloadableData[index].sheetName = sheet.sheetName;
    sheet.rows.map((row: any) => {
      row.cells.map((cell: any) => {
        const format = cell.format;
        var convertedData = {
          value: cell.value,
          address: cell.address,
          format: {
            font: format.font,
            fill: format.fill,
          },
          formula: cell.formula,
        };
        downloadableData[index].rows.push(convertedData);
      });
    });
    sheet.headers.map((header: any, i: number) => {
      const format = header.format;
      var convertedData = {
        value: header.value,
        address: header.address,
        format: {
          font: format.font,
          fill: format.fill,
        },
        formula: header.formula,
      };
      downloadableData[index].rows.push(convertedData);
    });
  });

  try {
    // Create a new workbook
    const workbook = new ExcelJS.Workbook();
    downloadableData.map(async (data: any, index: number) => {
      const worksheet = workbook.addWorksheet(data.sheetName);
      data.rows.map((cell: any, index: number) => {
        var address = worksheet.getCell(cell.address);
        var format = cell.format;
        address.value = cell.value;
        address.style = { font: format.font, fill: format.fill };
      });
    });

    // Generate the Excel file
    const buffer = await workbook.xlsx.writeBuffer();

    // Create a stream to generate the Excel file
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);

    // Set the response headers to indicate an Excel file download
    res.setHeader("Content-Disposition", 'attachment; filename="data.xlsx"');
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    // Pipe the stream to the response
    stream.pipe(res);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Failed to generate Excel file." });
  }
};
