// pages/api/read.ts
// url= http://localhost:3000/api/excel/read

import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs/promises';
import ExcelJS from 'exceljs';

async function readExcel(filePath:any) {

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);

  const result:any = [];

  workbook.eachSheet((worksheet, sheetId) => {
    const sheetData = {
      sheetName: worksheet.name,
      rows: [],
    };

    worksheet.eachRow((row, rowNumber) => {
      const rowData = {
        cells: [],
      };

      row.eachCell((cell, colNumber) => {
        console.log(cell.$col$row);
        
        const cellData = {
          value: cell.value,
          formula: cell.formula,
          address: cell.address,
          format: cell.style,
          hyperlink: cell.hyperlink,
        };

        rowData.cells.push(cellData as never);
      });

      sheetData.rows.push(rowData as never);
    });

    result.push(sheetData);
  });

  return result;
}


export const config = {
  api: {
    bodyParser: false,
  },
};


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error parsing form:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const filePath = (files?.files as any)[0].filepath;
    console.log(files);
    

    try {
      const excelData = await readExcel(filePath);
      res.status(200).json({ data: excelData });
    } catch (error) {
      console.error('Error reading Excel:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      // Cleanup: Delete the temporary uploaded file
      await fs.unlink(filePath);
    }
  });

}