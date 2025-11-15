import { Suspense, ReactNode } from 'react';
import LoadingState from './LoadingState';
import Header from './Header';

interface PokemonListLayoutProps {
  children: ReactNode;
  backgroundColor: string;
}

const PokemonListLayout = ({ children, backgroundColor }: PokemonListLayoutProps) => {
  return (
    <div className={`min-h-screen bg-gradient-to-br ${backgroundColor}`}>
      <main className="px-4 py-6 mx-auto max-w-7xl">
        <Header />

        <Suspense fallback={<LoadingState />}>
          {children}
        </Suspense>
      </main>
    </div>
  );
};

export default PokemonListLayout;
