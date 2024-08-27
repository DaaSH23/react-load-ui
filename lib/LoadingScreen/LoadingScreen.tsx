import React from 'react';
import { useLoading } from './LoadingContext';
import './styles.css';

export interface LoadingScreenProps {
  text?: string;
  spinner?: boolean;
  spinnerSize?: number;
  backgroundColor?: string;
  textColor?: string;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  text = "Loading...",
  spinner = true,
  spinnerSize = 30,
  backgroundColor = 'rgba(0, 0, 0, 0.5)',
  textColor = '#fff',
}) => {
  const { isLoading } = useLoading();

  if (!isLoading) {
    return null;
  }

  return (
    <div className='loading-screen' style={{ backgroundColor: backgroundColor }}>
      <div className='loading-content'>
        {spinner && (
          <div
            className="spinner"
            style={{ width: spinnerSize, height: spinnerSize }}
          ></div>
        )}
        <div className='loading-text-container'>
          <div
            className="loadingText"
            style={{ color: textColor }}
          >{text}</div>
        </div>
      </div>
    </div>
  );
};