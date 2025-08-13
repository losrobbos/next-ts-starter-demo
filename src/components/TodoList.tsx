export default async function TodoList() {

  const result: string = await new Promise(resolve => setTimeout(() => resolve("GOLD NUGGET"), 3000)); // Simulate data fetching delay

  return (
    <section>
      <label>Result: {result}</label>
    </section>
  );
}