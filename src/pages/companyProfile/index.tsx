import { Col, Row } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'
import logo from './images/logo.png'
import css from './index.module.css'
import Paragraph from 'antd/es/typography/Paragraph'
import { useAppSelector } from "../../hooks/redux";
import CompanyProfileInfo from "./components/CompanyProfileInfo";
import CompanyProfileAdd from "./components/CompanyProfileAdd";

function CompanyProfile() {
  const { company } = useAppSelector(store => store.user)

  // const [company, setCompany] = useState({
  //   fullName: 'Публичное акционерное общество',
  //   name: 'Перспектива',
  //   desc: 'Субподрядчик',
  //   status: 'Действующая компания',
  //   ogrn: '1027777708012',
  //   ogrnDate: '2 августа 2002 г.',
  //   inn: '12342134097',
  //   kpp: '142390846930',
  //   registrationDate: '25.02.1993',
  //   fund: '118 367 563 500 руб.',
  //   adress: '117420, город Москва, улица Наметкина, дом 16',
  //   directors: {
  //     tile: 'Ген. директор',
  //     fullName: 'Смирнов Виталий Евгеньевич',
  //     date: '27 мая 2009 г.'
  //   }
  // });

  return (
    <div className={css.root}>
      <div className={css.header}>
          <Row >
              <Col span={24} className={css.headerRow}>
                  <Title level={4} style={{margin: 0}}>Страница компании</Title>
              </Col>
          </Row>
          <Row style={{marginTop: '15px'}}>
            <div className={css.companyInfo}>
              <img src={logo} alt=""/>
              <div>
                <Title level={4} style={{margin: 0}}>
                  {company?.title ?? "Аноним"}
                </Title>
                <Paragraph  style={{margin: 0}}>
                  Исполнитель
                </Paragraph>
              </div>
            </div>
          </Row>
      </div>

      { company
          ? <CompanyProfileInfo company={company}/>
          : <CompanyProfileAdd />
      }
    </div>

  )
}

export default CompanyProfile
