"use client";

import Axios from "@/utils/Axios";
import {
    createContext,
    useContext,
    Dispatch,
    SetStateAction,
    useState,
    useEffect,
} from "react";

type DataType = {
    FirstName: string
    LastName: string
    email: string
    username: string
    id: number
};

interface ContextProps {
    user: DataType;
    setUser: Dispatch<SetStateAction<DataType>>;
}

const UserContext = createContext<ContextProps>({
    user: {} as DataType,
    setUser: (): DataType => {
        return {} as DataType;
    },
});

export const UserContextProvider = ({ children }: any) => {
    const [user, setUser] = useState<DataType>({} as DataType);

    useEffect(() => {
       Axios.get('users/logged/check').then((data) => {
        // console.log(data.data);
        if(data?.data?.username){
            setUser(data.data);
        }
       })
    }, []);
    return (
        <UserContext.Provider value={{ user , setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);