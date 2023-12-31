import "./App.css";
import {Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage"
import AllBeersPage from "./pages/AllBeersPage"
import RandomBeerPage from "./pages/RandomBeerPage"
import AddBeerPage from "./pages/AddBeerPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"
import Error from "./pages/Error"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/beers" element={<AllBeersPage />}/>
        <Route path="/random-beer" element={<RandomBeerPage />}/>
        <Route path="/new-beer" element={<AddBeerPage />}/>
        <Route path="/beers/:beerId" element={<BeerDetailsPage />}/>

        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
