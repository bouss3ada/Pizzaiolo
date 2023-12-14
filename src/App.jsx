import { useState, useEffect } from "react";
import { Suspense } from "react";
import { BarLoader } from "react-spinners";
import Accueil from "./pages/Accueil";
import { BrowserRouter,Routes ,Route } from "react-router-dom";

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center">
          <BarLoader color="#f6c400" height={4} />
        </div>
      }
    >
      
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <BarLoader color="#f6c400" height={4} />
        </div>
      ) : (

        <Accueil />
        
      )}
    </Suspense>
    
  );
};

export default App;
