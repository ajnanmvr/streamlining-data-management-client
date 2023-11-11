import Card from "@/components/Card";
import Link from "next/link";
export default function Profile() {
    return (
        <div className="px-16 flex justify-center flex-wrap lg:flex-nowrap gap-10">
            <div className="border-light border-2 border-dashed w-96 p-10 rounded-xl flex justify-center flex-col items-center my-10">
                <div>
                    <img className="h-24" src="/avatar.png" alt="avatar" />
                </div>
                <p className="text-center -mb-1">Welcome</p>
                <p className="font-bold text-2xl text-center my-1 text-primary leading-[23px]">Muhammed Hisham</p>
                <p className="text-center">hishamac@gmail.com</p>
                <button className="text-sm text-primary mt-3 mb-1">Change Password</button>
                <div className="flex gap-2 mt-1"><button className="border-primary border rounded-lg text-white px-3 py-1 hover:bg-light bg-primary">Edit Details</button>      <button

                    className="border-red-700 border rounded-lg text-white px-3 py-1 hover:bg-red-700 fill-red-700 hover:fill-white"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg>
                </button>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold mb-5 ml-2">Project List</h1>
                <div className="flex flex-wrap justify-stretch  gap-5">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Link href={"#"}>
                        <div className="flex group">
                            <div className="border-primary flex justify-center flex-col items-center border-dashed border-2 fill-primary rounded-xl p-8 w-64 gap-2">
                                <svg className="h-12" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
                                <p className="text-xl tect-center font-semibold leading-[20px]">New Project</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}