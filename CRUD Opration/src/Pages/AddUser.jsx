import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { FaMale, FaFemale } from "react-icons/fa";


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
   <div
     className=" mt-12 flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
     style={{
       backgroundImage:
         "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80')",
     }}
   >
     <form
       onSubmit={handleSubmit}
       className="w-full max-w-2xl bg-white shadow-2xl rounded-[30px] p-10 border border-gray-200"
     >
       <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700">
         🧾 Add New User
       </h1>

       {/* Username */}
       <div className="mb-4">
         <Label
           htmlFor="username"
           className="  text-indigo-700  text-xl font-semibold mb-1"
         >
           Username
         </Label>
         <TextInput
           id="username"
           type="text"
           placeholder="Enter username"
           required
           className="rounded-lg focus:ring-indigo-300"
           onChange={(e) =>
             setNewUser({ ...newUser, username: e.target.value })
           }
         />
       </div>

       {/* Age */}
       <div className="mb-4">
         <Label htmlFor="age" className="block text-sm font-semibold mb-1">
           Age
         </Label>
         <TextInput
           id="age"
           type="number"
           placeholder="Enter age"
           required
           className="rounded-lg focus:ring-sky-300"
           onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
         />
       </div>

       {/* Phone No */}
       <div className="mb-4">
         <Label htmlFor="phoneno" className="block text-sm font-semibold mb-1">
           Phone Number
         </Label>
         <TextInput
           id="phoneno"
           type="tel"
           placeholder="+91..."
           required
           className="rounded-lg focus:ring-cyan-300"
           onChange={(e) => setNewUser({ ...newUser, phoneno: e.target.value })}
         />
       </div>

       {/* Address */}
       <div className="mb-4">
         <Label htmlFor="address" className="block text-sm font-semibold mb-1">
           Address
         </Label>
         <TextInput
           id="address"
           type="text"
           placeholder="Your address"
           required
           className="rounded-lg focus:ring-emerald-300"
           onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
         />
       </div>

       {/* Gender */}
       {/* Gender */}
       <div className="mb-4">
         <Label className="block text-sm font-semibold mb-2">Gender</Label>
         <div className="flex gap-8">
           <label className="flex items-center gap-2 cursor-pointer">
             <input
               type="radio"
               name="gender"
               value="male"
               checked={newUser.gender === "male"}
               onChange={handleOptionChange}
               className="accent-indigo-600"
             />
             <FaMale className="text-blue-600 text-lg" />
             <span>Male</span>
           </label>
           <label className="flex items-center gap-2 cursor-pointer">
             <input
               type="radio"
               name="gender"
               value="female"
               checked={newUser.gender === "female"}
               onChange={handleOptionChange}
               className="accent-pink-500"
             />
             <FaFemale className="text-pink-500 text-lg" />
             <span>Female</span>
           </label>
         </div>
       </div>

       {/* Remember Me */}
       <div className="flex items-center gap-3 mb-6">
         <Checkbox
           id="remember"
           name="agree"
           checked={newUser.agree}
           onChange={handleOptionChange}
           className="accent-purple-600"
         />
         <Label htmlFor="remember" className="text-sm">
           Remember me
         </Label>
       </div>

       {/* Buttons */}
       <div className="flex justify-between items-center">
         <Button
           type="button"
           onClick={() => navigate("/")}
           className="bg-gray-300 text-gray-800 hover:bg-gray-400 rounded-xl px-5 py-2 transition"
         >
           ← Back
         </Button>
         <Button
           type="submit"
           className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6 py-2 transition"
         >
           Submit ➤
         </Button>
       </div>
     </form>
   </div>
 );

};

export default AddUser;
