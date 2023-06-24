import { useFirstline } from "@first-line/firstline-react";

import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const { isLoading } = useFirstline();

  const content = isLoading ? null : children;

  return (
    <div>
      <Navbar />
      <div className="lg:px-12 px-6 py-8">
        {content}
      </div>
    </div>
  )
};

export default Layout;