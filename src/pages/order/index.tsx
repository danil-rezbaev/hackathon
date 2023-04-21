import { FieldTimeOutlined } from '@ant-design/icons';
import { Card, Select, Space, Typography } from 'antd'
import Title from 'antd/es/typography/Title'
import React, { useState } from 'react'
import css from '../order/index.module.css';

function Orders() {

    const [orders, setOrders] = useState([
        {name: 'Замена барьерного ограждения', price: '1 500 000', desc: 'Lorem ipsum dolor sit amet consectetur. Amet condimentum lorem diam vitae commodo etiam pellentesque a sed. Elit rutrum egestas sed nunc congue facilisi. Semper ipsum nibh vitae quis urna a et. ', days: 120, clicks: 300},
        {name: 'Замена барьерного ограждения', price: '1 500 000', desc: 'lerlerlerle', days: 120, clicks: 300},
        {name: 'Замена барьерного ограждения', price: '1 500 000', desc: 'lerlerlerle', days: 120, clicks: 300},
        {name: 'Замена барьерного ограждения', price: '1 500 000', desc: 'lerlerlerle', days: 120, clicks: 300},
    ]);

    

  return (
    <>
        
        <div style={{display: 'flex', justifyContent: 'space-between', width: '853px', alignItems: 'center'}}>

            
        
        <Title>
                Все заказы
            </Title>

            <Select 
                style={{width: 210}}
                options={[
                    {value: 'default', label: 'По умолчанию'}
                ]}
            >

            </Select>

        
        </div>  

        <div 
            style={{width: 853, display: 'flex', gap: 4, flexDirection: 'column'}}  
            
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
                        <FieldTimeOutlined />
                        <Title level={5}>{`${order.days} дней на выполнение проекта`}</Title>
                        <Title level={5} style={{color: '#531dab'}}>{`${order.clicks} откликов`}</Title>
                    </div>
                </Card>
            ))}
        </div>

        

    </>
  )
}

export default Orders