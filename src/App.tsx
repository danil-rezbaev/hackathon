import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Main from "./pages/main";
import Error from "./components/Error"
import Auth from "./pages/auth";
import { App as NotificationWrapper } from "antd"
import { useAppSelector } from "./hooks/redux";

function App() {
  const { auth } = useAppSelector(store => store)
  const {pathname} = useLocation()
  const location = pathname.split('/')[1]
  const navigate = useNavigate()

  useEffect(() => {
    if(!auth.status) {
      if(location !== 'login' && location !== 'signup') {
        navigate('/auth')
      }
    }
  }, [auth])

  return (
    <div className="App">
      <NotificationWrapper>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/auth' element={<Auth/>} />
          <Route path='*' element={<Error title="404" description="Страница не найдена"/>} />
        </Routes>
      </NotificationWrapper>
    </div>
  );
}

export default App;
