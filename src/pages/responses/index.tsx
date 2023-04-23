import React, { FC, useEffect, useState } from 'react';
import { Select, Typography } from "antd";
import styles from './responses.module.css'
import Title from "antd/es/typography/Title";
import ResponseContent from "./components/ResponseContent";
import { data } from "./components/ResponseContent/data";
import { ResponseCardProps } from './components/ResponseCard';

type ResponsesProps = unknown

export type FilterTypes = 'default' | boolean

const Responses: FC<ResponsesProps> = () => {
  const { Title } = Typography;

  const [filter, setFilter] = useState<FilterTypes>('default')
  const [responsesModified, setResponsesModified] = useState<ResponseCardProps[]>(data);

  const handleFilter = (value: FilterTypes) => {
    setFilter(value)
  }

  useEffect(() => {
    if (filter !== 'default') {
      const filterArray = data.filter(item => item.status === filter)
      setResponsesModified(filterArray)
    } else {
      setResponsesModified(data)
    }
  }, [filter])

  return (
    <div className={styles.root}>
      <div className={styles.formContent}>
        <Title level={2}>Отклики на заказы</Title>
        <Select
          style={{width: 210}}
          options={[
            {value: 'default', label: 'По умолчанию'},
            {value: true, label: 'Приглашение'},
            {value: false, label: 'Отказ'}
          ]}
          value={filter}
          onChange={handleFilter}
        />
        <ResponseContent data={responsesModified} />
      </div>
    </div>
  );
};

export default Responses;
