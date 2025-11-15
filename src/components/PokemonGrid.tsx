import { ReactNode } from 'react';

interface PokemonGridProps {
  children: ReactNode;
}

const PokemonGrid = ({ children }: PokemonGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
      {children}
    </div>
  );
};

export default PokemonGrid;
