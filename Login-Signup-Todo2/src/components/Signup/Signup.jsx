import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../features/userSlice";

const Signup = () => {
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
  // console.log(user);
  
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,'NAME');
    // console.log(value, "value");

    setUser({ ...user, [name]: value });
  };

  // const handleLanguage = (e) => {
  //   const { value, checked } = e.target;
  //   console.log(value,'language-value');

  //   let updated = [...user.language];
  //   if (checked) {
  //     updated.push(value);
  //   } else {
  //     updated = updated.filter((lang) => lang !== value);
  //   }
  //   setUser({ ...user, language: updated });
  // };

  const handleLanguage = (e) => {
    const { value, checked } = e.target;
    let updated = [...user.language];
    if (checked) {
      updated.push(value);
    } else {
      updated = updated.filter((lang) => lang !== value);
    }
    setUser({ ...user, language: updated });
  };
  

  const validate = () => {
    let newError = {};
    if (!user.firstName) {
      newError.firstName = "First name required";
    } else if (!/^[A-Za-z]+$/.test(user.firstName)) {
      newError.firstName = "Number Are Not Allow";
    }
    if (!user.lastName) {
      newError.lastName = "Last name required";
    } else if (!/^[A-Za-z]+$/.test(user.lastName)) {
      newError.lastName = "Number Are Not Allow";
    }
    if (!user.email) newError.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(user.email)) newError.email = "Invalid email";
    if (!user.password) newError.password = "Password required";
    if (!user.country) newError.country = "Country required";
    if (!user.gender) newError.gender = "Gender required";
    if (user.language.length === 0)
      newError.language = "At least one language required";
    // console.log(user.language,'LANGUAGE');
  
    console.log(Object.keys(newError).length, "length");
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()){
      return
    }
    else{
      dispatch(signup(user));
      navigate("/home");
    }
   
  };
  

  return (
    <div>
      <div className="flex justify-center pt-25 ">
        <div className="w-full max-w-sm p-4 bg-blue text-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h4 className="text-3xl font-medium text-gray-900 dark:text-white ">
              Signup
            </h4>
            <hr className="bg-white" />

            <div className="flex justify-center gap-4">
              <div>
                <label className="block mb-2 text-sm text-white">
                  Enter First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  <span className="font-medium">{error.firstName}</span>
                </p>
              </div>
              <div>
                <label className="block mb-2 text-sm text-white">
                  Enter Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  <span className="font-medium">{error.lastName}</span>
                </p>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm text-white">
                Enter Email
              </label>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter email..."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">{error.email}</span>
              </p>
            </div>

            <div>
              <label className="block mb-2 text-sm text-white">
                Enter Password
              </label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">{error.password}</span>
              </p>
            </div>

            <div>
              <label className="block mb-2 text-sm text-white">
                Select Country
              </label>
              <select
                name="country"
                value={user.country}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              >
                <option value="" disabled>
                  Choose a country
                </option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">{error.country}</span>
              </p>
            </div>

            <div>
              <label className="block mb-2 text-sm text-white">
                Select Gender
              </label>
              <select
                name="gender"
                value={user.gender}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">{error.gender}</span>
              </p>
            </div>

            <div className="flex items-center text-white gap-1">
              <label className="text-sm text-white">Select Language:</label>
              <input
                type="checkbox"
                value="English"
                checked={user.language.includes("English")}
                onChange={handleLanguage}
              />
              <span>English</span>
              <input
                type="checkbox"
                value="Hindi"
                checked={user.language.includes("Hindi")}
                onChange={handleLanguage}
              />
              <span>Hindi</span>
              <input
                type="checkbox"
                value="Gujarati"
                checked={user.language.includes("Gujarati")}
                onChange={handleLanguage}
              />
              <span>Gujarati</span>
            </div>
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">{error.language}</span>
            </p>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5"
            >
              Signup
            </button>

            <div className="text-sm text-gray-500">
              Already have account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
