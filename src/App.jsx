import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import { FormProvider } from './context/FormContext';

function App() {
  return (
    <FormProvider>
      <Router>
        <div className="bg-cover bg-center min-h-screen h-screen" style={{ backgroundImage: "url('/bg2.png')" }}>
          <div className="flex flex-col h-full">
            <div className="flex-1 flex">
              <Routes>
                <Route path="/" element={<Page1/>} />
                <Route path="/page2" element={<Page2/>} />
                <Route path="/page3" element={<Page3/>} />
              </Routes>
            </div>
            <div className="bg-gray-800 text-white p-4 flex justify-center space-x-4">
              <Link to="/" className="px-4 py-2 bg-blue-500 rounded">1</Link>
              <Link to="/page2" className="px-4 py-2 bg-green-500 rounded">2</Link>
              <Link to="/page3" className="px-4 py-2 bg-red-500 rounded">3</Link>
            </div>
          </div>
        </div>
      </Router>
    </FormProvider>
  );
}

export default App;
