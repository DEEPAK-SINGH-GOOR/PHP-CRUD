
// import Login from "./components/Login/Login";
// import { useSelector } from "react-redux";
// import { selectUser } from "./components/features/userSlice";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router";
// import Signup from "./components/Signup/Signup";
// import Home from "./components/Home/Home";

// const App = () => {
//   const user = useSelector(selectUser);

//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Signup />} />
//           <Route path="/login" element={<Login />} />

//           {/* Protected Route */}
//           <Route 
//             path="/home" 
//             element={user ? <Home /> : <Navigate to="/login" />} 
//           />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";

const App = () => {

  // const user = useSelector((state) => state.user.currentUser) || [];
  // const allUsers = useSelector((state) => state.user.users) || [];
  const user = useSelector((state) => state.addUser?.users || []);

  // console.log("Current User:", user);
  // console.log(" All Users:", allUsers);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Route */}
          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
