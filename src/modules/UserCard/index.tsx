import { FC } from 'react';
import { Avatar, Button, Dropdown } from "antd";
import Title from "antd/lib/typography/Title";
import styles from "./UserCard.module.css"
import { items } from "./data";

export type UserCardProps = {
  name: string
}

const UserCard: FC<UserCardProps> = (props) => {
  const {
    name
  } = props

  return (
    <Dropdown menu={{ items }} placement="bottomLeft">
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
    </Dropdown>
  );
};

export default UserCard;
