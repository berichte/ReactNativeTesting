import React from 'react';
import {render, act} from '@testing-library/react-native';
import {useFetchPosts} from '../useFetchPosts';
import PostList from '../PostList';

jest.mock('../useFetchPosts');

describe('PostList', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render loading state', () => {
    (useFetchPosts as jest.Mock).mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const {getByText} = render(<PostList userId="123" />);
    expect(getByText('Loading...')).toBeTruthy();
  });

  it('should render error state', () => {
    const errorMessage = 'Network error';
    (useFetchPosts as jest.Mock).mockReturnValue({
      data: null,
      loading: false,
      error: new Error(errorMessage),
    });
    const {getByText, toJSON} = render(<PostList userId="456" />);

    expect(getByText(`Error: ${errorMessage}`)).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render post list', async () => {
    const expectedData = [
      {id: 1, title: 'Post 1'},
      {id: 2, title: 'Post 2'},
      {id: 3, title: 'Post 3'},
    ];
    (useFetchPosts as jest.Mock).mockReturnValue({
      data: expectedData,
      loading: false,
      error: null,
    });
    const {getByText, toJSON} = render(<PostList userId="789" />);
    await act(async () => {
      expectedData.forEach(post => {
        expect(getByText(post.title)).toBeTruthy();
      });
    });
    expect(toJSON()).toMatchSnapshot();
  });
});
