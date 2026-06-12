import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <div className="bg-blue-500 text-white p-4">User: {id}</div>;
}

export default User;
