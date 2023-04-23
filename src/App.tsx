import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Auth from "./pages/auth";
import { App as NotificationWrapper } from "antd"
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import Orders from './pages/orders';
import CompanyProfile from './pages/companyProfile';
import AppInterface from './modules/AppInterface';
import NotFound from "./pages/notFound";
import Responses from "./pages/responses";
import OrderStages from './pages/orderStages';
import { fetchAuthMe } from "./store/slices/userSlice";

function App() {
  const { user, auth } = useAppSelector(store => store)
  const {pathname} = useLocation()
  const location = pathname.split('/')[1]
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

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

  useEffect(() => {
    if (auth.status === true && user.status === 'pending') {
      if (!user.user.email || !user.user.company) {
        dispatch(fetchAuthMe())
      }
    }
  }, [user, auth])

  return (
    <div className="App">
      <AppInterface status={auth.status}>
        <NotificationWrapper>
          <Routes>
            {/*<Route path='/' element={<Main/>} />*/}
            <Route path='/' element={<Orders/>} />
            <Route path='/auth' element={<Auth/>} />
            <Route path='/responses' element={<Responses/>} />
            <Route path='/orderStages/:id' element={<OrderStages/>} />
            <Route path='/companyProfile' element={<CompanyProfile/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </NotificationWrapper>
      </AppInterface>
    </div>
  );
}

export default App;
