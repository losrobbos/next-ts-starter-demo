import TodoList from "@/components/TodoList";
import { Suspense } from "react";

export default async function TodosPage() {

  return (
    <section>
      <h1>Todos</h1>
      <p>This is the todos page.</p>
      {/* HTTP Streaming mit Suspend */}
      {/* Component wird auf dem Server parallel gerendert und wird im selben HTTP Request nachgeschickt
        => dadurch kann der Seiten-Aufbau beschleunigt werden, da der Client nicht warten muss,
          bis das initiale layout gerendert ist, bevor die nachzuladenden Daten angefragt werden.          
      */}
      <Suspense fallback={<p>Loading todos...</p>}>
        {/* "HTML" Fragment => wird parallel zu dieser Page gerendert und ausgeliefert, wenn verfügbar */}
        <TodoList />
      </Suspense>
    </section>
  )

}