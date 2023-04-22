import React from 'react';
import AppInterface from "../../modules/AppInterface";
import Orders from '../orders';

const Main = () => {
  return (
    <div>
      <AppInterface>
        <Orders/>
      </AppInterface>
    </div>
  );
};

export default Main;
