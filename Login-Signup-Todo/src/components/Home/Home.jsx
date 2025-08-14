import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center pt-20">
      <h1 className="text-3xl font-bold mb-4">Welcome to Home Page</h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
