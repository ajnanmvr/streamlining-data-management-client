"use client"
import Axios from '@/utils/Axios';
import React, { useEffect, useState } from 'react'

interface Props{
    id : string
}

const View = (props:Props) => {
    const [project , setProject ] = useState<any>()
    useEffect(() => {
        const userId = props.id;
        Axios.get(`/projects/${userId}`)
          .then((res) => {
            setProject(res.data);
            console.log(res.data);
            
          })
          .catch((err) => {
            console.log(err);
          });
    
      }, []);

    

  return (
    <main className="font-sans h-screen overflow-hidden flex bg-accent">
        {
            props.id

            
        }
        {
          project?.name
        }
    </main>
  );
}

export default View
