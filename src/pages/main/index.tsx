import React from 'react';
import AppInterface from "../../modules/AppInterface";
import Orders from '../orders';
import { Outlet } from 'react-router';

const Main = () => {
  return (
    <div>
      <AppInterface>
        <Outlet/>
      </AppInterface>
    </div>
  );
};

export default Main;
