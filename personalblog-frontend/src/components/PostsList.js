import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/posts/')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the posts!', error);
      });
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.entry}</p>
            <p><small>Posted on: {new Date(post.dateOfEntry).toLocaleDateString()}</small></p>
            <p><small>Updated on: {new Date(post.dateOfUpdate).toLocaleDateString()}</small></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
