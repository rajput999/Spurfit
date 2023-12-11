import Sideheader from "./components/Sideheader";
import Header from "./components/Header";
import Body from "./components/Body"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chatpage from "./components/Chatpage";
import Cartpage from "./components/Cartpage";
import Page from "./components/Page";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Sideheader/>
        <Header/>
        <Routes>
          <Route path="/" element={<Body/>} />
          <Route path="/chat" element={<Chatpage/>} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/page" element={<Page />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
