import * as React from 'react';
import { FC } from 'react';
import { Layout, Typography } from "antd";
import Title from "antd/lib/typography/Title";

export type ErrorProps = {
  title: string,
  description?: string,
}

const Error: FC<ErrorProps> = (props) => {
  const {
    title,
    description
  } = props

  return (
    <Layout>
      <Title>
        {title}
      </Title>
      <Typography>
        {description}
      </Typography>
    </Layout>
  );
}

export default Error
