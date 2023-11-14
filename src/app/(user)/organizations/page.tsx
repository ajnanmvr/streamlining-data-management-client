"use client";
import Card from "@/components/Card";
import CreateProject from "@/components/Profile/CreateProject";
import { useUserContext } from "@/context/User";
import Axios from "@/utils/Axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
export default function Organizations() {
  const [profileUser, setProfileUser] = useState<any>();
  const [isPopupShow, setIsPopupShow] = useState<any>();
  const { setUser, user } = useUserContext();

  const router = useRouter();
  useEffect(() => {
    const userId = user?.id;
    Axios.get(`/users/${userId}`)
      .then((res) => {
        setProfileUser(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(user);
  }, [user]);



  // logout function
  const logout = () => {

    Axios.post('/users/logout').then((res) => {
      setUser(null);
      router.push('/login');
    }).catch((err) => {
      console.log(err);
    })

  }

  return (
    <>
      {isPopupShow && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          {isPopupShow &&
          <CreateProject isPopupShow setIsPopupShow={setIsPopupShow}/>
          
          }
        </div>
      )}
      {profileUser ? (
        <div className="px-16 flex justify-center flex-wrap lg:flex-nowrap gap-10">
          <div>
            <h1 className="text-2xl font-bold mb-5 ml-2">Project List</h1>
            <div className="flex flex-wrap justify-stretch  gap-5">
              {profileUser.projects?.map((project: any) => {
                const projectData = JSON.stringify(project.data);

                return (
                  <div onClick={()=>{
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
              <Link href={"#"}>
                <div
                  className="flex group"
                  onClick={() => setIsPopupShow(true)}
                >
                  <div className="border-primary flex justify-center flex-col items-center border-dashed border-2 fill-primary rounded-xl p-8 w-64 gap-2">
                    <svg
                      className="h-12"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                    </svg>
                    <p className="text-xl tect-center font-semibold leading-[20px]">
                      New Project
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}
