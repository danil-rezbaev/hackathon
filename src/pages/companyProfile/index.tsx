import { Col, Row } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'
import logo from './images/logo.png'

function CompanyProfile() {
  return (
    <>
        
        <Row>
            <Col span={24}>
                <Title level={4}>Страница компании</Title>
                <div>
                    <img src={logo}></img>
                    
                </div>
            </Col>
        </Row>

    </>
  )
}

export default CompanyProfile