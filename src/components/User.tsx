"use client"
import Axios from '@/utils/Axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Card from './Card';
import Link from 'next/link';

interface Props {
    id : any
}

const User = (props : Props) => {
    const [profileUser, setProfileUser] = useState<any>();
    const router = useRouter();
    const [projects, setProjects] = useState<any>();

    useEffect(() => {
        const userId = props.id;
        Axios.get(`/users/${userId}`)
          .then((res) => {
            setProfileUser(res.data);
            console.log(res.data);
          //   set all pubil projects
            setProjects(res.data?.projects.filter((project: any) => project.isPublic));
          })
          .catch((err) => {
            console.log(err);
          });
    
      }, [])
      
    return (


        <>
           {profileUser ? 
           (
           <>
            <div className="px-16 flex justify-center flex-wrap lg:flex-nowrap gap-10">
              <div className="border-light border-2 border-dashed w-96 p-10 rounded-xl flex justify-center flex-col items-center my-10">
                <div>
                  <img className="h-24" src="/avatar.png" alt="avatar" />
                </div>
                <p className="font-bold text-2xl text-center my-1 text-primary leading-[23px]">
                  
                      {profileUser.FirstName + " " + profileUser.LastName}
                      
           
                </p>
                <p className="text-center">{profileUser.username}</p>
                      <p className="text-center">{profileUser.email}</p>
                    
               
                </div>
              </div>
              <div className='p-10'>
                <h1 className="text-2xl font-bold mb-5 ml-2">Project List</h1>
                <div className="flex flex-wrap justify-stretch  gap-5">
                  {projects?.map((project: any) => {
                    const projectData = JSON.stringify(project.data);
    
                    return (
                      <div onClick={() => {
                        router.push(`/project/${project.id}`)
                      }}>
                        <Card
                          key={project.id}
                          name={project.name}
                          sheets={JSON.parse(projectData).length}
                        />
                      </div>
                    );
                  })}
                 
                </div>
              </div>
            </>
          ) 
          
          :
          
          (
    
            <img src="/loading.gif" alt="" className="mx-auto p-20 h-52" />
    
          )
          }
        </>
      );
}

export default User
