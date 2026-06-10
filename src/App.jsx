import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profiles from "./pages/Profiles";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Categories from "./pages/Categories";
import Account from "./pages/Account";
import MovieDetails from "./pages/MovieDetails";
import CategoryDetails from "./pages/CategoryDetails";
import StrangerThingsDetails from "./pages/StrangerThingsDetails";
import Trailer from "./pages/Trailer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/account" element={<Account />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/category/:id" element={<CategoryDetails />} />
        <Route path="/trailer" element={<Trailer />} />
        <Route
  path="/stranger-things"
  element={<StrangerThingsDetails />}
/>
      </Routes>
    </BrowserRouter>
  );
}