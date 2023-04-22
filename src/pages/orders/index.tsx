import { BellOutlined, FieldTimeOutlined, FilterOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Card, Col, InputNumber, Layout, Row, Select, Space, Typography } from 'antd'
import Title from 'antd/es/typography/Title'
import React, { useState } from 'react'
import css from '../orders/index.module.css';
import { Content, Header,  } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

function Orders() {

    const [orders, setOrders] = useState([
        {name: 'Замена барьерного ограждения', price: '1 500 000', desc: 'Lorem ipsum dolor sit amet consectetur. Amet condimentum lorem diam vitae commodo etiam pellentesque a sed. Elit rutrum egestas sed nunc congue facilisi. Semper ipsum nibh vitae quis urna a et. ', days: 120, clicks: 300},
        {name: 'Замена барьерного ограждения', price: '1 500 000', desc: 'lerlerlerle', days: 120, clicks: 300},
        {name: 'Замена барьерного ограждения', price: '1 500 000', desc: 'lerlerlerle', days: 120, clicks: 300},
        {name: 'Замена барьерного ограждения', price: '1 500 000', desc: 'lerlerlerle', days: 120, clicks: 300},
    ]);



  return (
    <div style={{padding: '32px 32px'}}>

        <Row >
            <Col span={16} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Title>
                    Все заказы
                </Title>

                <Select
                  defaultValue="default"
                  style={{width: 210}}
                    options={[
                        {value: 'default', label: 'По умолчанию'}
                    ]}
                />
            </Col>
        </Row>


        {/* style={{width: '100%', display: 'flex', gap: 4, flexDirection: 'column'}}   */}
        <Row gutter={16}>

            <Col span={16}
            >

                {orders.map((order) => (
                    <Card
                        title={<Title level={3}>{order.name}</Title>}
                        extra={<Title level={3} style={{color: '#1d39c4'}}>{order.price + ' руб.'}</Title>}
                        style={{}}
                        className={css.card}
                    >
                        <p>{order.desc}</p>

                        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}>
                            <Title level={5}><FieldTimeOutlined style={{color: '#531dab', marginRight: 4}} />{`${order.days} дней на выполнение проекта`}</Title>

                            <Title level={5} style={{color: '#531dab'}}>{`${order.clicks} откликов`}</Title>
                        </div>
                    </Card>
                ))}
            </Col>

            <Col span={8} style={{padding: '0px 24px 24px 24px', backgroundColor: 'white', height: 'fit-content', borderRadius: 5}}>

                <div style={{display: 'flex', justifyContent: 'flex-start'}}>

                    <Title level={5}>
                        {<FilterOutlined />}
                        Фильтр заказов
                    </Title>
                </div>

                <div style={{display: 'flex', justifyContent: 'flex-start'}}>

                    <Title level={5}>Бюджет</Title>

                </div>

                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <InputNumber style={{width :'45%'}}/>
                    {'  -  '}
                    <InputNumber style={{width :'45%'}}/>
                </div>

                <div style={{display: 'flex', justifyContent: 'flex-start'}}>

                    <Title level={5}>Сроки</Title>

                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 32}}>
                    <InputNumber style={{width :'45%'}}/>
                    {'  -  '}
                    <InputNumber style={{width :'45%'}}/>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button type='primary' style={{flexGrow: 1, marginRight: 12}}>
                        Применить фильтр
                    </Button>
                    <Button>
                        Очистить
                    </Button>
                </div>
            </Col>
        </Row>

    </div>
  )
}

export default Orders
