import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from "./pages/main";
import Error from "./components/Error"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='*' element={<Error title="404" description="Страница не найдена"/>} />
      </Routes>
    </div>
  );
}

export default App;
