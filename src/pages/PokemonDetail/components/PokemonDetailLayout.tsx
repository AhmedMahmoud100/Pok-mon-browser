import { Suspense, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import PokemonDetailSkeleton from './PokemonDetailSkeleton';
import Button from '../../../components/Button';

interface PokemonDetailLayoutProps {
  children: ReactNode;
}

const PokemonDetailLayout = ({ children }: PokemonDetailLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 py-4 bg-gradient-to-br from-(--color-bg-detail-start) to-(--color-bg-detail-end)">
      <div className="mx-auto max-w-7xl">
        <Button
          onClick={() => navigate(-1)}
          variant="secondary"
          className="mb-3 gap-2!"
          size='sm'
          startIcon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          }
        >
          Back to List
        </Button>

        <Suspense fallback={<PokemonDetailSkeleton />}>
          <main className='max-w-3xl mx-auto'>
            {children}
          </main>
        </Suspense>
      </div>
    </div>
  );
};

export default PokemonDetailLayout;
