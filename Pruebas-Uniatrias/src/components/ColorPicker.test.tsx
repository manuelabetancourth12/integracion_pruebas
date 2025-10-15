import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ColorPicker from './ColorPicker';

describe('ColorPicker', () => {
  it('debe renderizar con el color inicial blanco', () => {
    render(<ColorPicker />);
    
    const colorDisplay = screen.getByTestId('color-display');
    const colorInput = screen.getByTestId('color-input') as HTMLInputElement;
    const colorValue = screen.getByTestId('color-value');
    
    expect(colorDisplay).toHaveStyle({ backgroundColor: '#ffffff' });
    expect(colorInput.value).toBe('#ffffff');
    expect(colorValue).toHaveTextContent('#FFFFFF');
  });

  it('debe aceptar un color inicial personalizado', () => {
    render(<ColorPicker initialColor="#ff5733" />);
    
    const colorDisplay = screen.getByTestId('color-display');
    const colorInput = screen.getByTestId('color-input') as HTMLInputElement;
    const colorValue = screen.getByTestId('color-value');
    
    expect(colorDisplay).toHaveStyle({ backgroundColor: '#ff5733' });
    expect(colorInput.value).toBe('#ff5733');
    expect(colorValue).toHaveTextContent('#FF5733');
  });

  it('debe actualizar el div al seleccionar un nuevo color', () => {
    render(<ColorPicker />);
    
    const colorInput = screen.getByTestId('color-input') as HTMLInputElement;
    const colorDisplay = screen.getByTestId('color-display');
    const colorValue = screen.getByTestId('color-value');
    
    // Cambiar el color a rojo
    fireEvent.change(colorInput, { target: { value: '#ff0000' } });
    
    expect(colorDisplay).toHaveStyle({ backgroundColor: '#ff0000' });
    expect(colorInput.value).toBe('#ff0000');
    expect(colorValue).toHaveTextContent('#FF0000');
  });

  it('debe actualizar múltiples veces correctamente', () => {
    render(<ColorPicker />);
    
    const colorInput = screen.getByTestId('color-input') as HTMLInputElement;
    const colorDisplay = screen.getByTestId('color-display');
    
    // Primera actualización
    fireEvent.change(colorInput, { target: { value: '#00ff00' } });
    expect(colorDisplay).toHaveStyle({ backgroundColor: '#00ff00' });
    
    // Segunda actualización
    fireEvent.change(colorInput, { target: { value: '#0000ff' } });
    expect(colorDisplay).toHaveStyle({ backgroundColor: '#0000ff' });
    
    // Tercera actualización
    fireEvent.change(colorInput, { target: { value: '#ffff00' } });
    expect(colorDisplay).toHaveStyle({ backgroundColor: '#ffff00' });
  });

  it('debe renderizar todos los elementos de la interfaz', () => {
    render(<ColorPicker />);
    
    expect(screen.getByText('Selector de Colores')).toBeInTheDocument();
    expect(screen.getByText('Selecciona un color:')).toBeInTheDocument();
    expect(screen.getByText('Color actual:')).toBeInTheDocument();
    expect(screen.getByTestId('color-input')).toBeInTheDocument();
    expect(screen.getByTestId('color-display')).toBeInTheDocument();
  });
});