import { Route, Routes } from 'react-router';
import './App.css';
import Detail from './components/detail/detail';
import Home from './components/home/home';
import NotMatch from './components/notMatch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailpages" element={<Detail />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>

    </div>
  );
}

export default App;
