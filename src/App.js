import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Restaurant from "../src/components/Restaurant/Restaurant.js"
import Restaurants from "../src/components/Restaurants/Restaurants.js"

function App() {
  return (
    <Router>
   <Routes>
    <Route exact path="/" element={<Restaurants/>}/>
    <Route exact path="/restaurant/:id" element={<Restaurant/>}/>
   </Routes>
   </Router>


  );
}

export default App;
