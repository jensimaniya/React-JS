import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const AddUser = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    age: "",
    phoneno: "",
    address: "",
    gender: "",
    agree: false,
  });

  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    const { name, value, type, checked, id } = e.target;
    setNewUser((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(newUser),
    });
    navigate("/");
  };

  console.log(newUser);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-400 via-purple-300 to-pink-400">
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-xl bg-white/30 border border-white/50 shadow-2xl p-10 rounded-3xl w-full max-w-xl flex flex-col gap-6 text-gray-800"
      >
        <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-600">
          ✨ Add New User
        </h1>

        {/* Username */}
        <div>
          <Label
            htmlFor="username"
            className="text-sm font-semibold mb-1 block"
          >
            Username
          </Label>
          <TextInput
            id="username"
            type="text"
            placeholder="Enter username"
            required
            className="rounded-lg border-2 border-transparent focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
          />
        </div>

        {/* Age */}
        <div>
          <Label htmlFor="age" className="text-sm font-semibold mb-1 block">
            Age
          </Label>
          <TextInput
            id="age"
            type="number"
            placeholder="Enter age"
            required
            className="rounded-lg border-2 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
          />
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phoneno" className="text-sm font-semibold mb-1 block">
            Phone No
          </Label>
          <TextInput
            id="phoneno"
            type="tel"
            placeholder="+91..."
            required
            className="rounded-lg border-2 border-transparent focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
            onChange={(e) =>
              setNewUser({ ...newUser, phoneno: e.target.value })
            }
          />
        </div>

        {/* Address */}
        <div>
          <Label htmlFor="address" className="text-sm font-semibold mb-1 block">
            Address
          </Label>
          <TextInput
            id="address"
            type="text"
            placeholder="Your address"
            required
            className="rounded-lg border-2 border-transparent focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            onChange={(e) =>
              setNewUser({ ...newUser, address: e.target.value })
            }
          />
        </div>

        {/* Gender */}
        <div>
          <Label htmlFor="gender" className="text-sm font-semibold mb-2 block">
            Gender
          </Label>
          <div className="flex justify-between">
            <label className="flex items-center gap-2">
              <input
                id="male"
                type="radio"
                name="gender"
                value="male"
                required
                checked={newUser.gender === "male"}
                onChange={handleOptionChange}
                className="accent-blue-600"
              />
              <span>Male</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                id="female"
                type="radio"
                name="gender"
                value="female"
                required
                checked={newUser.gender === "female"}
                onChange={handleOptionChange}
                className="accent-pink-600"
              />
              <span>Female</span>
            </label>
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-3">
          <Checkbox
            id="remember"
            name="agree"
            checked={newUser.agree}
            onChange={handleOptionChange}
            className="accent-purple-600"
          />
          <Label htmlFor="remember" className="text-sm font-medium">
            Remember me
          </Label>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <Button
            onClick={() => navigate("/")}
            type="button"
            className="bg-gradient-to-r from-gray-400 to-gray-600 text-white px-6 py-2 rounded-xl hover:scale-105 transition"
          >
            🔙 Back
          </Button>
          <Button
            type="submit"
            className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-6 py-2 rounded-xl hover:scale-105 transition"
          >
            🚀 Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
