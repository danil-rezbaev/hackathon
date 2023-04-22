import React from 'react';
import AppInterface from "../../modules/AppInterface";
import Orders from '../orders';
import { Outlet } from 'react-router';
import Title from 'antd/es/typography/Title';

const Main = () => {
  return (
    <div>
      <Title>Главная</Title>
    </div>
  );
};

export default Main;
