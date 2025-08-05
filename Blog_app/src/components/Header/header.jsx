import React from "react";
import { LogoutButton, Container } from "../index.js";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function header() {
  const authStatus = useSelector((state) => authStatus.state.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-gray500 ">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
             LOGO
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item)=>
            item.active ? (
              <li key={item.name}>
                <button 
                onClick={()=>navigate(item.slug)}
                className=""
                >{item.value}</button>
              </li>
            ) : null
            )}

            {authStatus && (
              <li>
                <LogoutButton/>
              </li>
            )}

          </ul>



        </nav>
      </Container>
    </header>
  );
}

export default header;
