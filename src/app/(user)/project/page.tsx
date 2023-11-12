"use client";
import { useState } from "react";
import axios from "axios";

export default function Page() {
    const [file, setFile] = useState<any>(null);
    const [excelData, setExcelData] = useState<any>([
        {
            "sheetName": "Sheet1",
            "rows": [
                {
                    "cells": [
                        {
                            "value": "hakjdsf",
                            "address": "A2",
                            "format": {
                                "font": {
                                    "color": {
                                        "theme": 1
                                    },
                                    "name": "Arial",
                                    "scheme": "minor"
                                },
                                "border": {
                                    "left": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "right": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "bottom": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    }
                                },
                                "fill": {
                                    "type": "pattern",
                                    "pattern": "none"
                                },
                                "alignment": {
                                    "readingOrder": "ltr"
                                }
                            }
                        },
                        {
                            "value": "rewert",
                            "address": "B2",
                            "format": {
                                "font": {
                                    "color": {
                                        "theme": 1
                                    },
                                    "name": "Arial",
                                    "scheme": "minor"
                                },
                                "border": {
                                    "left": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "right": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "bottom": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    }
                                },
                                "fill": {
                                    "type": "pattern",
                                    "pattern": "none"
                                },
                                "alignment": {
                                    "readingOrder": "ltr"
                                }
                            }
                        },
                        {
                            "value": 4,
                            "address": "C2",
                            "format": {
                                "font": {
                                    "color": {
                                        "theme": 1
                                    },
                                    "name": "Arial",
                                    "scheme": "minor"
                                },
                                "border": {
                                    "left": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "right": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "bottom": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    }
                                },
                                "fill": {
                                    "type": "pattern",
                                    "pattern": "none"
                                },
                                "alignment": {
                                    "readingOrder": "ltr"
                                }
                            }
                        }
                    ]
                },
                {
                    "cells": [
                        {
                            "value": "haksdghf",
                            "address": "A3",
                            "format": {
                                "font": {
                                    "color": {
                                        "theme": 1
                                    },
                                    "name": "Arial",
                                    "scheme": "minor"
                                },
                                "border": {
                                    "left": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "right": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "top": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "bottom": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    }
                                },
                                "fill": {
                                    "type": "pattern",
                                    "pattern": "none"
                                },
                                "alignment": {
                                    "readingOrder": "ltr"
                                }
                            }
                        },
                        {
                            "value": "twert",
                            "address": "B3",
                            "format": {
                                "font": {
                                    "color": {
                                        "theme": 1
                                    },
                                    "name": "Arial",
                                    "scheme": "minor"
                                },
                                "border": {
                                    "left": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "right": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "top": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "bottom": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    }
                                },
                                "fill": {
                                    "type": "pattern",
                                    "pattern": "none"
                                },
                                "alignment": {
                                    "readingOrder": "ltr"
                                }
                            }
                        },
                        {
                            "value": 8,
                            "address": "C3",
                            "format": {
                                "font": {
                                    "color": {
                                        "theme": 1
                                    },
                                    "name": "Arial",
                                    "scheme": "minor"
                                },
                                "border": {
                                    "left": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "right": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "top": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "bottom": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    }
                                },
                                "fill": {
                                    "type": "pattern",
                                    "pattern": "solid",
                                    "fgColor": {
                                        "argb": "FFFF0000"
                                    },
                                    "bgColor": {
                                        "argb": "FFFF0000"
                                    }
                                },
                                "alignment": {
                                    "readingOrder": "ltr"
                                }
                            }
                        }
                    ]
                },
                {
                    "cells": [
                        {
                            "value": "dtyyt",
                            "address": "A4",
                            "format": {
                                "font": {
                                    "color": {
                                        "theme": 1
                                    },
                                    "name": "Arial",
                                    "scheme": "minor"
                                },
                                "border": {
                                    "left": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "right": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "top": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "bottom": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    }
                                },
                                "fill": {
                                    "type": "pattern",
                                    "pattern": "none"
                                },
                                "alignment": {
                                    "readingOrder": "ltr"
                                }
                            }
                        },
                        {
                            "value": "wtt",
                            "address": "B4",
                            "format": {
                                "font": {
                                    "color": {
                                        "theme": 1
                                    },
                                    "name": "Arial",
                                    "scheme": "minor"
                                },
                                "border": {
                                    "left": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "right": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "top": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "bottom": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    }
                                },
                                "fill": {
                                    "type": "pattern",
                                    "pattern": "none"
                                },
                                "alignment": {
                                    "readingOrder": "ltr"
                                }
                            }
                        },
                        {
                            "value": 9,
                            "address": "C4",
                            "format": {
                                "font": {
                                    "color": {
                                        "theme": 1
                                    },
                                    "name": "Arial",
                                    "scheme": "minor"
                                },
                                "border": {
                                    "left": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "right": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "top": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "bottom": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    }
                                },
                                "fill": {
                                    "type": "pattern",
                                    "pattern": "solid",
                                    "fgColor": {
                                        "argb": "FFFFFF00"
                                    },
                                    "bgColor": {
                                        "argb": "FFFFFF00"
                                    }
                                },
                                "alignment": {
                                    "readingOrder": "ltr"
                                }
                            }
                        }
                    ]
                },
                {
                    "cells": [
                        {
                            "value": "gttt",
                            "address": "A5",
                            "format": {
                                "font": {
                                    "color": {
                                        "theme": 1
                                    },
                                    "name": "Arial",
                                    "scheme": "minor"
                                },
                                "border": {
                                    "left": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "right": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "top": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "bottom": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    }
                                },
                                "fill": {
                                    "type": "pattern",
                                    "pattern": "none"
                                },
                                "alignment": {
                                    "readingOrder": "ltr"
                                }
                            }
                        },
                        {
                            "value": "wetwt",
                            "address": "B5",
                            "format": {
                                "font": {
                                    "color": {
                                        "theme": 1
                                    },
                                    "name": "Arial",
                                    "scheme": "minor"
                                },
                                "border": {
                                    "left": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "right": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "top": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "bottom": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    }
                                },
                                "fill": {
                                    "type": "pattern",
                                    "pattern": "none"
                                },
                                "alignment": {
                                    "readingOrder": "ltr"
                                }
                            }
                        },
                        {
                            "value": {
                                "formula": "RANDBETWEEN(0,9)",
                                "result": 6
                            },
                            "formula": "RANDBETWEEN(0,9)",
                            "address": "C5",
                            "format": {
                                "font": {
                                    "color": {
                                        "theme": 1
                                    },
                                    "name": "Arial",
                                    "scheme": "minor"
                                },
                                "border": {
                                    "left": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "right": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "top": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    },
                                    "bottom": {
                                        "style": "thin",
                                        "color": {
                                            "argb": "FF000000"
                                        }
                                    }
                                },
                                "fill": {
                                    "type": "pattern",
                                    "pattern": "none"
                                }
                            }
                        }
                    ]
                }
            ],
            "headers": [
                "name",
                "institution",
                "grade"
            ]
        }
    ]);

    const submitForm = (e: any) => {
        e.preventDefault();
        console.log(file);

        const formData = new FormData();
        formData.append("file", file);
        axios.post("http://localhost:3000/api/excel/read", formData, {
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

