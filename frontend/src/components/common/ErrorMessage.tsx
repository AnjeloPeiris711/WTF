import React from 'react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  retryLabel?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  message, 
  onRetry, 
  retryLabel = 'Try Again' 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
      <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-md mx-4">
        <div className="mb-4">
          <svg className="w-16 h-16 text-white mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        
        <h2 className="text-xl font-bold text-white mb-4">Oops! Something went wrong</h2>
        <p className="text-white/90 text-sm mb-6">{message}</p>
        
        {onRetry && (
          <button 
            onClick={onRetry}
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors font-medium"
          >
            {retryLabel}
          </button>
        )}
        
        <div className="mt-6 text-white/70 text-xs">
          <p>If the problem persists, please check:</p>
          <ul className="mt-2 space-y-1">
            <li>• Your internet connection</li>
            <li>• API key configuration</li>
            <li>• City name spelling</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;