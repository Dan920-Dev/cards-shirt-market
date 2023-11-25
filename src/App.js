// App.js
import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import ProductList from './components/ProductList'; // Asegúrate de que la ruta de importación sea correcta.

function App() {
  const [endpoint, setEndpoint] = useState('all'); // Estado inicial del endpoint.

  const handleSelectEndpoint = (newEndpoint) => {
    console.log('Updating endpoint to: ', newEndpoint);
    setEndpoint(newEndpoint);
  };

  return (
    <>
      <NavigationBar onSelectEndpoint={handleSelectEndpoint} />
      <ProductList endpoint={endpoint} />
    </>
  );
}

export default App;
