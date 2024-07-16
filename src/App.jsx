import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import { FormProvider } from './context/FormContext';
import StartingPage from './pages/StartingPage';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <FormProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<StartingPage />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2/>} />
            <Route path="/page3" element={<Page3/>} />
          </Routes>
        </Router>
      </UserProvider>
    </FormProvider>
  );
}

export default App;
