import React, { useEffect, useState } from 'react';
import NavBar from './components/navBar/NavBar';
import { PreLoader } from './components/preLoader/PreLoader';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return !isLoading ? (
    <>
      <NavBar />
      <div className="flex flex-col text-7xl h-full items-center justify-center text-black-700">
        Main
      </div>
    </>
  ) : (
    <PreLoader />
  );
};

export default App;
