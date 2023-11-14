"use client";

import Axios from "@/utils/Axios";
import { useEffect, useState } from "react";

export default function Organization() {

    const [users , setUsers] = useState<any>([])

    useEffect(() => {
        // const userId = user?.id;
        Axios.get(`/users/`)
          .then((res) => {
            setUsers(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
    },[]
    )

    return (
        <div className="px-16 flex justify-center flex-wrap lg:flex-nowrap gap-10">
           Organazatoin
        </div>
    )
}