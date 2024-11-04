import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between w-full px-4 py-4 bg-white shadow sm:px-14">
        <div className="text-xl font-bold text-green-600 sm:text-2xl">
          PayTM App
        </div>
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => navigate("/signup")}
            className="px-5 py-2 font-medium text-white bg-green-500 border rounded hover:bg-green-600 ">
            Signup
          </button>
          <button
            onClick={() => navigate("/signin")}
            className="px-5 py-2 font-medium text-white bg-green-500 border rounded hover:bg-green-600 ">
            Signin
          </button>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center flex-grow px-4 text-center bg-slate-200">
        <h1 className="mb-2 text-2xl font-semibold">Welcome to PayTM App</h1>
        <p className="mb-4 text-lg">
          A safe and secure way to transfer your hard-earned money.
        </p>
        <p className="mb-4 text-base">
          With our app, you can easily manage your finances, track your
          spending, and make transactions with just a few clicks.
        </p>
      </main>
      <footer className="flex items-center justify-center w-full py-4 bg-white shadow-inner">
        <div className="text-sm text-gray-500">
          © 2024 Payments App. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
