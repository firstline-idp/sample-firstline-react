import { useFirstline } from "@first-line/firstline-react";

import PostList from "../components/PostList";
import Layout from "../components/Layout";
import Button from "../components/Button";

const Home = () => {
  const { user, isAuthenticated, loginWithRedirect } = useFirstline();

  return (
    <Layout>
      {(isAuthenticated && user) ? (
        <div>
          <h2 className="text-2xl mb-4">Welcome {user.email}.</h2>
          <PostList />
        </div>
      ) : (
        <div>
          <h2 className="text-2xl mb-2">Please sign-in.</h2>
          <Button onClick={() => loginWithRedirect()}>Login</Button>
        </div>
      )}
    </Layout>
  );
};

export default Home;
