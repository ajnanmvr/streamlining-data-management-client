

  export default async function page({ params }: { params: { id: string } }) {

  return (
    <main className="font-sans h-screen overflow-hidden flex bg-accent">
        {
            params.id
        }
    </main>
  );
}