import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Reports from './components/Reports';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/photos' element={<Reports />} />
      </Routes>
    </>
  );
};

export default App;
