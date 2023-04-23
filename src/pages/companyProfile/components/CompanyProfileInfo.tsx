import React, { FC } from 'react';
import css from "../index.module.css";
import { Button, Col, Row, Space, Tag, Typography } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { Company } from "../../../types/Company";
import Link from "antd/es/typography/Link";

export type CompanyProfileInfoProps = {
  company: Company
}

const CompanyProfileInfo: FC<CompanyProfileInfoProps> = (props) => {
  const {
    company
  } = props

  return (
    <div className={css.companyCard}>
      <Row gutter={[16, 16]}>
        <Col span={15}>
          <div className={css.card}>
            <Typography>
              <Title style={{marginTop: 0}}>
                {company.title}
              </Title>
              <Paragraph className={css.companyStatus}>
                <Tag
                  style={{
                    fontSize: 12,
                    padding: '4px 5px'
                  }}
                  color={company.status ? 'success' : 'error'}
                >
                  {company.status ? 'Активная организация' : 'Неактивная организация'}
                </Tag>
              </Paragraph>
            </Typography>
            <Row>
              <Col span={5}>
                <Typography>
                  <Title level={5}>
                    ОГРН
                  </Title>
                  <Paragraph style={{opacity: '0.5'}}>
                    {`${company.ogrn}`}
                    <br></br>
                    {` от ${company.ogrnReg}`}
                  </Paragraph>
                  <Title level={5}>
                    Дата регистрации
                  </Title>
                  <Paragraph style={{opacity: '0.5'}}>
                    {`${company.dateReg}`}
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
                    {`${company.capital}`}
                  </Paragraph>
                </Typography>
              </Col>
              <Col span={12}>
                <Typography>
                  <Title level={5}>
                    Юридический адрес
                  </Title>
                  <Paragraph style={{opacity: '0.5'}}>
                    {`${company.address}`}
                  </Paragraph>
                </Typography>
                <Typography className={css.directorsTypography}>
                  <Title level={5}>
                    Руководители
                  </Title>
                  {company.manager}
                </Typography>
              </Col>
            </Row>

            <Space
              direction="horizontal"
              align="center"
            >
              <Link>
                Все реквизиты
              </Link>

              <Paragraph
                style={{
                  margin: 0,
                  color: 'gray'
                }}
              >
                (ФНС/ ПФР / ФСС / РОССТАТ)
              </Paragraph>
            </Space>

            <div style={{marginTop: '10px'}}>
              <Button type="primary">
                Все реквизиты
              </Button>
            </div>
          </div>
        </Col>

        { typeof company.reliable !== null ? (
            <Col span={9}>
              <div className={css.card}>
                <Space>
                  <Link
                    style={{fontSize: '24px'}}
                  >
                    Надежность:
                  </Link>
                  <Tag
                    style={{
                      fontSize: 16,
                      padding: '8px 10px'
                    }}
                    color={company.reliable ? 'success' : 'error'}
                  >
                    {company.reliable ? 'Высокая' : 'Низкая'}
                  </Tag>
                </Space>

                <br/>

                <Space
                  direction="horizontal"
                  size={[8, 16]}
                >
                  { company.courtCases ? (
                      <div>
                        <Title level={5}>Судебные дела</Title>
                        <Link style={{
                          margin: 0,
                          fontSize: '24px'
                        }}
                        >{ company.courtCases }</Link>
                      </div>
                    ) : null
                  }

                  { company.debt ? (
                      <div>
                        <Title level={5}>Долги</Title>
                        <Link style={{
                          margin: 0,
                          fontSize: '24px'
                        }}
                        >{ company.debt }</Link>
                      </div>
                    ) : null }
                </Space>

                <Button
                  style={{
                    marginTop: '24px'
                  }}
                  size="large"
                  block
                >
                  Получить подробный отчет
                </Button>
              </div>
            </Col>
          ) : null }
      </Row>
    </div>
  );
};

export default CompanyProfileInfo;
