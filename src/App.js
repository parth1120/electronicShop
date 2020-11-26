import React from 'react'
import './bootstrap.min.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <>
      <Header />
      <div className="row" id="body-row">
        <Sidebar />
        <ProductScreen />
      </div>
    </>
  );
}

export default App;