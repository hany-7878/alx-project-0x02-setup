import { type UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border p-4 rounded-md shadow-md bg-white">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-700 mt-1">{email}</p>

      <div className="text-sm text-gray-600 mt-2">
        <p>
          <strong>City:</strong> {address.city}
        </p>
        <p>
          <strong>Street:</strong> {address.street}
        </p>
      </div>
    </div>
  );
}
