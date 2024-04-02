import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Offer from "./components/Offer";
import Help from "./components/Help";
import SignIn from "./components/SignIn";
import Cart from "./components/Cart";
import RestroMenu from "./components/RestroMenu";
import { Provider } from "react-redux";
import Appstore from "./utils/redux/AppStore";
import Search from "./components/Search";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Provider store={Appstore}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Offer" element={<Offer />} />
            <Route path="/help" element={<Help />} />
            <Route path="/Singn" element={<SignIn />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Restorent/:restroID" element={<RestroMenu />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
