import React from "react";
import Header from "./components/Header/Header";
import Pokemons from "./components/Pokemons/Pokemons";
import Pokemons2 from "./components/Pokemons2/Pokemons2";
import RickAndMorty from "./components/RickAndMorty/RickAndMorty";
import Addproduct from "./components/AddProduct/Addproduct";
import Users from "./components/Users/Users";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    // указываем что роутинг будет в браузере
    <BrowserRouter>
      {/* header  будет на всех наших страницах } */}
      <Header />
      <Routes>
        {/* неспоредственно сами роуты */}
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons-2" element={<Pokemons2 />} />
        <Route path="/rick-and-morty" element={<RickAndMorty />} />
        <Route path="/add" element={<Addproduct />} />
      </Routes>
      {/* footer будет на всех страницах */}
      <h1>Footer</h1>
    </BrowserRouter>

    // <div>
    // {/* <Header /> */}
    // {/* <Pokemons /> */}
    // {/* <Pokemons2 /> */}
    // {/* <RickAndMorty /> */}
    // {/* <Users /> */}
    // {/* </div> */}
  );
};

export default App;
