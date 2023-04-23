import { BellOutlined, FieldTimeOutlined, FilterOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Card, Col, InputNumber, Layout, Row, Select, Space, Typography } from 'antd'
import Title from 'antd/es/typography/Title'
import React, { useEffect, useState } from 'react'
import css from '../orders/index.module.css';
import { Content, Header,  } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

export type Order = {
    name: string,
    price: number,
    desc: string,
    days: number,
    responses: number,
    creationIndex: number,
}

export type OrdersSortTypes = "default" | "asc" | "desc";

function Orders() {

    const [orders, setOrders] = useState<Order[]>([
        {name: 'Замена барьерного ограждения', price: 1500000, 
        desc: 'Lorem ipsum dolor sit amet consectetur. Amet condimentum lorem diam vitae commodo etiam pellentesque a sed. Elit rutrum egestas sed nunc congue facilisi. Semper ipsum nibh vitae quis urna a et. ', 
        days: 120, responses: 300, creationIndex: 10},
        {name: 'Замена барьерного ограждения', price: 300000, desc: 'lerlerlerle', days: 30, responses: 300, creationIndex: 1},
        {name: 'Замена барьерного ограждения', price: 500000, desc: 'lerlerlerle', days: 60, responses: 300, creationIndex: 5},
        {name: 'Замена барьерного ограждения', price: 2000000, desc: 'lerlerlerle', days: 200, responses: 300, creationIndex: 3},
    ]);

    const [filteredOrders, setFilteredOrders] = useState<Order[]>(orders);
    const [minValue, setMinValue] = useState<number | null>(null);
    const [maxValue, setMaxValue] = useState<number | null>(null);
    const [minTermDays, setMinTermDays] = useState<number | null>(null);
    const [maxTermDays, setMaxTermDays] = useState<number | null>(null);
    const [sortType, setSortType] = useState<OrdersSortTypes>("default");
    const [filteredAndSortedOrders, setFilteredAndSortedOrders] = useState<Order[]>(orders)

    useEffect(() => {

        let sortedOrders = [];
        console.log(sortType)
        if (sortType !== 'default') {
           switch(sortType) {
            case 'asc': 
                sortedOrders = filteredOrders.sort((a,b) => a.creationIndex - b.creationIndex)
                
                break;
            case 'desc':
                sortedOrders = filteredOrders.sort((a,b) => b.creationIndex - a.creationIndex)
                break;
           }
           console.log(sortedOrders)
           setFilteredAndSortedOrders(sortedOrders);
        } else {
            setFilteredAndSortedOrders(filteredOrders);
        }

    }, [sortType, filteredOrders])    
    
    const handleMinValueChanged = (value: number | null) => {
        setMinValue(value);
    }
    const handleMaxValueChanged = (value: number | null) => {
        setMaxValue(value);
    }

    const handleMinTermChanged = (value: number | null) => {
        setMinTermDays(value);
    }

    const handleMaxTermChanged = (value: number | null) => {
        setMaxTermDays(value);
    }

    const handleFiltersClear = () => {
        setMinValue(null);
        setMaxValue(null);
        setMaxTermDays(null);
        setMinTermDays(null);
        setFilteredOrders(orders);
    }

    const handleApplyFilters = () => {
        let filterArr = orders;
        console.log(orders);

        if (minValue !== null && maxValue !== null) {
            filterArr = filterArr.filter(item => item.price >= minValue && item.price <= maxValue)
        }
        
        if (minTermDays !== null && maxTermDays !== null) {
            filterArr = filterArr.filter(item => item.days >= minTermDays && item.days <= maxTermDays)
        }
        setFilteredOrders(filterArr);
        console.log(filteredOrders);
    }

  return (
    <div style={{padding: '32px 32px'}}>

        <Row >
            <Col span={16} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Title style={{marginTop: 0}}>
                    Все заказы
                </Title>

                <Select
                  style={{width: 210}}
                    options={[
                        {value: 'default', label: 'По умолчанию'},
                        {value: 'desc', label: 'По убыванию'},
                        {value: 'asc', label: 'По возрастанию'},
                    ]}
                    value={sortType}
                    onChange={(value: OrdersSortTypes) => setSortType(value)}
                />
            </Col>
        </Row>


        {/* style={{width: '100%', display: 'flex', gap: 4, flexDirection: 'column'}}   */}
        <Row gutter={16}>

            <Col span={16}
            >

                {filteredAndSortedOrders.length !== 0 ? filteredAndSortedOrders.map((order) => (
                    <Card
                        title={<Title level={3}>{order.name}</Title>}
                        extra={<Title level={3} style={{color: '#1d39c4'}}>{order.price.toLocaleString() + ' руб.'}</Title>}
                        style={{}}
                        className={css.card}
                    >
                        <p>{order.desc}</p>

                        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}>
                            <Title level={5}><FieldTimeOutlined style={{color: '#531dab', marginRight: 4}} />{`${order.days} дней на выполнение проекта`}</Title>

                            <Title level={5} style={{color: '#531dab'}}>{`${order.responses} откликов`}</Title>
                        </div>
                    </Card>
                ))
                    : <Title level={2}>Заказов по вашему запросу не найдено</Title>
            }
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
                    <InputNumber value={minValue}  onChange={handleMinValueChanged} style={{width :'45%'}}/>
                    {'  -  '}
                    <InputNumber value={maxValue} onChange={handleMaxValueChanged} style={{width :'45%'}}/>
                </div>

                <div style={{display: 'flex', justifyContent: 'flex-start'}}>

                    <Title level={5}>Сроки</Title>

                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 32}}>
                    <InputNumber value={minTermDays} onChange={handleMinTermChanged} style={{width :'45%'}}/>
                    {'  -  '}
                    <InputNumber value={maxTermDays} onChange={handleMaxTermChanged} style={{width :'45%'}}/>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button onClick={handleApplyFilters} type='primary' style={{flexGrow: 1, marginRight: 12}}>
                        Применить фильтр
                    </Button>
                    <Button onClick={handleFiltersClear}>
                        Очистить
                    </Button>
                </div>
            </Col>
        </Row>

    </div>
  )
}

export default Orders
