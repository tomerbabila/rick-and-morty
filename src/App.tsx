import React from 'react';
import './App.css';
import { Layout, Home } from './pages';
import { FavoritesProvider } from 'state/FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <Layout>
        <Home />
      </Layout>
    </FavoritesProvider>
  );
}

export default App;
