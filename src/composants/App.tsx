import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './Index';

export default function App() {

  const [image, setImage] = React.useState();
	const [role, setRole] = React.useState(localStorage.getItem('role'));

  //new Route for test page Home.js by thomas
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}/>
        </Routes>
      </BrowserRouter>
  );
}