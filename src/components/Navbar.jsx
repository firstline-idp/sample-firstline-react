import { useFirstline } from "@first-line/firstline-react";
import { Link } from "react-router-dom";

import Button from "./Button";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useFirstline();

  return (
    <div className="h-16">
      <nav className="px-4 lg:px-8 py-4 flex justify-between items-center fixed z-10 w-full bg-white border-b border-slate-100">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/firstline-logo.svg"
            alt=""
            className="h-6"
          />
          <h1 className="font-medium tracking-wider text-xl">Firstline</h1>
        </Link>

        {isAuthenticated ? (
          <Button secondary onClick={() => logout()}>Logout</Button>
        ) : (
          <Button onClick={() => loginWithRedirect()}>Login</Button>
        )}
      </nav>
    </div>
  )
};

export default Navbar;