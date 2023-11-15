import React from 'react';
import {View, Text} from 'react-native';
import {useFetchPosts} from './useFetchPosts';

interface PostListProps {
  userId: string;
}

const PostList: React.FC<PostListProps> = ({userId}) => {
  const {data, loading, error} = useFetchPosts(userId);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {(error as Error).message}</Text>;
  }

  return (
    <View>
      {data?.map(post => (
        <View key={post.id}>
          <Text>{post.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default PostList;
