import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Work from './routes/work/work.component';
import ContactMe from './routes/contact-me/contact-me.component';
import Footer from './components/footer/footer.component';
import Resume from './routes/resume/resume.component';

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='/projects' element={<Work />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<ContactMe />} />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
