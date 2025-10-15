import { useState } from 'reac';

interface ColorPickerProps {
  initialColor?: string;
}

export default function ColorPicker({ initialColor = '#ffffff' }: ColorPickerProps) {
  const [color, setColor] = useState<string>(initialColor);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Selector de Colores
        </h1>
        
        <div 
          data-testid="color-display"
          className="w-full h-48 rounded-lg mb-6 border-4 border-gray-300 transition-colors duration-300"
          style={{ backgroundColor: color }}
        />
        
        <div className="flex flex-col gap-4">
          <label 
            htmlFor="color-input" 
            className="text-lg font-semibold text-gray-700"
          >
            Selecciona un color:
          </label>
          
          <input
            id="color-input"
            data-testid="color-input"
            type="color"
            value={color}
            onChange={handleColorChange}
            className="w-full h-12 cursor-pointer rounded border-2 border-gray-300 hover:border-gray-400 transition-colors"
          />
          
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
            <span className="text-gray-600 font-medium">Color actual:</span>
            <span 
              data-testid="color-value"
              className="font-mono text-lg font-bold text-gray-800"
            >
              {color.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

