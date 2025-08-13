// generateStaticParams wird zum BUILD Zeitpunkt aufgerufen
// und generiert mir für JEDEN Param, den diese Funktion zurückgibt,
// eine Prerendered Page, also konkret es ruft die Component Function unten mit diesen Parametern auf
export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ]
}


export default async function BlogDetails({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;
  console.log("Blog ID:", id);

  return (
    <section>
      <h1>Blog Details {id}</h1>
      <p>This is the blog details page.</p>
    </section>
  );
}