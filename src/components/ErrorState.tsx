interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorState = ({ message = 'Something went wrong', onRetry }: ErrorStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="text-6xl mb-4">😕</div>
      <h2 className="text-2xl font-bold text-[var(--color-gray-800)] mb-2">Oops!</h2>
      <p className="text-(--color-text-secondary) mb-6 text-center">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-[var(--color-error-btn)] hover:bg-[var(--color-error-btn-hover)] text-[var(--color-text-inverse)] font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorState;
