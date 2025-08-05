import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getcurrentUser()
      .then((data) => {
        if (data) {
          dispatch(login({ data }));
        } else {
          dispatch(logout({ data }));
        }
      })
      .catch((error) => {
        console.log("Error while fetching:",error)
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <div className="flex justify-center items-center h-screen">
      <p>Loading...</p>
    </div>
  ) : (
    <div className="min-h-screen items-center flex flex-col content-between bg-gray-400">
      <Header />
      <main>
        <Outlet /> todo
      </main>
      <Footer />
    </div>
  );
}

export default App;
