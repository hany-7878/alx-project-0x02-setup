import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <div>
      <Header />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Users</h1>

        <div className="grid gap-4">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const users: UserProps[] = data.map((u: any) => ({
    id: u.id,
    name: u.name,
    email: u.email,
    address: {
      city: u.address.city,
      street: u.address.street,
    },
  }));

  return {
    props: {
      users,
    },
  };
}
