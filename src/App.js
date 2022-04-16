import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';

import Home from './routes/home/home.component';
import Work from './routes/work/work.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/projects' element={<Work />} />
      </Route>
    </Routes>
  );
};

export default App;
