import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page0 from "./pages/Page0";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Page0 />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;
