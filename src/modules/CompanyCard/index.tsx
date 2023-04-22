import { FC } from 'react';
import { Avatar, Button } from "antd";
import Text from "antd/lib/typography/Text";
import styles from "./CompanyCard.module.css"
import cs from 'classnames'
import { useNavigate } from "react-router-dom";

export type CompanyCardProps = {
  name: string,
  collapsed: boolean
}

const CompanyCard: FC<CompanyCardProps> = (props) => {
  const {
    name,
    collapsed
  } = props

  const navigate = useNavigate()

  return (
    <Button
      type="text"
      className={cs(styles.root, collapsed ? styles.rootBlock : null )}
      onClick={() => navigate('/companyProfile')}
    >
      <Avatar
        style={{
          backgroundColor: '#f56a00'
        }}
      >
        П
      </Avatar>

      {
        !collapsed ? (
          <div>
            <Text style={{margin: 'auto', display: 'block', color: "white"}} strong>{name}</Text>
            <Text style={{margin: 'auto', color: "white"}}>Исполнитель</Text>
          </div>
        ) : null
      }
    </Button>
  );
};

export default CompanyCard;
