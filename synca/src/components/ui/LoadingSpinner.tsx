import React from 'react'
import { Coffee } from 'lucide-react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...' 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className="relative">
        <Coffee className={`${sizeClasses[size]} text-primary-500 animate-bounce-gentle`} />
        <div className="absolute inset-0 animate-spin">
          <div className={`${sizeClasses[size]} border-2 border-primary-200 border-t-primary-500 rounded-full`}></div>
        </div>
      </div>
      {text && (
        <p className="text-sm text-neutral-600 font-medium">{text}</p>
      )}
    </div>
  )
}

export default LoadingSpinner