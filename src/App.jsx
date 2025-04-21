import './App.css';
import './index.css';
import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import Jaringan from './Components/Jaringan.jsx';
import Data from './Components/Data.jsx';
import Sistem from './Components/Sistem.jsx';

function App() {
  return (
    <div>
      <link
        href="https://api.fontshare.com/v2/css?f[]=quicksand@500&f[]=britney@400&display=swap"
        rel="stylesheet"
      ></link>
      <Header />
      <div className="flex flex-col">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Home />
        </section>
        <section id="jaringan" className="min-h-screen flex items-center justify-center">
          <Jaringan />
        </section>
        <section id="data" className="min-h-screen flex items-center justify-center">
          <Data />
        </section>
        <section id="sistem" className="min-h-screen flex items-center justify-center">
          <Sistem />
        </section>
      </div>
    </div>
  );
}

export default App;
