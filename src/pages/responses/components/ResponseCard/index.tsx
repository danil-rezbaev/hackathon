import React, { FC } from 'react';
import styles from './ResponseCard.module.css'
import { Col, Row, Tag } from "antd";
import Link from "antd/es/typography/Link";

export type ResponseCardProps = {
  status: boolean,
  title: string,
  date: string
}

const ResponseCard: FC<ResponseCardProps> = (props) => {
  const {
    status,
    title,
    date
  } = props

  return (
    <div className={styles.root}>
      <Row>
        <Col span={5}>
          <Tag
            style={{
              fontSize: 16,
              padding: '8px 10px'
          }}
            color={status ? 'success' : 'error'}
          >
            {status ? 'Одобрено' : 'Отказано'}
          </Tag>
        </Col>
        <Col span={13}>
          <Link style={{fontSize: "16px"}}>
            {title}
          </Link>
        </Col>
        <Col span={6}>
          {date}
        </Col>
      </Row>
    </div>
  );
};

export default ResponseCard;
