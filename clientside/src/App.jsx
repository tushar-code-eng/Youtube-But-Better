import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Wrapper from "./components/Wrapper/Wrapper.jsx";
import "./App.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home/Home.jsx";
import Videos from "./components/pages/Videos/Videos.jsx";
import SignIn from "./components/pages/SignIn/SignIn.jsx"
import Search from "./components/pages/Search/Search.jsx";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <div>
            <Sidebar />
          </div>
          <div>
            <Navbar />
            <Routes>
            <Route path="/">
              <Route index element={<Home type="random" />} />
              <Route path="trends" element={<Home type="trend" />} />
              <Route path="subscriptions" element={<Home type="sub" />} />
              <Route path="search" element={<Search />} />
              <Route path='signin' element={<SignIn />} />
              <Route path="video">
                <Route path=":id" element={<Videos />} />
              </Route>
            </Route>
          </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
