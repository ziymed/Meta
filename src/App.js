import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Menu from './pages/Menu'
import BookingPage from './pages/BookingPage'
import OrderOnline from './pages/OrderOnline'
import Login from './pages/Login'

function App() {

  return (
    <>
      <Nav />
      <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/online-menu' element={ <Menu /> } />
          <Route path='/reservations' element={ <BookingPage /> } />
          <Route path='/order-online' element={ <OrderOnline /> } />
          <Route path='/login' element={ <Login /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
