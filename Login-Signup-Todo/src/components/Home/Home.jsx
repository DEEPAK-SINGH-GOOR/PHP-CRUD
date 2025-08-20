import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/userSlice";
import { addUser, deleteUser, editUser } from "../action/userAction";
import Button from "../Elements/Button";
import { Input } from "../Elements/Input";
import Span from "../Elements/Span";
import Select from "../Elements/Select";
const Logout = () => {
  const dispatch = useDispatch();
  let User = {
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    contact: "",
    country: "",
    gender: "",
    language: [],
  };

  const countryOptions = [
    { value: "", label: "Select Country" },
    { value: "usa", label: "USA" },
    { value: "india", label: "India" },
    { value: "china", label: "China" },
  ];

  const genderOptions = [
    { value: "", label: "Select Gender" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const languageOptions = [
    { value: "", label: "Select Language" },
    { value: "hindi", label: "Hindi" },
    { value: "english", label: "English" },
    { value: "gujarati", label: "Gujarati" },
  ];

  const [user, setUser] = useState(User);
  const users = useSelector((state) => state.users.users);
  console.log(users, "PATH");
  const [filters, setFilters] = useState({});
  const [searchItem, setSearchItem] = useState("");
  const [edit, setEdit] = useState(null);
  const [error, setError] = useState({});

  const validation = () => {
    let newError = {};
    if (!user.firstName) {
      newError.firstName = "First name Required !!";
    } else if (!/^[A-Za-z]+$/.test(user.firstName)) {
      newError.firstName = "Number are Not allowed";
    }
    if (!user.lastName) {
      newError.lastName = "Last name Required !!";
    } else if (!/^[A-Za-z]+$/.test(user.lastName)) {
      newError.lastName = "Number are Not allowed";
    }
    if (!user.email) {
      newError.email = "Email is Required !!";
    } else if (!/^\S+@\S+\.\S+$/.test(user.email)) {
      newError.email = "Invalid email format";
    }
    if (!user.dob) {
      newError.dob = "Date of birth Required !!";
    }
    if (!user.contact) {
      newError.contact = "Contact number Required !!";
    } else if (!/^[0-9]{10}$/.test(user.contact)) {
      newError.contact = "Contact Required 10 digits";
    }
    if (!user.country) {
      newError.country = "Country is Required !!";
    }
    if (!user.gender) {
      newError.gender = "Gender is Required !!";
    }
    if (user.language.length === 0) {
      newError.language = "At least one language Required !!";
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
  const inputHandleLanguage = (e) => {
    const { name, value, checked } = e.target;
    // console.log(name, "NAME");
    // console.log(value, "VALUE");
    // console.log(checked, "CHECKED");
    //
    if (name === "language") {
      const current = user.language;
      // console.log(current, "CURRENT");

      let updated = [];
      if (checked) {
        updated = [...current, value];
        // console.log(updated, "UPDATE");
        // console.log(...current, "....CURRENT");
      } else {
        updated = current.filter((lang) => lang !== value);
      }
      setUser({ ...user, [name]: updated });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validation()) return;
    console.log(edit, "EDIT");

    if (edit) {
      dispatch(editUser({ ...user }));
      setEdit(null);
    } else {
      dispatch(addUser({ ...user, id: Date.now() }));
    }
    setUser(User);
  };
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  const handleEdit = (data) => {
    setUser(data);
    setEdit(data.id);
    console.log(data, "DATA");
    console.log(data.id, "data-id");
  };
  const filterList = users
  .filter((item) => {
    const Gender = !filters.gender || item.gender === filters.gender;
    const Country = !filters.country || item.country === filters.country;
    const Language =
      !filters.language ||
      (Array.isArray(item.language)
        ? item.language.some(
            (lang) => lang.toLowerCase() === filters.language.toLowerCase()
          )
        : item.language.toLowerCase() === filters.language.toLowerCase());

    return Gender && Country && Language;
  }).filter(
      (item) =>
        item.firstName.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.lastName.toLowerCase().includes(searchItem.toLowerCase())
    );
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
      <br />
      <div className="flex flex-col justify-center sm:h-screen p-4  ">
        <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Registration Form</h2>
            <hr />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                First Name
              </label>
              {/* <input
                name="firstName"
                type="text"
                value={user.firstName}
                onChange={handleChange}
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter First Name"
              /> */}
              <Input
                name="firstName"
                type="text"
                value={user.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
              />
              {/* <p className="mt-2 text-sm text-red-600">{error.firstName}</p> */}
              <Span label={error.firstName} />
            </div>
            <br />
            <div className="space-y-6">
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Last Name
              </label>
              {/* <input
                name="lastName"
                type="text"
                value={user.lastName}
                onChange={handleChange}
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter Last Name"
              /> */}
              <Input
                name="lastName"
                type="text"
                value={user.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
              />
              {/*  <p className="mt-2 text-sm text-red-600">{error.lastName}</p> */}
              <Span label={error.lastName} />
            </div>
            <br />

            <div className="space-y-6">
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Email
              </label>
              {/* <input
                name="email"
                type="email"
                value={user.email}
                onChange={handleChange}
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter Email"
              /> */}
              <Input
                name="email"
                type="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter Email"
              />
              {/* <p className="mt-2 text-sm text-red-600">{error.email}</p> */}
              <Span label={error.email} />
            </div>
            <br />

            <div className="sm:flex gap-5">
              <div className="w-[180px]">
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Date Of Birth
                </label>
                {/* <input
                  name="dob"
                  type="date"
                  value={user.dob}
                  onChange={handleChange}
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                /> */}
                <Input
                  name="dob"
                  type="date"
                  value={user.dob}
                  onChange={handleChange}
                />
                {/* <p className="mt-2 text-sm text-red-600">{error.dob}</p> */}
                <Span label={error.dob} />
              </div>

              <div className="w-[180px]">
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Contact No.
                </label>
                {/* <input
                  name="contact"
                  type="number"
                  value={user.contact}
                  onChange={handleChange}
                  placeholder="Enter Contact No."
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                /> */}
                <Input
                  name="contact"
                  type="number"
                  value={user.contact}
                  onChange={handleChange}
                  placeholder="Enter Contact "
                />
                {/* <p className="mt-2 text-sm text-red-600">{error.contact}</p> */}
                <Span label={error.contact} />
              </div>
            </div>
            <br />

            <div className="flex justify-center gap-6">
              <div className="w-[180px]">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Select Country
                </label>
                <Select
                  name="country"
                  value={user.country}
                  onChange={handleChange}
                  options={countryOptions}
                />


                {/* <p className="mt-2 text-sm text-red-600">{error.country}</p> */}
                <Span label={error.country} />
              </div>

              <div className="w-[180px]">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Select Gender
                </label>
                <Select
                  name="gender"
                  value={user.gender}
                  onChange={handleChange}
                  options={genderOptions}
                />
                {/*
                <p className="mt-2 text-sm text-red-600">{error.gender}</p> */}
                <Span label={error.gender} />
              </div>
            </div>
            <br />
            <div className=" items-center ">
              <label className="text-slate-900 text-sm font-medium block w-full ">
                Select Language:
              </label>

              <input
                type="checkbox"
                name="language"
                value="English"
                className="m-1"
                checked={user.language.includes("English")}
                onChange={inputHandleLanguage}
              />
              <span>English</span>

              <input
                type="checkbox"
                name="language"
                value="Hindi"
                className="m-1"
                checked={user.language.includes("Hindi")}
                onChange={inputHandleLanguage}
              />
              <span>Hindi</span>

              <input
                type="checkbox"
                name="language"
                value="Gujarati"
                className="m-1"
                checked={user.language.includes("Gujarati")}
                onChange={inputHandleLanguage}
              />
              <span>Gujarati</span>
            </div>
            {/* <p className="mt-2 text-sm text-red-600">{error.language}</p> */}
            <Span label={error.language} />
            <div className="mt-3">
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
      {/* FILTER SECTION  */}
      <div className="flex justify-center items-center p-10">
        <div className="text-lg">
          <Select
            name="gender"
            value={filters.gender}
            onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
            options={genderOptions}
            className="w-[200px] mt-2 cursor-pointer"
          />
        </div>
        <div className="text-lg m-3">
          {/* <select
            className="w-[200px] border-2 border-gray-400 rounded h-10 text-center mt-2 cursor-pointer"
            name="country"
            onChange={(e) =>
              setFilters({ ...filters, country: e.target.value })
            }
          >
            <option value="">Select Country</option>
            <option value="usa">USA</option>
            <option value="india">India</option>
            <option value="china">China</option>
          </select> */}
           <Select
            name="country"
            value={filters.country}
            onChange={(e) => setFilters({ ...filters, country: e.target.value })}
            options={countryOptions}
            className="w-[200px] mt-2 cursor-pointer"
          />
        </div>
        <div className="text-lg m-3">
          {/* <select
            className="w-[200px] border-2 border-gray-400 rounded h-10 text-center mt-2 cursor-pointer"
            name="language"
            onChange={(e) =>
              setFilters({ ...filters, language: e.target.value })
            }
          >
            <option value="">Select Language</option>
            <option value="hindi">Hindi</option>
            <option value="english">English</option>
            <option value="gujarati">Gujarati</option>
          </select> */}
           <Select
            name="language"
            value={filters.language}
            onChange={(e) => setFilters({ ...filters,language: e.target.value })}
            options={languageOptions}
            className="w-[200px] mt-2 cursor-pointer"
          />
        </div>
        <div className="text-lg m-3">
          <input
            className="w-[200px] border-2 border-gray-400 rounded h-10 text-center mt-2 cursor-pointer"
            type="text"
            placeholder="Search"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
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

          <tbody>
            {filterList.length > 0 &&
              filterList.map((data) => (
                <tr
                  key={data.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 text-black"
                >
                  <td className="px-6 py-4">{data.firstName}</td>
                  <td className="px-6 py-4">{data.lastName}</td>
                  <td className="px-6 py-4">{data.email}</td>
                  <td className="px-6 py-4">{data.dob}</td>
                  <td className="px-6 py-4">{data.contact}</td>
                  <td className="px-6 py-4">{data.country}</td>
                  <td className="px-6 py-4">{data.gender}</td>
                  <td className="px-6 py-4">{data.language.join(" ,")}</td>
                  <td>
                    {/* <button
                      onClick={() => handleDelete(data.id)}
                      className="w-[100px] border-2 border border-gray-300 p-2 bg-red-600 text-white cursor-pointer "
                    >
                
                      Delete
                    </button> */}
                    <Button
                      color="-red-600"
                      label="Delete"
                      onClick={() => handleDelete(data.id)}
                    />

                    {/* <button
                      onClick={() => handleEdit(data)}
                      className="w-[100px] border-2 border border-gray-300 p-2 bg-sky-600 text-white cursor-pointer "
                    >
                      Edit
                    </button> */}
                    <Button
                      color="-sky-600"
                      label="Edit"
                      onClick={() => handleEdit(data)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Logout;
