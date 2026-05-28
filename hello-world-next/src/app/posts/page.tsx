import React from 'react';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

// Data fetching happens directly inside the async component
async function getPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
  return response.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>List of Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}