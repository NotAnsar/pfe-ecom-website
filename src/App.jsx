import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import { Header } from './components/Header/Header';
import { Chekout } from './pages/Chekout';
import { Home } from './pages/Home';
import { Profile } from './pages/profile';
import { Shop } from './pages/Shop';
import { Error } from './pages/Error';
import { ShoppingBasket } from './components/ShoppingBasket/ShoppingBasket';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <ShoppingBasket />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/checkout' element={<Chekout />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
