import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Customers from './pages/Customers';
import Aside from './components/Aside';

function App() {
  return (
    <div className="App">
      <Aside/>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/customers" element={<Customers/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
