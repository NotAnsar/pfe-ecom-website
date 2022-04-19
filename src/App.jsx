import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import { Header } from './components/Header/Header';
import { CheckOut } from './pages/CheckOut';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Error } from './pages/Error';
import { ShoppingBasket } from './components/ShoppingBasket/ShoppingBasket';
import { Menu } from './components/ShoppingBasket/Menu';
import Footer from './components/Footer/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import { WishList } from './components/Wishlist/WishList';
import { useEffect } from 'react';
import { fetchData } from './store/productsSlice';
import { useDispatch } from 'react-redux';
import Product from './pages/Product';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <Fragment>
      <Header />
      <ShoppingBasket />
      <WishList />
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
