import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import { Header } from './components/Header/Header';
import { Chekout } from './pages/Chekout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Error } from './pages/Error';
import { ShoppingBasket } from './components/ShoppingBasket/ShoppingBasket';
import Footer from './components/Footer/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import { WishList } from './components/Wishlist/WishList';
import { useEffect } from 'react';
import { fetchProductData } from './store/productsSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductData('./json/products.json'));
  }, []);

  return (
    <Fragment>
      <Header />
      <ShoppingBasket />
      <WishList />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/checkout' element={<Chekout />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
