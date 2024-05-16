import './index.css';
import './Styles/styles.css'
import Header from './Layouts/Header.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Skills from './Pages/Skills.js';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
