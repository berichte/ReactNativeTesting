import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';

import {Button} from '../Button';

describe('Button', () => {
  it('should render the title "A Button for testing"', () => {
    const {toJSON} = render(
      <Button title="A Button for testing" onPress={() => {}} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('should render the title "TESTING"', () => {
    const {toJSON} = render(<Button title="TESTING" onPress={() => {}} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('should call onPress when pressed', () => {
    const onPress = jest.fn();
    render(<Button title="A Button for testing" onPress={onPress} />);
    fireEvent(screen.getByTestId('my-button'), 'press');
    expect(onPress).toHaveBeenCalled();
  });
});
