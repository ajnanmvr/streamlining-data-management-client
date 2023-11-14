
import View from "@/components/project/View";

  export default async function page({ params }: { params: { id: string } }) {
  

    // useEffect(() => {
    //   const userId = params.id;
    //   Axios.get(`/projects/${userId}`)
    //     .then((res) => {
    //       setProject(res.data);
    //       console.log(res.data);
          
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
  
    // }, []);

  return (
    <main className="font-sans h-screen overflow-hidden flex bg-accent">
        {
            params.id

            
        }
        {/* {
          project.name
        } */}
        <View id={params.id}/>
    </main>
  );
}