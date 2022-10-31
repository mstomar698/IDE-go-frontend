import React, { useEffect, useState } from 'react';
import NavBar  from './components/navBar/NavBar';
import { PreLoader } from './components/preLoader/PreLoader';
import social  from './components/social/Social';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {!isLoading && <NavBar />}
      <>
        {!isLoading ? (
          <div>
            <PreLoader />
          </div>
        ) : (
          <>
            <div className="flex flex-col h-full items-center justify-center text-black-700">
              Main
            </div>
          </>
        )}
      </>
    </>
  );
};

export default App;
