import axios from 'axios';

import {fetchPosts} from '../fetchPosts';

describe('fetchPosts', () => {
  it("should fetch the user's posts", async () => {
    const userId = '123';
    const expectedData = [
      {id: 1, title: 'Post 1'},
      {id: 2, title: 'Post 2'},
      {id: 3, title: 'Post 3'},
    ];
    axios.get = jest.fn().mockResolvedValue({data: expectedData});
    const result = await fetchPosts(userId);
    expect(axios.get).toHaveBeenCalledWith(
      `https://api.example.com/users/${userId}/posts`,
    );
    expect(result).toEqual(expectedData);
  });

  it('should return an empty array if the user has no posts', async () => {
    const userId = '456';
    axios.get = jest.fn().mockResolvedValue({data: []});
    const result = await fetchPosts(userId);
    expect(axios.get).toHaveBeenCalledWith(
      `https://api.example.com/users/${userId}/posts`,
    );
    expect(result).toEqual([]);
  });

  it('should throw an error if the API request fails', async () => {
    const userId = '789';
    const errorMessage = 'Network error';
    axios.get = jest.fn().mockRejectedValue(new Error(errorMessage));
    await expect(fetchPosts(userId)).rejects.toThrow(errorMessage);
    expect(axios.get).toHaveBeenCalledWith(
      `https://api.example.com/users/${userId}/posts`,
    );
  });
});
