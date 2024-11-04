import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);

  return (
    <>
      <div className="mt-6 text-lg font-bold">Users</div>
      <div className="my-2">
        <input
          type="text"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          placeholder="Search users..."
          className="w-full p-2 capitalize border rounded outline-none border-slate-200"></input>
      </div>
      <div>
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </>
  );
};

function User({ user }) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between p-2 rounded hover:bg-slate-100">
      <div className="flex items-center">
        <div className="flex justify-center w-12 h-12 mr-2 font-semibold capitalize bg-green-200 rounded-full">
          <div className="flex flex-col justify-center h-full text-xl ">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center font-semibold h-ful">
          <div className="">
            <span className="capitalize">{user.firstName}</span> {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button
          onClick={(e) => {
            navigate("/send?id=" + user._id + "&name=" + user.firstName);
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
}
