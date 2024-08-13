

import './App.css'
import Nav from "./components/Nav.tsx";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header.tsx";

function App() {


  return (
      <>
        <Nav/>
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/Open" />
          <Route path="/Done" />
          <Route path="/New" />
        </Routes>
      </>
  )
}

export default App
