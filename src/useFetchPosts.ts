import {useState, useEffect} from 'react';
import {Post, fetchPosts} from './fetchPosts';

export function useFetchPosts(userId: string) {
  const [data, setData] = useState<Post[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await fetchPosts(userId);
        setData(posts);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return {data, loading, error};
}
