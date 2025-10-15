import { render, screen, fireEvent } from '@testing-library/react';
import SearchList from './SearchList';

describe('SearchList', () => {
  it('muestra todos los elementos inicialmente', () => {
    render(<SearchList />);
    const items = screen.getAllByRole('listitem');
    // Hay 8 nombres en la lista
    expect(items.length).toBe(8);
  });

  it('filtra los nombres que coincidan', () => {
    render(<SearchList />);
    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'lu' } });
    const items = screen.getAllByRole('listitem');
    // Luis y Lucía
    expect(items.length).toBe(2);
    expect(items[0].textContent?.toLowerCase()).toContain('lu');
    expect(items[1].textContent?.toLowerCase()).toContain('lu');
  });

  it('muestra "No encontrado" si no hay coincidencias', () => {
    render(<SearchList />);
    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'zzz' } });
    expect(screen.getByText('No encontrado')).toBeInTheDocument();
  });
});
