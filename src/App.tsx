import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Main from "./pages/main";
import Error from "./components/Error"
import Auth from "./pages/auth";
import { App as NotificationWrapper } from "antd"
import { useAppSelector } from "./hooks/redux";
import Orders from './pages/orders';
import CompanyProfile from './pages/companyProfile';
import AppInterface from './modules/AppInterface';

function App() {
  const { auth } = useAppSelector(store => store)
  const {pathname} = useLocation()
  const location = pathname.split('/')[1]
  const navigate = useNavigate()

  useEffect(() => {
    if(auth.status) {
      if(location === 'auth') {
        navigate('/')
      }
    } else {
      if(location !== 'auth') {
        navigate('/auth')
      }
    }
  }, [auth, location])

  return (
    <div className="App">
      <AppInterface status={auth.status}>
        <NotificationWrapper>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/auth' element={<Auth/>} />
            <Route path='/order' element={<Orders/>} />
            <Route path='/companyProfile' element={<CompanyProfile/>} />
            <Route path='*' element={<Error title="404" description="Страница не найдена"/>} />
          </Routes>
        </NotificationWrapper>
      </AppInterface>
    </div>
  );
}

export default App;
