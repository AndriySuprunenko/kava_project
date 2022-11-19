// Imports
import Header from './components/Header';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
// SCSS
import './styles/index.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Banner />
    </div>
  );
};

export default App;
