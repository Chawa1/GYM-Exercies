import React from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';
/* import { Box } from '@mui/material';   */


import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";

function App() {
  return (
<div>App</div>

   /*  <Box width='400px'>
 <Navbar/> 
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/exercise/:id" element={<ExerciseDetail/>} />
</Routes>
</Box>  */
  );
}

export default App;
