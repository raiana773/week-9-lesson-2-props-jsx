import React, { useState } from "react";
import Header from "./components/Header/Header";
import Pokemons from "./components/Pokemons/Pokemons";
import Pokemons2 from "./components/Pokemons2/Pokemons2";
import RickAndMorty from "./components/RickAndMorty/RickAndMorty";
import Addproduct from "./components/AddProduct/Addproduct";
import Users from "./components/Users/Users";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import List from "./components/List/List";
import Edit from "./components/Edit/Edit";

const App = () => {
  //! CRUD - Create, Read, Update, Delete
  const API = "http://localhost:8000/products"; //1

  //! для хранения данных
  const [products, setProducts] = useState([]);

  //! Create - Post

  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
    getProducts();
  }

  //! Read - Get
  async function getProducts() {
    let res = await axios(API);
    setProducts(res.data);
  }
  console.log(products);
  return (
    // указываем что роутинг будет в браузере
    <BrowserRouter>
      {/* header  будет на всех наших страницах } */}
      <Header />
      <Routes>
        {/* неспоредственно сами роуты */}
        <Route
          path="/"
          element={<List products={products} getProducts={getProducts} />}
        />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons-2" element={<Pokemons2 />} />
        <Route path="/rick-and-morty" element={<RickAndMorty />} />
        <Route path="/add" element={<Addproduct addProduct={addProduct} />} />
        <Route path="/edit/:id" element={<Edit />} />
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
