import { FC } from 'react';
import { Avatar, Button } from "antd";
import Text from "antd/lib/typography/Text";
import styles from "./CompanyCard.module.css"
import cs from 'classnames'
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

export type CompanyCardProps = {
  collapsed: boolean
}

const CompanyCard: FC<CompanyCardProps> = (props) => {
  const {
    collapsed
  } = props

  const { company } = useAppSelector(store => store.user)

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
        { company
            ? company?.title.charAt(1)
            : "?" }
      </Avatar>

      {
        !collapsed ? (
          <div>
            <Text style={{margin: 'auto', display: 'block', color: "white"}} strong>
              {company?.title ?? "Аноним"}
            </Text>
            <Text style={{margin: 'auto', color: "white"}}>Исполнитель</Text>
          </div>
        ) : null
      }
    </Button>
  );
};

export default CompanyCard;
