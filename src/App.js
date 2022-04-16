import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';

import Home from './routes/home/home.component';
import Work from './routes/work/work.component';
import Contact from './components/contact/contact.component';
import Footer from './components/footer/footer.component';
import { Fragment } from 'react';

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='/projects' element={<Work />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
