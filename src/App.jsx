import React from "react";
import BarcodePage from "../src/pages/barcodePage/BarcodePage"
import CandidatesPage from "../src/pages/candidatesPage/CandidatesPage"
import IntroPage from "../src/pages/introPage/IntroPage"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<IntroPage />} />
        <Route  path="/scanner" element={<BarcodePage />} />
        <Route  path="/candidate" element={<CandidatesPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

