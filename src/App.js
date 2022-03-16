import './App.css';
import Header from './components/Header';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';


function App() {
  return (
    <Router>
    <div className='App'>
     <Header />
      <Routes>
      <Route exact path='/' element={<AllProducts />} />
      <Route exact path='/products/:productId' element={<ProductDetail />} />
      <Route exact path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
