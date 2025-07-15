import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

const EditUser = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [editUser, setEditUser] = useState({
    username: "",
    age: "",
    phoneno: "",
    address: "",
    gender: "",
    agree: false,
  });

  console.log("edituserdata", editUser);

  const EditUserData = async () => {
    const res = await fetch(`http://localhost:3000/users/${id}`);
    const data = await res.json();
    setEditUser(data);
  };

  useEffect(() => {
    EditUserData();
  }, [id]);

  const handleOptionChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditUser((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(editUser),
    });

    if (res.ok) {
      alert("User Updated Successfully!!");
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <form
        className="flex  flex-col gap-4 w-[600px] bg-slate-300 p-8 rounded-3xl"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center font-bold">Edit User Form</h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username">Username</Label>
          </div>
          <TextInput
            id="username"
            type="text"
            placeholder="username"
            name="username"
            required
            value={editUser.username}
            onChange={handleOptionChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="age">Age</Label>
          </div>
          <TextInput
            id="age"
            type="number"
            placeholder="age"
            name="age"
            required
            value={editUser.age}
            onChange={handleOptionChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="phoneno">Phone No</Label>
          </div>
          <TextInput
            id="phoneno"
            type="tel"
            placeholder="+91"
            name="phoneno"
            required
            value={editUser.phoneno}
            onChange={handleOptionChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="address">Address</Label>
          </div>
          <TextInput
            id="address"
            type="text"
            placeholder="address"
            name="address"
            required
            value={editUser.address}
            onChange={handleOptionChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1">Gender</Label>
          </div>
          <div className="flex items-center">
            <div className="flex items-center w-1/2 gap-10">
              <Label htmlFor="male">Male</Label>
              <TextInput
                id="male"
                type="radio"
                name="gender"
                value="male"
                required
                checked={editUser.gender === "male"}
                onChange={handleOptionChange}
              />
            </div>
            <div className="flex items-center w-1/2 gap-10">
              <Label htmlFor="female">Female</Label>
              <TextInput
                id="female"
                type="radio"
                name="gender"
                value="female"
                required
                checked={editUser.gender === "female"}
                onChange={handleOptionChange}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" onChange={handleOptionChange} />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <div className="flex">
          <Button onClick={() => navigate("/")} className="w-100" type="submit">
            Back
          </Button>
          <Button className="w-100 ms-4" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
