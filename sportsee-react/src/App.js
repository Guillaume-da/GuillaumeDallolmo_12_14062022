import { React } from "react";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
