import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import { useFirstline } from "@first-line/firstline-react";

const Logout = () => {
  const { isAuthenticated } = useFirstline();
  return (
    <Layout>
      {!isAuthenticated && <h2 className="text-2xl mb-2">You have been successfully signed out.</h2>}
      <Link to="/" className="text-primary hover:underline">Return home</Link>
    </Layout>
  );
};

export default Logout;
