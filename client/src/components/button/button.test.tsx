import { expect, test, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './button.component';
import './button.styles.css';

test("should render title passed to title prop", () => {
  render(<Button title='test' />);
  expect(screen.getByText('test')).toBeDefined();
});

test("should call onClick", () => {
  const onClick = vi.fn();
  render(<Button title='test' onClick={onClick} />);

  const button = screen.getByText('test');
  fireEvent.click(button);

  expect(onClick).toHaveBeenCalled();
});

test("should not call onClick when disabled prop is true", () => {
  const onClick = vi.fn();
  render(<Button title='test' disabled={true} onClick={onClick} />);

  const button = screen.getByText('test');
  fireEvent.click(button);

  expect(onClick).not.toHaveBeenCalled();
});