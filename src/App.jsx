import React from 'react';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import NotificationToast from './components/NotificationToast';
import './App.css';

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={`app-wrapper ${theme}`}>
      <Navbar />
      <main className="main-content">
        <h1>
          État Global : <code>useContext</code> & <code>Redux Toolkit</code>
        </h1>
        <p className="subtitle">
          Séance 6 : coexistence d'un état léger (thème via Context) et d'un état métier
          transactionnel (panier via Redux Toolkit).
        </p>
        <div className="layout-grid">
          <section className="panel">
            <h3>📦 Catalogue Produits</h3>
            <ProductList />
          </section>
          <aside className="panel">
            <Cart />
          </aside>
        </div>
      </main>
      <NotificationToast />
    </div>
  );
}
