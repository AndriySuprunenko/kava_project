// Imports
import Header from './components/Header';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Home from './components/Home';
// SCSS
import './styles/index.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Banner />
      <Home />
    </div>
  );
};

export default App;
