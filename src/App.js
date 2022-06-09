import { Route, Routes } from 'react-router-dom';

import Home from './routes/home/home.component';
import NoMatch from './routes/no-match/no-match.component';

import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
