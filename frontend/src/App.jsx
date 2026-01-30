import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ColorProvider, { useColor } from "./contexts/ColorProvider";
import guitars from './data/guitars.json'; 

import "./assets/css/fonts.css";
import "./assets/css/generalstyle.css";
import "./assets/css/index.css";
import "./assets/css/mobile.css";

import loadingGif from './assets/images/loading.gif';

function AppContent({ dato, cart, addCart, deleteCart, emptyCart, error, cargando }) {
  const { isDarkTheme } = useColor();

  if (cargando) {
    return (
      <div className="loading-wrapper">
        <img src={loadingGif} alt="Cargando..." style={{ width: 50 }} />
      </div>
    );
  }
  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      {error ? (
       <div className='data-error-message'>{error.message}</div>
      ) : (
        <div>
          <Header
          dataCart={cart}
          deleteCart={deleteCart}
          emptyCart={emptyCart}
        />
        <Main
          dato={dato}
          cart={cart}
          addCart={addCart}
        />
        <Footer />
        </div>
      )}

    </div>
  );
}

export default function App() {
  const [dato, setDato] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      setDato(guitars);
      setCargando(false);
    } catch (error) {
      console.error('Error al cargar datos:', error);
      setError(error);
      setCargando(false);
    }
  }, []);

  const addCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const deleteCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const emptyCart = () => setCart([]);

  return ( 
    <ColorProvider>
      <BrowserRouter>
        <AppContent
          dato={dato}
          cart={cart}
          addCart={addCart}
          deleteCart={deleteCart}
          emptyCart={emptyCart}
          error={error}
          cargando={cargando}
        />
      </BrowserRouter>
    </ColorProvider>
  );
}
