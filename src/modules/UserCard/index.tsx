import { FC } from 'react';
import { Avatar, Button } from "antd";
import Title from "antd/lib/typography/Title";
import styles from "./UserCard.module.css"

export type UserCardProps = {
  name: string
}

const UserCard: FC<UserCardProps> = (props) => {
  return (
    <Button type="text" className={styles.root}>
      <Avatar/>
      <Title level={5} style={{margin: 'auto'}}>John Browne</Title>
    </Button>
  );
};

export default UserCard;
