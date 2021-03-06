import React, { useState } from 'react';
import{
  BrowserRouter,
Routes,
Route,
HashRouter,
} from "react-router-dom";
import Menu from './composants/Pages/Menu';
import Playground from './composants/Pages/Playground';
import './style/style.css'
import './style/media.css'

export const Switch = () => {
  const [stateDatas , setStateDatas] = useState({playerMonney : 1000 ,cryptoUnit : 'Bitcoin'}) //state data array for entire application
  return (
      <>
      <Routes>
        <Route path="/" element={<Menu stateDatas={stateDatas} setStateDatas ={setStateDatas} />} />
        <Route path="/playground" element={<Playground  stateDatas={stateDatas} setStateDatas ={setStateDatas}  />} />
      </Routes>
      </>
  )
};
function App() {
  
  return (
    <HashRouter>
      <Switch />
    </HashRouter>
  );
}

export default App;


