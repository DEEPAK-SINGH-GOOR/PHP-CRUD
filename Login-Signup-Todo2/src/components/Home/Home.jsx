import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
const Logout = () => {
  const dispatch = useDispatch();
  let User = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    gender: "",
    language: [],
  };
  const [user, setUser] = useState(User);

  const [error, setError] = useState({});

  const validate = () => {
    let newError = {};

    if (!user.firstName) {
      newError.firstName = "First name required";
    } else if (!/^[A-Za-z]+$/.test(user.firstName)) {
      newError.firstName = "Only alphabets allowed";
    }

    if (!user.lastName) {
      newError.lastName = "Last name required";
    } else if (!/^[A-Za-z]+$/.test(user.lastName)) {
      newError.lastName = "Only alphabets allowed";
    }

    if (!user.email) {
      newError.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(user.email)) {
      newError.email = "Invalid email format";
    }

    if (!user.password) {
      newError.password = "Password is required";
    } else if (user.password.length < 6) {
      newError.password = "Password must be at least 6 characters";
    }

    if (!user.dob) {
      newError.dob = "Date of birth required";
    }

    if (!user.contact) {
      newError.contact = "Contact number required";
    } else if (!/^[0-9]{10}$/.test(user.contact)) {
      newError.contact = "Contact must be 10 digits";
    }

    if (!user.country) {
      newError.country = "Country is required";
    }

    if (!user.gender) {
      newError.gender = "Gender is required";
    }

    if (user.language.length === 0) {
      newError.language = "At least one language required";
    }

    console.log(Object.keys(newError).length, "length");
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, "NAME");
    console.log(value, "value");

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    dispatch(signup(user));
    console.log("working");
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div>
      {/* <button
        onClick={(e) => handleLogout(e)}
        className="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Logout
      </button> */}
 <nav className="relative bg-gray-800 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 ">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className=" flex h-16 items-center justify-end">
      <button
        onClick={(e) => handleLogout(e)}
        className="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Logout
      </button>
    </div>
  </div>
</nav> 

      <div className="flex flex-col justify-center sm:h-screen p-4 ">
        <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold">Registration Form</h1>
          </div>
          <form onSubmit={handleSubmit}>

            <div className="space-y-6">
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                First Name
              </label>
              <input
                name="firstName"
                type="text"
                value={user.firstName}
                onChange={handleChange}
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter First Name"
              />
              <p className="mt-2 text-sm text-red-600">{error.firstName}</p>
            </div>
            <br />

            <div className="space-y-6">
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Last Name
              </label>
              <input
                name="lastName"
                type="text"
                value={user.lastName}
                onChange={handleChange}
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter Last Name"
              />
              <p className="mt-2 text-sm text-red-600">{error.lastName}</p>
            </div>
            <br />

            <div className="space-y-6">
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={user.email}
                onChange={handleChange}
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter Email"
              />
              <p className="mt-2 text-sm text-red-600">{error.email}</p>
            </div>
            <br />

            <div className="sm:flex gap-5">
              <div className="w-[180px]">
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Date Of Birth
                </label>
                <input
                  name="dob"
                  type="date"
                  value={user.dob}
                  onChange={handleChange}
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                />
                <p className="mt-2 text-sm text-red-600">{error.dob}</p>
              </div>

              <div className="w-[180px]">
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Contact No.
                </label>
                <input
                  name="contact"
                  type="text"
                  value={user.contact}
                  onChange={handleChange}
                  placeholder="Enter Contact No."
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                />
                <p className="mt-2 text-sm text-red-600">{error.contact}</p>
              </div>
            </div>
            <br />

            <div className="flex justify-center gap-6">
              <div className="w-[180px]">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Select Country
                </label>
                <select
                  name="country"
                  value={user.country}
                  onChange={handleChange}
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                >
                  <option value="">Choose a country</option>
                  <option value="usa">USA</option>
                  <option value="india">India</option>
                  <option value="china">China</option>
                </select>
                <p className="mt-2 text-sm text-red-600">{error.country}</p>
              </div>

              <div className="w-[180px]">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Select Gender
                </label>
                <select
                  name="gender"
                  value={user.gender}
                  onChange={handleChange}
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <p className="mt-2 text-sm text-red-600">{error.gender}</p>
              </div>
            </div>
            <br />

            <div className="flex items-center gap-3">
              <label className="text-slate-900 text-sm font-medium block w-full">
                Select Language:
              </label>

              <input
                type="checkbox"
                name="language"
                value="English"
                checked={user.language.includes("English")}
                onChange={handleChange}
              />
              <span>English</span>

              <input
                type="checkbox"
                name="language"
                value="Hindi"
                checked={user.language.includes("Hindi")}
                onChange={handleChange}
              />
              <span>Hindi</span>

              <input
                type="checkbox"
                name="language"
                value="Gujarati"
                checked={user.language.includes("Gujarati")}
                onChange={handleChange}
              />
              <span>Gujarati</span>
            </div>
            <p className="mt-2 text-sm text-red-600">{error.language}</p>

            <div className="mt-12">
              <button
                type="submit"
                className="w-full py-3 px-4 text-sm tracking-wider font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>

        </div>
      </div>
      <br />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg   ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                First name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Date Of Birth
              </th>
              <th scope="col" className="px-6 py-3">
                Contact
              </th>
              <th scope="col" className="px-6 py-3">
                Country
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Language
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default Logout;