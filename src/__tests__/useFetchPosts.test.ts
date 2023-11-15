import {renderHook} from '@testing-library/react-hooks';
import {fetchPosts} from '../fetchPosts';
import {useFetchPosts} from '../useFetchPosts';

jest.mock('../fetchPosts');

describe('useFetchPosts', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch the user's posts", async () => {
    const userId = '123';
    const expectedData = [
      {id: 1, title: 'Post 1'},
      {id: 2, title: 'Post 2'},
      {id: 3, title: 'Post 3'},
    ];
    (fetchPosts as jest.Mock).mockResolvedValue(expectedData);
    const {result, waitForNextUpdate} = renderHook(() => useFetchPosts(userId));
    expect(result.current.data).toBeUndefined();
    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeUndefined();
    await waitForNextUpdate();
    expect(result.current.data).toEqual(expectedData);
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeUndefined();
  });

  it('should handle errors', async () => {
    const userId = '456';
    const errorMessage = 'Network error';
    (fetchPosts as jest.Mock).mockRejectedValue(new Error(errorMessage));
    const {result, waitForNextUpdate} = renderHook(() => useFetchPosts(userId));
    expect(result.current.data).toBeUndefined();
    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeUndefined();
    await waitForNextUpdate();
    expect(result.current.data).toBeUndefined();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toEqual(new Error(errorMessage));
  });
});
