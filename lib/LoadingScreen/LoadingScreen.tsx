import { useLoading } from './LoadingContext';
import './LoadingScreen.css';


export const LoadingScreen = ({text}: {text: string}) => {
  const { isLoading } = useLoading();

  if (!isLoading) {
    return null;
  }

  return (
    <div className="loading-screen">
      <div className="loadingText">{text}</div>
    </div>
  );
};

export default LoadingScreen;