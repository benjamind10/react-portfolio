import Navigation from '../../components/navigation/navigation.component';
import Header from '../../components/header/header.component';
import About from '../../components/about/about.component';
import Projects from '../../components/projects/projects.component';
import Contact from '../../components/contact-me/contact-me.component';
import Footer from '../../components/footer/footer.component';

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
