import { Route, Routes } from "react-router-dom";
import "./App.css";

import About from "./Pages/About/About";
import Login from "./Pages/Authentication/Login/Login";
import Requreauth from "./Pages/Authentication/Requreauth/Requreauth";
import Signup from "./Pages/Authentication/Signup/Signup";
import Socialauth from "./Pages/Authentication/Socialauth/Socialauth";

import Blog from "./Pages/Blog/Blog";
import Cheackout from "./Pages/Cheackout/Cheackout";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Sheared/Footer/Footer";
import Header from "./Pages/Sheared/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/social" element={<Socialauth />}></Route>
        <Route
          path="/cheackout"
          element={
            <Requreauth>
              <Cheackout />
            </Requreauth>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
