import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Labs from './labs';
import HelloWorld from './labs/a6/hello-world';
import Tuiter from './tuiter';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route index path="/*"
            element={<Labs />} />
          <Route path="/hello"
            element={<HelloWorld />} />
          <Route path="/tuiter"
            element={<Tuiter active='home' />} />
          <Route path="/tuiter/explore"
            element={<Tuiter active='explore' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

