//Loading Firebase Package
// var firebase = require("firebase/app");
// var firebasedb = require("firebase/database");
import * as firebasedb from "firebase/database";
import { app } from "./config";

/**
 * Update your Firebase Project
 * Credentials and Firebase Database
 * URL
 */

/**
 * Loading Firebase Database and refering
 * to user_data Object from the Database
 */

var db = firebasedb.getDatabase(app);
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


// var firebasedb = require("firebase/database");
// import { app } from "../../../utils/firbase/config";


// useEffect(() => {
//     var db = firebasedb.getDatabase(app);
//     var ref = firebasedb.ref(db, "current");

//     var al = {
//       "/word": [
//         {
//           sheetName: "sheet1",
//           rows: [
//             {
//               cells: [],
//             },
//             {
//               cells: [
//                 {
//                   value: "hakjdsf",
//                   address: "A2",
//                   format: {
//                     font: {
//                       size: 11,
//                       color: {
//                         theme: 1,
//                       },
//                       name: "Calibri",
//                       scheme: "minor",
//                     },
//                     border: {},
//                     fill: {
//                       type: "pattern",
//                       pattern: "none",
//                     },
//                   },
//                 },
//                 {
//                   value: "rewert",
//                   address: "B2",
//                   format: {
//                     font: {
//                       size: 11,
//                       color: {
//                         theme: 1,
//                       },
//                       name: "Calibri",
//                       scheme: "minor",
//                     },
//                     border: {},
//                     fill: {
//                       type: "pattern",
//                       pattern: "none",
//                     },
//                   },
//                 },
//                 {
//                   value: 4,
//                   address: "C2",
//                   format: {
//                     font: {
//                       size: 11,
//                       color: {
//                         theme: 1,
//                       },
//                       name: "Calibri",
//                       scheme: "minor",
//                     },
//                     border: {},
//                     fill: {
//                       type: "pattern",
//                       pattern: "none",
//                     },
//                   },
//                 },
//                 {
//                   value: "e",
//                   address: "D2",
//                   format: {},
//                 },
//               ],
//             },
//             {
//               cells: [
//                 {
//                   value: "haksdghf",
//                   address: "A3",
//                   format: {
//                     font: {
//                       size: 11,
//                       color: {
//                         theme: 1,
//                       },
//                       name: "Calibri",
//                       scheme: "minor",
//                     },
//                     border: {},
//                     fill: {
//                       type: "pattern",
//                       pattern: "none",
//                     },
//                   },
//                 },
//                 {
//                   value: "twert",
//                   address: "B3",
//                   format: {
//                     font: {
//                       size: 11,
//                       color: {
//                         theme: 1,
//                       },
//                       name: "Calibri",
//                       scheme: "minor",
//                     },
//                     border: {},
//                     fill: {
//                       type: "pattern",
//                       pattern: "none",
//                     },
//                   },
//                 },
//                 {
//                   value: 8,
//                   address: "C3",
//                   format: {
//                     font: {
//                       size: 11,
//                       color: {
//                         theme: 1,
//                       },
//                       name: "Calibri",
//                       scheme: "minor",
//                     },
//                     border: {},
//                     fill: {
//                       type: "pattern",
//                       pattern: "solid",
//                       fgColor: {
//                         argb: "FFFF0000",
//                       },
//                       bgColor: {
//                         argb: "FFFF0000",
//                       },
//                     },
//                   },
//                 },
//                 {
//                   value: "e",
//                   address: "D3",
//                   format: {},
//                 },
//               ],
//             },
//             {
//               cells: [
//                 {
//                   value: "dtyyt",
//                   address: "A4",
//                   format: {
//                     font: {
//                       size: 11,
//                       color: {
//                         theme: 1,
//                       },
//                       name: "Calibri",
//                       scheme: "minor",
//                     },
//                     border: {},
//                     fill: {
//                       type: "pattern",
//                       pattern: "none",
//                     },
//                   },
//                 },
//                 {
//                   value: "wtt",
//                   address: "B4",
//                   format: {
//                     font: {
//                       size: 11,
//                       color: {
//                         theme: 1,
//                       },
//                       name: "Calibri",
//                       scheme: "minor",
//                     },
//                     border: {},
//                     fill: {
//                       type: "pattern",
//                       pattern: "none",
//                     },
//                   },
//                 },
//                 {
//                   value: 9,
//                   address: "C4",
//                   format: {
//                     font: {
//                       size: 11,
//                       color: {
//                         theme: 1,
//                       },
//                       name: "Calibri",
//                       scheme: "minor",
//                     },
//                     border: {},
//                     fill: {
//                       type: "pattern",
//                       pattern: "solid",
//                       fgColor: {
//                         argb: "FFFFFF00",
//                       },
//                       bgColor: {
//                         argb: "FFFFFF00",
//                       },
//                     },
//                   },
//                 },
//                 {
//                   value: "w",
//                   address: "D4",
//                   format: {},
//                 },
//               ],
//             },
//             {
//               cells: [
//                 {
//                   value: "gttt",
//                   address: "A5",
//                   format: {
//                     font: {
//                       size: 11,
//                       color: {
//                         theme: 1,
//                       },
//                       name: "Calibri",
//                       scheme: "minor",
//                     },
//                     border: {},
//                     fill: {
//                       type: "pattern",
//                       pattern: "none",
//                     },
//                   },
//                 },
//                 {
//                   value: "wetwt",
//                   address: "B5",
//                   format: {
//                     font: {
//                       size: 11,
//                       color: {
//                         theme: 1,
//                       },
//                       name: "Calibri",
//                       scheme: "minor",
//                     },
//                     border: {},
//                     fill: {
//                       type: "pattern",
//                       pattern: "none",
//                     },
//                   },
//                 },
//                 {
//                   value: {
//                     formula: "RANDBETWEEN(0,9)",
//                     result: 2,
//                   },
//                   formula: "RANDBETWEEN(0,9)",
//                   address: "C5",
//                   format: {
//                     font: {
//                       size: 11,
//                       color: {
//                         theme: 1,
//                       },
//                       name: "Calibri",
//                       scheme: "minor",
//                     },
//                     border: {},
//                     fill: {
//                       type: "pattern",
//                       pattern: "none",
//                     },
//                   },
//                 },
//                 {
//                   value: "ew",
//                   address: "D5",
//                   format: {},
//                 },
//               ],
//             },
//           ],
//           headers: [
//             {
//               value: "name",
//               address: "A1",
//               format: {
//                 font: {
//                   size: 11,
//                   color: {
//                     theme: 1,
//                   },
//                   name: "Calibri",
//                   scheme: "minor",
//                 },
//                 border: {},
//                 fill: {
//                   type: "pattern",
//                   pattern: "none",
//                 },
//               },
//             },
//             {
//               value: "institution",
//               address: "B1",
//               format: {
//                 font: {
//                   bold: true,
//                   size: 11,
//                   color: {
//                     theme: 1,
//                   },
//                   name: "Calibri",
//                   scheme: "minor",
//                 },
//                 border: {},
//                 fill: {
//                   type: "pattern",
//                   pattern: "none",
//                 },
//               },
//             },
//             {
//               value: "grade",
//               address: "C1",
//               format: {
//                 font: {
//                   italic: true,
//                   size: 11,
//                   color: {
//                     theme: 1,
//                   },
//                   name: "Calibri",
//                   scheme: "minor",
//                 },
//                 border: {},
//                 fill: {
//                   type: "pattern",
//                   pattern: "none",
//                 },
//               },
//             },
//             {
//               value: "شسيب",
//               address: "D1",
//               format: {},
//             },
//           ],
//         },
//         {
//           sheetName: "Sheet2",
//           rows: [
//             {
//               cells: [],
//             },
//             {
//               cells: [
//                 {
//                   value: "akjfa",
//                   address: "A2",
//                   format: {},
//                 },
//                 {
//                   value: 3,
//                   address: "B2",
//                   format: {},
//                 },
//               ],
//             },
//             {
//               cells: [
//                 {
//                   value: "ae",
//                   address: "A3",
//                   format: {},
//                 },
//                 {
//                   value: 4,
//                   address: "B3",
//                   format: {},
//                 },
//               ],
//             },
//             {
//               cells: [
//                 {
//                   value: "oeprja",
//                   address: "A4",
//                   format: {},
//                 },
//                 {
//                   value: 2,
//                   address: "B4",
//                   format: {},
//                 },
//               ],
//             },
//           ],
//           headers: [
//             {
//               value: "name",
//               address: "A1",
//               format: {
//                 font: {
//                   size: 11,
//                   color: {
//                     argb: "FFFF0000",
//                   },
//                   name: "Calibri",
//                   family: 2,
//                   scheme: "minor",
//                 },
//                 border: {},
//                 fill: {
//                   type: "pattern",
//                   pattern: "none",
//                 },
//               },
//             },
//             {
//               value: "age",
//               address: "B1",
//               format: {
//                 font: {
//                   size: 11,
//                   color: {
//                     argb: "FFFF0000",
//                   },
//                   name: "Calibri",
//                   family: 2,
//                   scheme: "minor",
//                 },
//                 border: {},
//                 fill: {
//                   type: "pattern",
//                   pattern: "none",
//                 },
//               },
//             },
//           ],
//         },
//       ],
//     };

//     firebasedb.update(firebasedb.ref(db), al);
//     firebasedb.onValue(firebasedb.ref(db), (snapshot: any) => {
//       const data = snapshot.val();
//       console.log(data);  
//     });
//   }, []);
