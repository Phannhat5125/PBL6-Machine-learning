import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import { RegionProvider } from './contexts/RegionContext';
import './App.css'

function App() {
  return (
    <RegionProvider>
      <Header />
      <Navigation />
      <Layout />
      <Footer />
    </RegionProvider>
  );
}

export default App
