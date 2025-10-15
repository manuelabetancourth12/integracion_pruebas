import { render, screen, fireEvent, act } from '@testing-library/react';
import CountdownTimer from './CountdownTimer';

jest.useFakeTimers();

describe('CountdownTimer', () => {
  it('muestra el tiempo inicial correctamente', () => {
    render(<CountdownTimer />);
    const input = screen.getByTestId('countdown-input');
    fireEvent.change(input, { target: { value: '5' } });
    const button = screen.getByTestId('start-btn');
    fireEvent.click(button);
    expect(screen.getByTestId('countdown-value').textContent).toBe('5');
  });

  it('disminuye en intervalos de un segundo', () => {
    render(<CountdownTimer />);
    const input = screen.getByTestId('countdown-input');
    fireEvent.change(input, { target: { value: '3' } });
    const button = screen.getByTestId('start-btn');
    fireEvent.click(button);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByTestId('countdown-value').textContent).toBe('2');
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByTestId('countdown-value').textContent).toBe('1');
  });

  it('se detiene en 0', () => {
    render(<CountdownTimer />);
    const input = screen.getByTestId('countdown-input');
    fireEvent.change(input, { target: { value: '2' } });
    const button = screen.getByTestId('start-btn');
    fireEvent.click(button);
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getByTestId('countdown-value').textContent).toBe('0');
  });
});
