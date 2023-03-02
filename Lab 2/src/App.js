import Counter from './views/counter'
import Home from './components/home/home'
import Shop from './components/shop/shop';
import About from './components/about/about';
import Navbar from './components/navbar/navbar';
import NotFound from './components/notFount/notFound';
import Details from './components/shop/details';
import {BrowserRouter, Routes, Route} from 'react-router-dom' 


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route element={<Counter />} path='/count'/>
         <Route element={<Home />} path='/'/>
         <Route element={<Shop />} path='/shop'/>
         <Route element={<About />} path='/about'/>
         <Route element={<Details />} path='/shop/:id'/>
         <Route element={<NotFound />} path='*'/>
      </Routes>  
    </BrowserRouter>   
  );
}

export default App;
