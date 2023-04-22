import React, {useState} from 'react'
import InstallationProgress from '../installationProgress'
import { Button, Col, DatePicker, Divider, InputNumber, Modal, Row, Select, Space } from 'antd'

const JobControlInfo = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        setIsModalOpen(false);

      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
   
    const tasks = [
        [
            {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
            {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
            {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
            {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
            {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
            {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
        ],
        [
            {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
            {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
            {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
            {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
            {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
            {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
        ]
    ]

    const selectOptions = [
        {value: 'Монтаж Г-образной опоры',label: 'Монтаж Г-образной опоры'},
        {value: 'Монтаж Г-образной опоры',label: 'Монтаж Г-образной опоры'},
        {value: 'Монтаж Г-образной опоры',label: 'Монтаж Г-образной опоры'},
        {value: 'Монтаж Г-образной опоры',label: 'Монтаж Г-образной опоры'},
        {value: 'Монтаж Г-образной опоры',label: 'Монтаж Г-образной опоры'},
        {value: 'Монтаж Г-образной опоры',label: 'Монтаж Г-образной опоры'},
    ]
    

  return (
    <div >


        <Row style={{ overflow: 'auto', height: '250px'}} gutter={8}>

            <Col span={12}>

                {tasks[0].map(item =>(
                    <InstallationProgress
                    title={item.title}
                    maxQuantity={item.maxQuantity}
                    unit={item.unit}
                    />
                ))}
                

            </Col>
            <Col span={12}>
            {tasks[1].map(item =>(
                    <InstallationProgress
                    title={item.title}
                    maxQuantity={item.maxQuantity}
                    unit={item.unit}
                    />
                ))}
            </Col>
        </Row>
        
        
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Button onClick={showModal} type='primary'>Добавить прогресс</Button>
        </div>

        <Modal 
            title='Добавление прогресса'
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            width={750}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Отмена
                </Button>,
                <Button key="submit" type="primary"  onClick={handleOk}>
                    Добавить
              </Button>,
            ]}
        >
            <Divider/>

            <Space style={{alignItems: 'center'}}>

                <Select
                    style={{ width: 220 }}
                    options={selectOptions}
                />
                <DatePicker placeholder='Дата выполненной работы' style={{ width: 220 }}/>

                <InputNumber placeholder='Кол-во сделанного в ед. изм.' style={{ width: 220 }}/>
            </Space>
            <Divider/>

        </Modal>
    </div>
  )
}

export default JobControlInfo