import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter';

// Test Constants
const COUNT_ELEMENT_TESTID = 'count';
const COUNT_LABEL_TEXT = /count/i;
const TEST_RANGE = Math.pow(2, 15);

// Elements that are being tested
let countElement, incrementButton, decrementButton;

// Renders element to be tested before each test
beforeEach(() => {
  render(<Counter />);

  countElement = screen.getByTestId(COUNT_ELEMENT_TESTID);
  incrementButton = screen.getByText('+');
  decrementButton = screen.getByText('-');
})

// Test Suite
test('renders counter message', () => {
  const countLabelElement = screen.getByText(COUNT_LABEL_TEXT);
  expect(countLabelElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(countElement.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  for(let i = 0; i <= TEST_RANGE; i++) {
    expect(countElement.textContent).toBe(i.toString());
    fireEvent.click(incrementButton);
  }
});

test('clicking - decrements the count', () => {
  for(let i = 0; i >= TEST_RANGE * -1; i--) {
    expect(countElement.textContent).toBe(i.toString());
    fireEvent.click(decrementButton);
  }
});
