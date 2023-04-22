import React from 'react';
import { Button, Result } from "antd";

const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Страница не найдена."
      extra={<Button type="primary">Перейти на главную</Button>}
    />
  );
};

export default NotFound;
