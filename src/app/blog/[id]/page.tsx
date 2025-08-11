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