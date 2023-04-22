import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from "./pages/main";
import Error from "./components/Error"
import Orders from './pages/orders';
import CompanyProfile from './pages/companyProfile';
import AppInterface from './modules/AppInterface';


function App() {
  return (
    <div className="App">
      <AppInterface>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='/companyProfile' element={<CompanyProfile/>} />
          <Route path='*' element={<Error title="404" description="Страница не найдена"/>} />
        </Routes>
      </AppInterface>

    </div>
  );
}

export default App;
