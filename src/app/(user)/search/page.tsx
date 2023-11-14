"use client";

import Axios from "@/utils/Axios";
import { useEffect, useState } from "react";

export default function Organization() {

    const [users , setUsers] = useState<any>([])
    const [allUsers , setAllUsers] = useState<any>([])
    const [search , setSearch] = useState<any>([])

    useEffect(() => {
        // const userId = user?.id;
        Axios.get(`/users/`)
          .then((res) => {
            setUsers(res.data);
            setAllUsers(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
    },[]
    )

    return (
        <div className="px-16 flex flex-col justify-center flex-wrap lg:flex-nowrap gap-10">
            <input
                type="text"
                placeholder={`Find your desired one here`}
                className="rounded-lg border-2 border-gray-900  border-dashed px-3 py-2 w-full mx-auto transition-transform duration-300 transform hover:scale-[101%]"
                onChange={(e) => {
                    setSearch(e.target.value);
                    setUsers(allUsers.filter((user:any) => user.username.includes(e.target.value) || user.FirstName.includes(e.target.value) || user.LastName.includes(e.target.value)));
                }}
            />
            <div className="flex justify-center  flex-wrap gap-2 cursor-pointer">

              {
                users.map((user:any) => (
                    <div  className=" bg-smoke hover:bg-smoker p-10 rounded-xl flex justify-center flex-col items-center w-64">
                    <div>
                        <img className="h-24" src="/avatar.png" alt="avatar" />
                    </div>
                    <p className="font-bold text-2xl text-center my-1 text-primary leading-[23px]">
                        {user.FirstName}  {user.LastName}
                    </p>
                    <p className="text-center">{user.username}</p>
                </div>
                
                ))
                
              }
              
            </div>
        </div>
    )
}