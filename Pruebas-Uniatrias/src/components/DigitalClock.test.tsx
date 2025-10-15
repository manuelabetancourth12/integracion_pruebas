import { render, screen, act } from '@testing-library/react';
import DigitalClock from './DigitalClock';

jest.useFakeTimers();

describe('DigitalClock', () => {
  it('muestra la hora en formato HH:MM:SS', () => {
    const date = new Date(2023, 0, 1, 9, 5, 7); // 09:05:07
    jest.setSystemTime(date);
    render(<DigitalClock />);
    expect(screen.getByTestId('digital-clock').textContent).toBe('09:05:07');
  });

  it('avanza correctamente con el tiempo simulado', () => {
    const date = new Date(2023, 0, 1, 10, 59, 58); // 10:59:58
    jest.setSystemTime(date);
    render(<DigitalClock />);
    expect(screen.getByTestId('digital-clock').textContent).toBe('10:59:58');
    act(() => {
      jest.advanceTimersByTime(2000); // 2 segundos
    });
    // Simular que el sistema avanza 2 segundos
    expect(screen.getByTestId('digital-clock').textContent).toBe('11:00:00');
  });
});
