import React, { FC } from 'react';
import styles from './ResponseContent.module.css'
import { Col, Row } from "antd";
import ResponseCard, { ResponseCardProps } from "../ResponseCard";
import Paragraph from "antd/es/typography/Paragraph";

export type ResponseContentProps = {
  data: ResponseCardProps[],
}

const ResponseContent: FC<ResponseContentProps> = (props) => {
  const {
    data
  } = props

  return (
    <div className={styles.root}>
      <Row style={{padding: '0 7px'}}>
        <Col span={5}>
          <Paragraph>
            Статус
          </Paragraph>
        </Col>
        <Col span={13}>
          <Paragraph>
            Заказ
          </Paragraph>
        </Col>
        <Col span={6}>
          <Paragraph>
            Дата
          </Paragraph>
        </Col>
      </Row>

      <div>
        { data.map((item, index) => (
          <ResponseCard
            key={index}
            status={item.status} title={item.title} date={item.date} />
        )) }
      </div>
    </div>
  );
};

export default ResponseContent;
