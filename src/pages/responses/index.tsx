import React, { FC } from 'react';
import { Select, Typography } from "antd";
import styles from './responses.module.css'
import Title from "antd/es/typography/Title";
import ResponseContent from "./components/ResponseContent";
import { data } from "./components/ResponseContent/data";

type ResponsesProps = unknown

const Responses: FC<ResponsesProps> = () => {
  const { Title } = Typography;

  return (
    <div className={styles.root}>
      <div className={styles.formContent}>
        <Title level={2}>Отклики на заказы</Title>
        <Select
          style={{width: 210}}
          defaultValue="default"
          options={[
            {value: 'default', label: 'По умолчанию'},
            {value: 'new', label: 'Сначала новые'},
            {value: 'old', label: 'Сначала старые'}
          ]}
        />
        <ResponseContent data={data} />
      </div>
    </div>
  );
};

export default Responses;
