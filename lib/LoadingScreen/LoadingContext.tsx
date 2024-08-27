import React, {createContext, ReactNode, useContext, useState} from "react";

export interface LoadingContextProps {
    isLoading: Boolean;
    showLoadScreen: () => void;
    hideLoadScreen: () => void;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

export const useLoading = (): LoadingContextProps => {
    const context = useContext(LoadingContext);
    if (context === undefined) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
}

export interface LoadingProviderProps {
    children: ReactNode;
  }

  export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
  
    const showLoadScreen = () => setIsLoading(true);
    const hideLoadScreen = () => setIsLoading(false);
  
    return (
      <LoadingContext.Provider value={{ isLoading, showLoadScreen, hideLoadScreen }}>
        {children}
      </LoadingContext.Provider>
    );
  };