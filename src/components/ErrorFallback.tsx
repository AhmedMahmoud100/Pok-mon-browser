import { FallbackProps } from 'react-error-boundary';
import { useQueryClient } from '@tanstack/react-query';
import ErrorState from './ErrorState';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const queryClient = useQueryClient();

  const handleRetry = () => {
    // Clear all query errors and reset cache
    queryClient.clear();
    // Reset the error boundary
    resetErrorBoundary();
  };

  return (
    <ErrorState
      message={error?.message || 'Something went wrong. Please try again.'}
      onRetry={handleRetry}
    />
  );
};

export default ErrorFallback;
