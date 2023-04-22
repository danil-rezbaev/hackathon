import { Col, Row, Typography } from 'antd'
import Title from 'antd/es/typography/Title'
import React, {useState} from 'react'
import logo from './images/logo.png'
import css from './index.module.css'
import Paragraph from 'antd/es/typography/Paragraph'

function CompanyProfile() {
  const [company, setCompany] = useState({
    fullName: 'Публичное акционерное общество',
    name: 'Перспектива',
    desc: 'Субподрядчик',
    status: 'Действующая компания',
    ogrn: '1027777708012',
    ogrnDate: '2 августа 2002 г.',
    inn: '12342134097',
    kpp: '142390846930',
    registrationDate: '25.02.1993',
    fund: '118 367 563 500 руб.',
    adress: '117420, город Москва, улица Наметкина, дом 16',
    directors: {
      tile: 'Ген. директор',
      fullName: 'Смирнов Виталий Евгеньевич',
      date: '27 мая 2009 г.'
    }
  });

  return (
    <div>
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
                  {company.name}
                </Title>
                <Paragraph  style={{margin: 0}}>
                  {company.desc}
                </Paragraph>
              </div>
            </div>
          </Row>
      </div>

      <div className={css.companyCard}>
        <Row>
          <Col span={16}>
            <Typography>
              <Title style={{marginTop: 0}}>
                {company.fullName + ' ' + company.name}
              </Title>
              <Paragraph className={css.companyStatus}>
                {company.status}
              </Paragraph>
            </Typography>
          </Col>
        </Row>

        <Row>
          <Col span={5}>
            <Typography>
              <Title level={5}>
                ОГРН
              </Title>
              <Paragraph style={{opacity: '0.5'}}>
                {`${company.ogrn}`}
                <br></br>
                {` от ${company.ogrnDate}`}
              </Paragraph>
              <Title level={5}>
                Дата регистрации
              </Title>
              <Paragraph style={{opacity: '0.5'}}>
                {`${company.registrationDate}`}
              </Paragraph>
            </Typography>
          </Col>
          <Col span={5}>
          <Typography >
              <Title level={5}>
                ИНН/КПП
              </Title>
              <Paragraph style={{opacity: '0.5'}}>
                {`${company.inn}`}
                <br/>
                 {`${company.kpp}`}
              </Paragraph>
              <Title level={5}>
                Уставной капитал
              </Title>
              <Paragraph style={{opacity: '0.5'}}>
                {`${company.fund}`}
              </Paragraph>
            </Typography>
          </Col>
           <Col span={12}>
           <Typography>
              <Title level={5}>
                Юридический адрес
              </Title>
              <Paragraph style={{opacity: '0.5'}}>
                {`${company.adress}`}
              </Paragraph>
            </Typography>
            <Typography className={css.directorsTypography}>

              <Title level={5}>
                Руководители
              </Title>
              <Paragraph style={{opacity: '0.5'}}>
                {`${company.directors.tile}`}
              </Paragraph>
              <Paragraph className={css.directorName}>
                {`${company.directors.fullName}`}
              </Paragraph>
              <Paragraph style={{opacity: '0.5'}}>
                {`с ${company.directors.date}`}
              </Paragraph>
            </Typography>

          </Col>
        </Row>
      </div>
    </div>

  )
}

export default CompanyProfile
