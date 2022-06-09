import { Route, Routes } from 'react-router-dom';

import Home from './routes/home/home.component';

import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default App;
