
export default function Organization() {
    return (
        <div className="px-16 flex flex-col justify-center flex-wrap lg:flex-nowrap gap-10">
            <input
                type="text"
                placeholder={`Find your desired one here`}
                className="rounded-lg border-2 border-gray-900  border-dashed px-3 py-2 w-full mx-auto transition-transform duration-300 transform hover:scale-[101%]"
            />
            <div className="flex justify-center items-center flex-wrap gap-2 cursor-pointer">

                <div className=" bg-smoke hover:bg-smoker p-10 rounded-xl flex justify-center flex-col items-center">
                    <div>
                        <img className="h-24" src="/avatar.png" alt="avatar" />
                    </div>
                    <p className="font-bold text-2xl text-center my-1 text-primary leading-[23px]">
                        Muhammed Ajnan
                    </p>
                    <p className="text-center">userid</p>
                </div>
            </div>
        </div>
    )
}