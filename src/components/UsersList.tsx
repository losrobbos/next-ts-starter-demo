"use client";

import { User } from "@/types/User";
import { useState } from "react";

// Client component to handle user interactions
// It receives the initial list of users as a prop and allows adding new users dynamically on the client side.
// This component will be initially (!) rendered on the server side (!) so we can prerender an initial set of users
// But all user interactions are handled on the client side
export default function UsersList({ usersInitial }: { usersInitial: Array<User> }) {

  // hydration issue: useState with initial value
  const [users, setUsers] = useState(usersInitial);

  const addUser = () => {
    const newUser: User = {
      id: Date.now(), // Using timestamp as a simple unique ID
      name: `New user`,
      username: `wlad`,
      email: `wlad@next.com`
    } as User;

    setUsers([...users, newUser]);
  }

  const htmlUsers = users.map(user => {
    return <div key={user.id}>
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  });

  return (
    <section>
      <h1>Users</h1>
      {htmlUsers}
      <button onClick={addUser}>Neuer User</button>
    </section>
  );
}