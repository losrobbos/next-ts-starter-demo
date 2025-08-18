import UsersList from "@/components/UsersList";
import { User } from "@/types/User";

export default async function UsersPage() {

  // Fetching users from the API
  const usersApi: Array<User> = await (await fetch('https://jsonplaceholder.typicode.com/users?_limit=5')).json();

  return (
    <section>
      <h1>Users</h1>
      <UsersList usersInitial={usersApi} />
    </section>
  );
}