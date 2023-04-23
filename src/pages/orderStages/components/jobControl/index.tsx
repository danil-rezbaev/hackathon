import { Button, Col, Menu, Row } from 'antd'
import React, { FC, useState } from 'react'
import JobControlInfo from '../jobControlInfo';
import JobControlHistory from '../jobControlHistory';

interface JobControlProps {
    nextStep: any;
}

const JobControl: FC<JobControlProps> = ({nextStep}) => {
    const [currentMenu, setCurrentMenu] = useState('info');

    const menuItems = [
        {
            label: 'Информационная панель',
            key: 'info',
            content: <JobControlInfo nextStep={nextStep} />
        },
        {
            label: 'История',
            key: 'history',
            content: <JobControlHistory/>
        }
    ]

    const onClick = (e: any) => {
        setCurrentMenu(e.key);
    }

  return (
    <div>
        <Row>
            <Col span={24}>
                <div style={{display: 'flex', justifyContent: 'start', height: 'fit-content', padding: '16px 0'}}>
                    <Button>
                        Выгрузить excel файл
                    </Button>
                </div>

                <Menu selectedKeys={[currentMenu]} onClick={onClick} mode="horizontal" items={menuItems}/>
                <div style={{minHeight: '270px'}}>
                    {menuItems[menuItems.findIndex((value) => value.key === currentMenu)].content}
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default JobControl
