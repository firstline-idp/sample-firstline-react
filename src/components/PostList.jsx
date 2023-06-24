import { useState, useEffect } from "react";
import { useFirstline } from "@first-line/firstline-react";

import Button from "./Button";

const secureRequest = request => () => {
  request().then().catch(e => {
    console.error("Request failed.", e);
    window.alert("Request failed. Logged error to console. Is your backend running?");
  });
};

const PostList = () => {
  const { getAccessToken } = useFirstline();
  const [posts, setPosts] = useState(null);
  const [postText, setPostText] = useState("");

  useEffect(() => {
    const loadPosts = secureRequest(async () => {
      const accessToken = await getAccessToken();
      const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const loadedPosts = await response.json();
      setPosts(loadedPosts);
    });

    loadPosts();
  }, []);

  const handleTextChange = e => setPostText(e.target.value);
  const createPost = secureRequest(async () => {
    const data = { text: postText };
    const accessToken = await getAccessToken();
    const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const newPost = await response.json();

    const newPosts = posts || [];
    setPosts([ ...newPosts, newPost ]);
    setPostText("");
  });
  
  const getDeletePost = id => secureRequest(async () => {
    const accessToken = await getAccessToken();
    await fetch(`${process.env.REACT_APP_API_URL}/posts/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    });

    const newPosts = posts || [];
    setPosts(newPosts.filter(post => post.id !== id));
  });

  return (
    <div>
      <h3 className="text-xl font-medium mb-1">Posts created by you</h3>
      {!posts ? (
        <p>Loading ...</p>
      ) : (
        posts.length === 0 ? (
        <p>No posts exist so far.</p>
      ) : (
        <ul className="max-w-md divide-y divide-slate-200">
          {posts.map(post => (
            <li key={post.id} className="flex flex-row items-center justify-between">
              <p className="text-lg py-2">{post.text}</p>
              <div className="py-2">
                <Button onClick={getDeletePost(post.id)} secondary>Delete</Button>
              </div>
            </li>
          ))}
        </ul>
      ))}
      <div className="mt-5">
        <h3 className="text-xl font-medium mb-1">Add a post</h3>
        <textarea value={postText} onChange={handleTextChange} id="message" rows="4" className="block p-2.5 w-full max-w-md text-sm rounded-lg border border-slate-200 mb-2" placeholder="Your post ..." />
        <Button onClick={createPost}>Create</Button>
      </div>
    </div>
  );
};

export default PostList;