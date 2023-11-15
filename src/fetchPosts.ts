import axios from 'axios';

export type Post = {
  id: string;
  title: string;
};

export async function fetchPosts(userId: string) {
  const response = await axios.get<Post[]>(
    `https://api.example.com/users/${userId}/posts`,
  );
  return response.data.map(post => ({id: post.id, title: post.title}));
}
