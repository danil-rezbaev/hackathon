import { Button, Col, Menu, Row } from 'antd'
import React, {useState} from 'react'
import JobControlInfo from '../jobControlInfo';
import JobControlHistory from '../jobControlHistory';

const JobControl = () => {

    const [currentMenu, setCurrentMenu] = useState('info');

    const menuItems = [
        {
            label: 'Информационная панель',
            key: 'info',
            content: <JobControlInfo/>
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
                <Button>
                    Выгрузить excel файл
                </Button>

                <Menu selectedKeys={[currentMenu]} onClick={onClick} mode="horizontal" items={menuItems}/>
                <div>
                    {menuItems[menuItems.findIndex((value) => 
                        value.key === currentMenu)].content}
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default JobControl