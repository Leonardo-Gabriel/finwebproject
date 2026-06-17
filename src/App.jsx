import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Solutions from './components/Solutions.jsx';
import ValueSection from './components/ValueSection.jsx';
import ManagementSection from './components/ManagementSection.jsx';
import Testimonials from './components/Testimonials.jsx';
import Pricing from './components/Pricing.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <ValueSection />
        <ManagementSection />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
