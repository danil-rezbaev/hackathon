import { FC } from 'react';
import { Avatar, Button } from "antd";
import Title from "antd/lib/typography/Title";
import styles from "./UserCard.module.css"

export type UserCardProps = {
  name: string
}

const UserCard: FC<UserCardProps> = (props) => {
  const {
    name
  } = props

  return (
    <Button
      type="text"
      className={styles.root}
      style={{
        padding: "5px",
        height: "auto",
        alignContent: 'center'
      }}
    >
      <Avatar/>
      <Title level={5} style={{margin: 'auto'}}>{name}</Title>
    </Button>
  );
};

export default UserCard;
