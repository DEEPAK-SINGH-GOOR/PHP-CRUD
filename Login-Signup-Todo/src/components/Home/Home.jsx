import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
const Logout = () => {
  // const user = useSelector(selectUser);
  const dispatch = useDispatch();

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
          <form>
            <div className="space-y-6">
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  First Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter First Name"
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {/* <span className="font-medium">First Name Required !!</span> */}
                </p>
              </div>
            </div>
            <br />
            <div className="space-y-6">
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  last Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter Last Name"
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {/* <span className="font-medium">Last Name Required !!</span> */}
                </p>
              </div>
            </div>
            <br />
            <div className="space-y-6">
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Email
                </label>
                <input
                  name="name"
                  type="email"
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter Email"
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {/*<span className="font-medium">Email Required !!</span> */}
                </p>
              </div>
            </div>
            <br />
            <div className="mx-auto max-w-md md:max-w-md">
              <div className="sm:flex gap-5 ">
                <div className="w-[180px] ">
                  <label className="text-slate-900 text-sm font-medium mb-2 block">
                    Date Of Birth
                  </label>
                  <input
                    type="date"
                    className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {/* <span className="font-medium">Date of Birth Required !!</span> */}
                  </p>
                </div>
                <div className="gap-3">
                  <div className="w-[180px] ">
                    <label className="text-slate-900 text-sm font-medium mb-2 block">
                      Contact No.
                    </label>
                    <input
                      type="number"
                      placeholder="Enter Contact No."
                      className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    />
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {/* <span className="font-medium">Contact No. Required !!</span> */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="flex justify-center gap-6">
              <div className="w-[180px]">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">
                  Select Country
                </label>

                <select className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500">
                  <option selected disabled hidden>
                    Choose a country
                  </option>
                  <option value="usa">USA</option>
                  <option value="india">India</option>
                  <option value="china">China</option>
                </select>
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {/* <span className="font-medium">Country Required !!</span> */}
                </p>
              </div>

              <div className="w-[180px]">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">
                  Select Gender
                </label>

                <select className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500">
                  <option selected disabled hidden>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {/*   <span className="font-medium">Gender Required !!</span> */}
                </p>
              </div>
            </div>
            <br />
            <div className="flex items-center text-white gap-1">
              <label className="text-slate-900 text-sm font-medium  block w-full">
                Select Language :
              </label>

              <input
                type="checkbox"
                className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="text-slate-900 text-sm font-medium block ">
                English
              </label>
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className=" text-slate-900 text-sm font-medium  block ">
                Hindi
              </label>
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className=" text-slate-900 text-sm font-medium block  ">
                Gujarati
              </label>
            </div>
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {/* <span className="font-medium">At List One Language Required !!</span> */}
            </p>
            <div className="mt-12">
              <button
                type="button"
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
