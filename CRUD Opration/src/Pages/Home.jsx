import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Button,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";

export const Home = () => {
  const navigate = useNavigate();

  const AddNewUser = () => {
    navigate("/adduser");
  };

  const [user, setUser] = useState([]);

  const userData = async () => {
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();
    setUser(data);
  };

  useEffect(() => {
    userData();
  }, []);

  const DeleteUser = async(id) => {
    const res = await fetch(`http://localhost:3000/users/${id}` , {
      method:'DELETE'
    }).then(() => {
      userData()
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="container mx-auto px-6 py-10 bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600 mb-10">
        Welcome to the Home Page
      </h1>

      <div className="flex justify-end mb-6">
        <button
          onClick={AddNewUser}
          className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
        >
          ➕ Add New User
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl shadow-2xl border border-gray-200 bg-white">
        <Table className="w-full text-sm text-left text-gray-700">
          <TableHead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-base">
            <TableRow>
              <TableHeadCell>UserName</TableHeadCell>
              <TableHeadCell>Age</TableHeadCell>
              <TableHeadCell>Phone No</TableHeadCell>
              <TableHeadCell>Gender</TableHeadCell>
              <TableHeadCell>Address</TableHeadCell>
              <TableHeadCell>Edit</TableHeadCell>
              <TableHeadCell>Delete</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y divide-gray-200">
            {user.map((data, index) => (
              <TableRow
                key={index}
                className="hover:bg-gray-50 transition-all duration-200"
              >
                <TableCell className="font-semibold text-gray-800">
                  {data.username}
                </TableCell>
                <TableCell>{data.age}</TableCell>
                <TableCell>{data.phoneno}</TableCell>
                <TableCell>{data.gender}</TableCell>
                <TableCell>{data.address}</TableCell>
                <TableCell>
                  <Link
                    to={`/edituser/${data.id}`}
                    className="inline-block bg-yellow-400 text-white px-3 py-1 rounded-md font-medium hover:bg-yellow-500 transition"
                  >
                    ✏️ Edit
                  </Link>
                </TableCell>
                <TableCell>
                  <button
                    onClick={() => DeleteUser(data.id)}
                    className="inline-block bg-red-500 text-white px-3 py-1 rounded-md font-medium hover:bg-red-600 transition"
                  >
                    🗑️ Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};