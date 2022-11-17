
import './App.css';
import Header from './Pages/Header/Header';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Admin/Dashboard';
import Compare from './Pages/Compare/Compare';
function App() {
  return (
   <div>
         <Header></Header>
         <Routes>
         <Route path="/" element={<Home></Home>} />
         <Route path="compare/:_id" element={<Compare></Compare>} />
         <Route path="/admin/dashboard" element={<Dashboard></Dashboard>} />
        </Routes>
   </div>
  );
}

export default App;
